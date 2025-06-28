import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  justify-content: space-between;
  width: 75%;
  max-width: 900px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SearchSelect = styled.select`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ArticleSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Option = styled.option``;