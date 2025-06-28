import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNewsAPIArticles = async (query = "", date, category = "") => {
  if (query == "") query = "*";
  try {
    const params = {
      q: query,
      category,
      apiKey: NEWS_API_KEY,
      language: "en",
      ...(date && { from: date }),
    };

    const { data } = await axios.get(BASE_URL, { params });

    if (
      data.status === "ok" &&
      Array.isArray(data.articles) &&
      data.articles.length
    ) {
      return data.articles.map(
        ({ title, description, url, urlToImage, publishedAt, source }) => ({
          title,
          description,
          url,
          imageUrl: urlToImage,
          publishedAt,
          source: source?.name,
        })
      );
    }

    console.warn(
      "No articles found for the provided query, date, or category."
    );
    return [];
  } catch (error) {
    console.error(
      "Error fetching NewsAPI articles:",
      error?.response?.data || error?.message
    );
    return [];
  }
};
