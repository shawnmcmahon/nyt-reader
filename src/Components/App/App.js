import React, { useEffect, useState } from 'react';
import Topics from '../Topics/Topics'
import './App.css';

const App = () => {
  const [topics, setTopics] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])
  const [allArticles, setAllArticles] = useState([]);
  console.log('hello')
  useEffect(()=> {
    // topics.forEach(currentTopic => {
    //   getArticles(currentTopic)
    //     .then(data => {
    //       setAllArticles((prevState) => ({...prevState, data}))
    //       // setNewResource((prevState) => ({ ...prevState, [name]: value }))
    //     })
    //   })
    // console.log('articles', allArticles)

  }, [allArticles])
  

  return (
    <div className="App">
      <Topics />
      <section className="article-summary-list"> 

      </section>
    </div>
  );
}

export default App;
