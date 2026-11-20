import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/case-study', label: 'Case Study' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  const desktopLinkClass = (href) =>
    `transition ${isActive(href) ? 'text-accent font-bold' : 'hover:text-accent'}`;

  const mobileLinkClass = (href) =>
    `border-b border-gray-100 pb-2 transition ${isActive(href) ? 'text-accent font-bold' : 'hover:text-accent'}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center rounded-b-2xl border-b border-gray-100 transition-all duration-300 ${
            scrolled ? 'bg-white/95 shadow-md' : 'bg-white/80 backdrop-blur-md shadow-sm'
          }`}
        >
          <Link href="/" className="text-2xl font-bold tracking-tight text-primary uppercase relative z-50">
            Northstar
          </Link>

          <div className="hidden lg:flex space-x-8 items-center text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-50">
            <Link
              href="/contact"
              className="group hidden items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-bold text-white transition hover:bg-accent lg:flex"
            >
              Contact Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition group-hover:text-accent">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto mobile-menu ${
          menuOpen ? 'open' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg font-medium text-primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={toggleMenu} className={mobileLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto pt-10">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="group flex w-full items-center justify-between gap-3 rounded-full bg-primary py-3 pl-6 pr-3 text-sm font-bold text-white transition hover:bg-accent"
          >
            Contact Us
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:text-accent">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
