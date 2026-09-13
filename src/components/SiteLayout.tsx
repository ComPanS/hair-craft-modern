import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#services', label: 'Услуги' },
  { to: '#approach', label: 'Подход' },
  { to: '#reviews', label: 'Отзывы' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Hair Craft, на главную">
          <img src={`${import.meta.env.BASE_URL}images/hair-craft-logo.png`} alt="Hair Craft" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Основная навигация">
          {navigation.map(({ to, label }) => (
            <a key={to} href={to} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={site.contact.phoneHref}>Позвонить</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <img src={`${import.meta.env.BASE_URL}images/hair-craft-logo.png`} alt="" />
        <p>{site.fullName}</p>
        <a href={site.contact.phoneHref}>{site.contact.phone}</a>
      </footer>
    </div>
  )
}
