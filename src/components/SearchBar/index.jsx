import { useState } from "react";
import {
  Option,
  SearchBarContainer,
  SearchButton,
  SearchInput,
  SearchSelect,
} from "./index.styles.jsx";

const CATEGORIES = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const SOURCES = [
  { value: "", label: "All Sources" },
  { value: "newsapi", label: "NewsAPI" },
  { value: "guardian", label: "The Guardian" },
  { value: "nytimes", label: "The New York Times" },
];

const SearchBar = ({ onSearch }) => {
  const [fields, setFields] = useState({
    query: "",
    date: "",
    category: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(fields);
  };

  const { query, date, category, source } = fields;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer className="search-bar">
      <SearchInput
        type="text"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <SearchInput
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <SearchSelect
        name="category"
        value={category}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      >
        <Option value="">All Categories</Option>
        {CATEGORIES.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </SearchSelect>
      <SearchSelect
        name="source"
        value={source}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      >
        {SOURCES.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </SearchSelect>
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
