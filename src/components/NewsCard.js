function NewsCard({ title, text, img }) {
  return (
    <article className="news-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default NewsCard;
