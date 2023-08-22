import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const fetchTrending = async () => {
    try {
        const response = await instance.get(`/trending/all/week?api_key=YOUR_API_KEY`); // "YOUR_API_KEY" を適切なAPIキーに置き換えます
        return response.data.results;
    } catch (error) {
        console.error("API request failed:", error);
    }
};