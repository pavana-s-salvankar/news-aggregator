import defaultPlaceholderImage from "../../assets/images/default-placeholder-image-url.png";
import "./index.css";

const ArticleCard = ({article }) => {
  const { imageUrl, title, description, source, url, publishedAt } = article;
  return (
    <div className="article-card">
      <img
        src={imageUrl || defaultPlaceholderImage}
        className="article-image"
        alt=""
      />
       <p>Published on {new Date(publishedAt).toLocaleDateString()}</p>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>Source: {source}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default ArticleCard;
