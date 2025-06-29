import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/top-headlines";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNewsAPIArticles = async (
  query = "",
  date,
  category = "",
  source = ""
) => {
  try {
    const params = {
      ...(query && { q: query }),
      ...(category && { category }),
      ...(source && { sources: source }),
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
        ({
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          source,
          author,
        }) => ({
          title,
          description,
          url,
          imageUrl: urlToImage,
          publishedAt,
          source: source?.name,
          author: author || "Unknown",
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
