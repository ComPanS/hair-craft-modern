import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="page"><p className="eyebrow">404</p><h1>Страница не найдена</h1><Link className="button button-primary" to="/">На главную</Link></section>
}
