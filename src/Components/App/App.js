import React, { useEffect, useState } from 'react';
import { getArticles } from '../../utlities/apiCalls';
import './App.css';

const App = () => {
  const [topics, setTopics] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])
  const [currentTopic, setCurrentTopic] = useState('home');
  const [allArticles, setAllArticles] = useState([]);


  useEffect(()=> {
      getArticlesByTopic(currentTopic)
      console.log('all articles', allArticles)
  }, [])

  const getArticlesByTopic = (topic) => {
    getArticles(topic)
        .then(data => {
          const articles = data.results;
          setAllArticles((prevState) => ({...prevState, articles}))
        })
    setCurrentTopic(topic)
  }

  const mapTopicsToButtons = () => {
    const buttons = topics.map(currentTopic => {
      return (
        <button className="topic" key={currentTopic}>
          #{currentTopic}
        </button>
      )
    })

    return buttons
  }
  

  return (
    <div className="App">
      <header className="App-header"> 
        NYTimes Reader
      </header>
      <section className="topic-buttons-container">
        {mapTopicsToButtons()}
      </section>
    </div>
  );
}

export default App;
