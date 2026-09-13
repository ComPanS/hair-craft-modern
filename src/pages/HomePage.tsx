import { gallery, principles, reviews, services, site } from '../content/site'

export function HomePage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <img src={asset(gallery[0].src)} alt={gallery[0].alt} />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{site.category}</p>
          <h1>{site.tagline}</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.contact.phoneHref}>Записаться</a>
            <a className="text-link" href="#services">Смотреть услуги <span aria-hidden="true">-&gt;</span></a>
          </div>
        </div>
        <div className="hero-seal">
          <img src={asset('images/hair-craft-logo.png')} alt="Логотип Hair Craft" />
        </div>
        <a className="promo" href={site.contact.phoneHref}>
          <span>Первое посещение</span>
          <strong>-20%</strong>
        </a>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Что делаем</p>
          <h2>Точная форма.<br />Понятная цена.</h2>
          <p>В каждой стрижке: консультация, мытье головы и укладка.</p>
        </div>
        <div className="service-index">
          {services.map((service) => (
            <article className="service-row" key={service.index}>
              <span className="service-number">{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
        <p className="price-note">Актуальную стоимость и свободное время уточняйте при записи.</p>
      </section>

      <section className="craft section" id="approach">
        <div className="craft-image">
          <img src={asset(gallery[2].src)} alt={gallery[2].alt} />
        </div>
        <div className="craft-copy">
          <p className="eyebrow">Hair Craft</p>
          <h2>Не просто стрижем. Работаем над образом.</h2>
          <div className="principles">
            {principles.map(([title, text], index) => (
              <div className="principle" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section" aria-label="Работы и атмосфера Hair Craft">
        <div className="gallery-lead">
          <p className="eyebrow">В деталях</p>
          <p className="gallery-statement">Форма начинается с разговора и заканчивается результатом, который легко носить каждый день.</p>
        </div>
        <figure className="gallery-main"><img src={asset(gallery[1].src)} alt={gallery[1].alt} /></figure>
        <figure className="gallery-secondary"><img src={asset(gallery[3].src)} alt={gallery[3].alt} /></figure>
        <figure className="gallery-detail"><img src={asset(gallery[4].src)} alt={gallery[4].alt} /></figure>
      </section>

      <section className="reviews section" id="reviews">
        <div className="review-summary">
          <p className="eyebrow">Яндекс Карты</p>
          <div className="rating"><strong>{site.rating}</strong><span>из 5</span></div>
          <p>{site.reviewCount}</p>
          <a className="text-link" href={site.contact.maps} target="_blank" rel="noreferrer">Все отзывы <span aria-hidden="true">-&gt;</span></a>
        </div>
        <div className="review-list">
          {reviews.map((review) => (
            <blockquote key={review.author}>
              <p>«{review.text}»</p>
              <footer>{review.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="contacts section" id="contacts">
        <div className="contact-copy">
          <p className="eyebrow">Ваш следующий образ</p>
          <h2>Выберите время.<br />Остальное обсудим в кресле.</h2>
          <a className="button button-light" href={site.contact.phoneHref}>Позвонить: {site.contact.phone}</a>
        </div>
        <div className="contact-facts">
          <div><span>Адрес</span><strong>{site.contact.address}</strong></div>
          <div><span>График</span><strong>{site.contact.hours}</strong></div>
          <div className="contact-links">
            <a href={site.contact.route} target="_blank" rel="noreferrer">Маршрут</a>
            <a href={site.contact.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={site.contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={site.contact.vk} target="_blank" rel="noreferrer">VK</a>
          </div>
        </div>
      </section>
    </>
  )
}
