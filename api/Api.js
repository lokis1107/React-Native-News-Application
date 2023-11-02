import { create } from "apisauce";

const api = create({
  baseURL: "# Implement your Api Base url",
});

const Api = "# Implement your API key value";

const TopHeadlines = api.get("# Implement your Headline of the application" + Api);

export default {
  TopHeadlines,
};
