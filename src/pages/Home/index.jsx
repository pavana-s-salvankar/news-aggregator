import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import { fetchGuardianArticles } from "../../services/guardianService";
import { fetchNewsAPIArticles } from "../../services/newsAPIService";
import { fetchNYTimesArticles } from "../../services/nyTimesService";
import {
  ArticleList,
  ArticleSection,
  HomeContainer,
  LoadingContainer,
  LoadingSpinner,
  NoArticles,
} from "./index.styles.jsx";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    query: "",
    date: "",
    category: "",
    source: "",
  });

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        let fetchedArticles = [];
        const { query, date } = filters;
        // Get preferences from localStorage
        let preferences = {};
        try {
          const prefString = localStorage.getItem("newsAggregatorPreferences");
          if (prefString) {
            preferences = JSON.parse(prefString);
          }
        } catch (e) {
          preferences = {};
          console.warn("Failed to parse preferences from localStorage", e);
        }
        // Prefer filter values, fallback to preferences
        const category = filters.category || preferences.category;
        const source = filters.source || preferences.source;

        switch (source) {
            case "newsapi":
            case "wired":
            case "bbc":
            case "cnn":
            console.log(source);
            fetchedArticles = await fetchNewsAPIArticles(
              query,
              date,
              category,
              source
            );
            break;
          case "guardian":
            fetchedArticles = await fetchGuardianArticles(
              query,
              date,
              category
            );
            break;
          case "nytimes":
            fetchedArticles = await fetchNYTimesArticles(query, date, category);
            break;
          default:
            const [news, guardian, nytimes] = await Promise.all([
              fetchNewsAPIArticles(query, date, category),
              fetchGuardianArticles(query, date, category),
              fetchNYTimesArticles(query, date, category),
            ]);
            fetchedArticles = [
              ...(Array.isArray(news) ? news : []),
              ...(Array.isArray(guardian) ? guardian : []),
              ...(Array.isArray(nytimes) ? nytimes : []),
            ];
            console.log("Fetched articles from all sources:", fetchedArticles);
            if (preferences?.authors?.length > 0) {
              fetchedArticles = fetchedArticles.filter((article) =>
                preferences.authors.some((author) =>
                  article.author?.toLowerCase().includes(author.toLowerCase())
                )
              );
            }
        }
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [filters]);

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
  };
  const resetFilters = () => {
    window.location.reload();
  };
  return (
    <HomeContainer>
      <SearchBar onSearch={handleSearch} resetFilters={resetFilters} />
      {loading ? (
        <LoadingContainer>
          <LoadingSpinner></LoadingSpinner>
        </LoadingContainer>
      ) : (
        <ArticleSection>
          <ArticleList>
            {articles?.length > 0
              ? articles.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))
              : !loading && <NoArticles>No articles found</NoArticles>}
          </ArticleList>
        </ArticleSection>
      )}
    </HomeContainer>
  );
};

export default Home;
