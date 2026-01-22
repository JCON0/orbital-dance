import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  const handleScrollToSection = (sectionId) => {
    // If we're not on home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(`#${sectionId}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home, just scroll
      const element = document.querySelector(`#${sectionId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features', isScrollLink: true },
      { name: 'How It Works', href: '#how-it-works', isScrollLink: true },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Security', href: '/security' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: '𝕏', name: 'Twitter', href: '#twitter' },
    { icon: 'f', name: 'Facebook', href: '#facebook' },
    { icon: 'in', name: 'LinkedIn', href: '#linkedin' },
    { icon: '📷', name: 'Instagram', href: '#instagram' },
  ]

  return (
    <footer className="border-t border-primary bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 text-sm font-bold text-white">
                OD
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">Orbital Dance</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Discover authentic events around the world. Travel like a local.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{category}</h3>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.isScrollLink ? (
                      <button
                        onClick={() => handleScrollToSection(link.href.substring(1))}
                        className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Orbital Dance. All rights reserved.
          </p>

          {/* Language/Region selector (optional) */}
          <div className="flex items-center gap-3">
            <select className="rounded-lg border border-primary bg-card px-3 py-2 text-sm text-primary transition hover:border-primary">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>Português</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
