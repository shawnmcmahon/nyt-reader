import React, { useEffect, useState } from 'react';
import Topics from '../Topics/Topics'
import { getArticles } from '../../utlities/apiCalls';
import './App.css';

const App = () => {
  const [topics, setTopics] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])
  const [currentTopic, setCurrentTopic] = useState('home');
  const [allArticles, setAllArticles] = useState([]);


  useEffect(()=> {
      getArticles('home')
        .then(data => {
          const articles = data.results;
          setAllArticles((prevState) => ({...prevState, articles}))
        })
    console.log('allArticles', allArticles)

  }, [])
  

  return (
    <div className="App">
      <Topics />
      <section className="article-summary-list"> 

      </section>
    </div>
  );
}

export default App;
