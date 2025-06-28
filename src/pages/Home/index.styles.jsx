import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f4f7f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const Heading2 = styled.h2`
  color: #444;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ArticleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NoArticles = styled.div`
  text-align: center;
  color: #888;
  font-size: 18px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
