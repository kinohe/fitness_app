// import process from "process";
export const exerciseOption = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
