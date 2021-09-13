export const getArticles = (topic) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=jyXldoVNm1aCjKzPnNUAh7YjrWuiZMZB`
  ).then(checkResponse);
};

export const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Request could not go through.`);
  }
};