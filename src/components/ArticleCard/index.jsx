import defaultPlaceholderImage from "../../assets/images/default-placeholder-image-url.png";
import {
  ArticleCardContainer,
  ArticleDescription,
  ArticleImage,
  ArticleLink,
  ArticleMeta,
  ArticleTitle,
  PublishedDate,
} from "./index.styles.jsx";

const ArticleCard = ({ article }) => {
  if (!article) return null;

  const { imageUrl, title, description, source, url, publishedAt } = article;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : "Unknown date";

  return (
    <ArticleCardContainer>
      <ArticleImage
        src={imageUrl || defaultPlaceholderImage}
        alt={title || "Article"}
      />
      <PublishedDate>Published on {formattedDate}</PublishedDate>
      <ArticleTitle>{title}</ArticleTitle>
      {description && <ArticleDescription>{description}</ArticleDescription>}
      <ArticleMeta>Source: {source || "Unknown"}</ArticleMeta>
      {url && (
        <ArticleLink href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </ArticleLink>
      )}
    </ArticleCardContainer>
  );
};

export default ArticleCard;
