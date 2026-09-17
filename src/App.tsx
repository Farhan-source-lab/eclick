import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ThemeToggle } from './components/ThemeToggle';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle internal relative navigation
      if (href.startsWith('/') && !href.startsWith('//') && !target.hasAttribute('download')) {
        e.preventDefault();
        if (window.location.pathname !== href) {
          window.history.pushState(null, '', href);
          setCurrentPath(href);
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Router matching logic
  const renderContent = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    if (path === '/') return <HomePage />;
    if (path === '/services') return <ServicesPage />;
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetailPage slug={slug} />;
    }
    if (path === '/projects') return <ProjectsPage />;
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} />;
    }
    if (path === '/about' || path === '/about-us') return <AboutPage />;
    if (path === '/locations') return <LocationsPage />;
    if (path.startsWith('/locations/')) {
      const slug = path.replace('/locations/', '');
      return <LocationDetailPage slug={slug} />;
    }
    if (path === '/faq') return <FaqPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/blog') return <BlogPage />;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <BlogPostPage slug={slug} />;
    }
    if (path.startsWith('/blog-posts/')) {
      const slug = path.replace('/blog-posts/', '');
      return <BlogPostPage slug={slug} />;
    }
    if (path === '/privacy') return <PrivacyPage />;
    if (path === '/terms') return <TermsPage />;

    return <HomePage />;
  };

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header 
          currentPath={currentPath} 
          onOpenMobileMenu={() => setMobileMenuOpen(true)} 
        />
        
        <MobileNav 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          currentPath={currentPath} 
        />

        <div className="flex flex-1 flex-col pt-20 sm:pt-24">
          <main className="flex flex-1 flex-col">
            {renderContent()}
          </main>
        </div>

        <Footer />

        {/* Floating Theme Toggle Switch (matches reference screenshot) */}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle variant="pill" />
        </div>
      </div>
    </SmoothScroll>
  );
};
