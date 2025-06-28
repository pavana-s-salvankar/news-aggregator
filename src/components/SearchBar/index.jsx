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

  const handleChange = (e, autoSearch = false) => {
    const { name, value } = e.target;
    setFields((prev) => {
      const updated = { ...prev, [name]: value };
      if (autoSearch) {
        onSearch(updated);
      }
      return updated;
    });
  };

  const handleSearch = (e,fieldsOverride) => {
    e.preventDefault();
    onSearch(fieldsOverride || fields);
  };

  const { query, date, category, source } = fields;

  return (
    <SearchBarContainer className="search-bar">
      <SearchInput
        type="text"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <SearchInput
        type="date"
        name="date"
        value={date}
        onChange={(e) => handleChange(e, true)}
      />
      <SearchSelect
        name="category"
        value={category}
        onChange={(e) => handleChange(e, true)}
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
        onChange={(e) => handleChange(e, true)}
      >
        {SOURCES.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </SearchSelect>
      <SearchButton onClick={(e) => handleSearch(e)}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
