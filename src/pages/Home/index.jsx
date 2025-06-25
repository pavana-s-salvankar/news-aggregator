import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import ArticleCard from "../../components/ArticleCard";
import { fetchNewsAPIArticles } from "../../services/newsAPIService";
import { fetchGuardianArticles } from "../../services/guardianService";
import { fetchNYTimesArticles } from "../../services/nyTimesService";
import "./index.css";

const Home = () => {  
  const [aticles,setArticles] =useState([]);
  const [loading, setLoading] = useState(false); // Loading state
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
        let articles = [];
        if (filters.source === "newsapi") {
          articles = await fetchNewsAPIArticles(
        filters.query,
        filters.date,
        filters.category
          );
        } else if (filters.source === "guardian") {
          articles = await fetchGuardianArticles(
        filters.query,
        filters.date,
        filters.category
          );
        } else if (filters.source === "nytimes") {
          articles = await fetchNYTimesArticles(
        filters.query,
        filters.date,
        filters.category
          );
        } else {
          const newsArticles = await fetchNewsAPIArticles(
        filters.query,
        filters.date,
        filters.category
          );
          const guardianArticles = await fetchGuardianArticles(
        filters.query,
        filters.date,
        filters.category
          );
          const nyTimesArticles = await fetchNYTimesArticles(
        filters.query,
        filters.date,
        filters.category
          );
          articles = [...newsArticles, ...guardianArticles, ...nyTimesArticles];
        }
        setArticles(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles(); // Fetch articles on component mount and whenever filters change
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
              {aticles.length > 0 ? (
                aticles.map((article, index) => (
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
