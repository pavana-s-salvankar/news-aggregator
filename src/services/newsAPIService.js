import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNewsAPIArticles = async (query, date, category) => {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || "",
        category: category || "",
        apiKey: NEWS_API_KEY,
        language: "en",
        ...(date && { from: date }),
      },
    });

    console.log("NewsAPI Response:", response.data);

    if (response.data.status === "ok" && response.data.articles.length > 0) {
      return response.data.articles.map((item) => ({
        title: item.title,
        description: item.description,
        url: item.url,
        imageUrl: item.urlToImage,
        publishedAt: item.publishedAt,
        source: item.source.name,
      }));
    } else {
      console.warn(
        "No articles found for the provided query, date, or category."
      );
      return [];
    }
  } catch (error) {
    console.error(
      "Error fetching NewsAPI articles:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
