import axios from "axios";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_API_KEY;

const buildParams = (query, date, category) => ({
  q: query || "",
  "api-key": NYTIMES_API_KEY,
  ...(date && { begin_date: date.replace(/-/g, "") }),
  ...(category && { fq: `news_desk:("${category}")` }),
});

const mapArticle = (item) => ({
  title: item.headline.main,
  description: item.abstract || "",
  url: item.web_url,
  imageUrl:
    item.multimedia?.length > 0
      ? `https://static01.nyt.com/${item.multimedia[0].url}`
      : "",
  publishedAt: item.pub_date,
  source: item.source || "The New York Times",
});

export const fetchNYTimesArticles = async (query, date, category) => {
  if (!NYTIMES_API_KEY) {
    console.error("NY Times API key is missing. Please check your .env file.");
    return [];
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: buildParams(query, date, category),
    });
    return response?.data?.response?.docs?.map(mapArticle);
  } catch (error) {
    if (error.response) {
      console.error(
        `Error fetching NY Times articles: ${error?.response?.status} - ${error?.response?.statusText}`
      );
    } else {
      console.error("Error fetching NY Times articles:", error?.message);
    }
    return [];
  }
};
