export const getArticles = async topic => {
  let key = process.env.REACT_APP_API_KEY;
  let response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=jyXldoVNm1aCjKzPnNUAh7YjrWuiZMZB`
  );
  return await checkResponse(response)
};

const checkResponse = response => {
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error(`Error 404: Cannot load resources`);
  } else if (response.status === 500) {
    throw new Error('Server Error. Please try again later');
  } else {
    throw new Error('Error. Please try again later');
  }
}