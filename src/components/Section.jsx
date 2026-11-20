import './Section.css'
function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2>{title}</h2>

        {link && <a href={link.url}>{link.text}</a>}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section