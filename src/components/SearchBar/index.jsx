import { useState } from "react";
import "./index.css";

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

  return (
    <div className="search-bar">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
      />
      <select
        name="category"
        value={category}
        onChange={handleChange}
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select
        name="source"
        value={source}
        onChange={handleChange}
      >
        {SOURCES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
