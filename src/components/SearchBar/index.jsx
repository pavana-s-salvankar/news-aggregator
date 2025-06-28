import { useState } from "react";
import {
  Option,
  SearchBarContainer,
  Button,
  SearchInput,
  SearchSelect,
  SettingsIcon,
  Wrapper
} from "./index.styles.jsx";
import SettingsModal from "../SettingsModal/index.jsx";
import { CATEGORIES, SOURCES } from "../../constants.js";
import settingsIcon from "../../assets/images/settings.png";
import resetIcon from "../../assets/images/refresh.png";
import searchButtomn from "../../assets/images/search.png";

const SearchBar = ({ onSearch, resetFilters }) => {
  const [fields, setFields] = useState({
    query: "",
    date: "",
    category: "",
    source: "",
  });
  const [showSettings, setShowSettings] = useState(false);

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

  const handleSearch = (e, fieldsOverride) => {
    e.preventDefault();
    onSearch(fieldsOverride || fields);
  };

  const { query, date, category, source } = fields;

  return (
    <SearchBarContainer className="search-bar">
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
      <Wrapper>
      <SearchInput
        type="text"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <Button onClick={(e) => handleSearch(e)}>
        <SettingsIcon src={searchButtomn} alt="Settings" />
      </Button>
      <Button
        type="button"
        onClick={() => setShowSettings(true)}
        aria-label="Settings"
      >
        <SettingsIcon src={settingsIcon} alt="Settings" />
      </Button>
      {showSettings && (
        <SettingsModal
          open={showSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
      <Button type="button" onClick={resetFilters} aria-label="Reset Filters">
        <SettingsIcon src={resetIcon} alt="Settings" />
      </Button>
      </Wrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;
