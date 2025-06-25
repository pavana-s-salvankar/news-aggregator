import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";
import { fetchGuardianArticles } from "../../services/guardianService";
import { fetchNewsAPIArticles } from "../../services/newsAPIService";
import { fetchNYTimesArticles } from "../../services/nyTimesService";
import "./index.css";

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
        const { query, date, category, source } = filters;

        switch (source) {
          case "newsapi":
            fetchedArticles = await fetchNewsAPIArticles(query, date, category);
            break;
          case "guardian":
            fetchedArticles = await fetchGuardianArticles(query, date, category);
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
            fetchedArticles = [...news, ...guardian, ...nytimes];
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

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="article-sections">
          <div className="article-list">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))
            ) : (
              <p>No articles found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
