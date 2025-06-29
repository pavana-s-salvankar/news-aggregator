import axios from "axios";
const BASE_URL = "https://content.guardianapis.com/search";
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;

export const fetchGuardianArticles = async (query, date, category) => {
  try {
    const params = {
      "api-key": GUARDIAN_API_KEY,
      ...(query && { q: query }),
      ...(date && { "from-date": date }),
      ...(category && { section: category }),
      showFields: "headline,trailText",
      "show-elements": "image",
    };

    const { data } = await axios.get(BASE_URL, { params });
    const results = data.response?.results || [];

    return results.map((item) => {
      const imageElement = item.elements?.find(
        (element) => element.type === "image"
      );
      const imageUrl = imageElement?.assets?.[0]?.file || "";

      return {
        title: item.webTitle,
        description: "Click below link for more information",
        url: item.webUrl,
        imageUrl,
        publishedAt: item.webPublicationDate,
        source: "The Guardian",
      };
    });
  } catch (error) {
    console.error("Error fetching Guardian articles:", error);
    return [];
  }
};
