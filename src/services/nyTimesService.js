import axios from "axios";

const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export const fetchNYTimesArticles = async (query, date, category) => {
  const NYTIMES_API_KEY = import.meta.env.VITE_NYTIMES_API_KEY;
  if (!NYTIMES_API_KEY) {
    console.error("NY Times API key is missing. Please check your .env file.");
    return [];
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || "",
        "api-key": NYTIMES_API_KEY,
        begin_date: date ? date.replace(/-/g, "") : undefined,
        fq: category ? `news_desk:("${category}")` : undefined,
      },
    });
    console.log("NY Times Response:", response.data);
    return response.data.response.docs.map((item) => ({
      title: item.headline.main,
      description: item.abstract || "",
      url: item.web_url,
      imageUrl:
        item.multimedia && item.multimedia.length > 0
          ? `https://static01.nyt.com/${item.multimedia[0].url}`
          : "",
      publishedAt: item.pub_date,
      source: item.source || "The New York Times",
    }));
  } catch (error) {
    if (error.response) {
      console.error(
        `Error fetching NY Times articles: ${error.response.status} - ${error.response.statusText}`
      );
    } else {
      console.error("Error fetching NY Times articles:", error.message);
    }
    return [];
  }
};
