import React, { useEffect, useRef } from 'react';

interface CityCoord {
  lat: number;
  lng: number;
}

interface LocationsGlobeProps {
  cities?: CityCoord[];
  className?: string;
}

export const LocationsGlobe: React.FC<LocationsGlobeProps> = ({
  cities = [
    { lat: 43.6532, lng: -79.3832 },
    { lat: 43.5890, lng: -79.6441 },
    { lat: 43.7315, lng: -79.7624 },
    { lat: 43.8561, lng: -79.3370 },
    { lat: 43.8361, lng: -79.4985 },
    { lat: 43.4675, lng: -79.6877 },
    { lat: 43.3255, lng: -79.7990 },
    { lat: 43.2557, lng: -79.8711 },
    { lat: 45.4215, lng: -75.6972 },
    { lat: 43.4643, lng: -80.5204 },
  ],
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true });
    if (!gl) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    // Generate sphere points
    const points: number[] = [];
    const numPoints = 1200;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      points.push(x, y, z, 0.0); // 0.0 = regular dot
    }

    // Add city pin highlights
    cities.forEach((c) => {
      const latRad = (c.lat * Math.PI) / 180;
      const lngRad = ((c.lng + 180) * Math.PI) / 180;
      const x = -(Math.cos(latRad) * Math.sin(lngRad));
      const y = Math.sin(latRad);
      const z = Math.cos(latRad) * Math.cos(lngRad);
      points.push(x * 1.02, y * 1.02, z * 1.02, 1.0); // 1.0 = city highlight dot
    });

    const vsSource = `
      attribute vec4 a_position;
      uniform mat4 u_matrix;
      varying float v_isCity;
      varying float v_depth;

      void main() {
        vec4 pos = u_matrix * vec4(a_position.xyz, 1.0);
        gl_Position = pos;
        v_isCity = a_position.w;
        v_depth = pos.z;
        gl_PointSize = v_isCity > 0.5 ? 8.0 : (2.5 + pos.z * 1.5);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying float v_isCity;
      varying float v_depth;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if (length(coord) > 0.5) discard;
        if (v_depth < -0.2) discard;

        if (v_isCity > 0.5) {
          gl_FragColor = vec4(1.0, 0.667, 0.004, 1.0); // Gold CTA highlight
        } else {
          float alpha = 0.35 + (v_depth + 1.0) * 0.3;
          gl_FragColor = vec4(0.7, 0.7, 0.7, alpha);
        }
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 4, gl.FLOAT, false, 0, 0);

    const uMatrix = gl.getUniformLocation(program, 'u_matrix');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let rotX = 0.3;
    let rotY = 1.2;
    let velX = 0;
    let velY = 0.004;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      velY = dx * 0.005;
      velX = dy * 0.005;
      rotY += velY;
      rotX += velX;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    function render() {
      if (!gl) return;

      if (!isDragging) {
        velY *= 0.95;
        velX *= 0.95;
        rotY += 0.003 + velY;
        rotX += velX;
      }

      gl.viewport(0, 0, width, height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Simple orthographic rotation matrix
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const matrix = [
        cosY, sinY * sinX, sinY * cosX, 0,
        0, cosX, -sinX, 0,
        -sinY, cosY * sinX, cosY * cosX, 0,
        0, 0, 0, 1.3
      ];

      gl.uniformMatrix4fv(uMatrix, false, new Float32Array(matrix));
      gl.drawArrays(gl.POINTS, 0, points.length / 4);

      animId = requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [cities]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="h-80 w-80 cursor-grab active:cursor-grabbing sm:h-96 sm:w-96 md:h-[450px] md:w-[450px]"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};
