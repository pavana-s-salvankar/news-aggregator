import axios from "axios";
const BASE_URL = "https://content.guardianapis.com/search";

export const fetchGuardianArticles = async (query, date, category) => {
  const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || "",
        "api-key": GUARDIAN_API_KEY,
        "from-date": date || undefined,
        section: category || undefined,
        showFields: "headline,trailText",
        "show-elements": "image",
      },
    });
    console.log("Guardian API Response:", response.data);
    return response.data.response.results.map((item) => {
      const imageElement = item.elements?.find(
        (element) => element.type === "image"
      );
      const imageUrl = imageElement?.assets?.length
        ? imageElement.assets[0].file
        : "";

      return {
        title: item.webTitle,
        description: "Click below link for more information",
        url: item.webUrl,
        imageUrl: imageUrl,
        publishedAt: item.webPublicationDate,
        source: "The Guardian",
      };
    });
  } catch (error) {
    console.error("Error fetching Guardian articles:", error);
    return [];
  }
};
