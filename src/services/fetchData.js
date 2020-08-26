export const fetchData = async (query) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
  );

  const data = await res.json();
  return data;
};
