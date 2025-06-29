import styled from "styled-components";

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 75%;
  max-width: 900px;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  overflow: hidden;
  background-color: #fff;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ArticleTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
  text-align: left;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ArticleDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: left;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const ArticleLink = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
`;

export const ArticleMeta = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0;
`;

export const PublishedDate = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0;
`;
