import defaultPlaceholderImage from "../../assets/images/default-placeholder-image-url.png";
import "./index.css";

const ArticleCard = ({ article }) => {
  if (!article) return null;

  const {
    imageUrl,
    title,
    description,
    source,
    url,
    publishedAt,
  } = article;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : "Unknown date";

  return (
    <div className="article-card">
      <img
        src={imageUrl || defaultPlaceholderImage}
        className="article-image"
        alt={title || "Article"}
      />
      <p>Published on {formattedDate}</p>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>Source: {source || "Unknown"}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
