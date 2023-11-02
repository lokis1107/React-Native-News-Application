import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const Api = "?country=us&apiKey=49d2e084d3fc4e1fa6a82b6adf6cb215";

const TopHeadlines = api.get("/top-headlines" + Api);

export default {
  TopHeadlines,
};
