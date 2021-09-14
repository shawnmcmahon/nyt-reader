import { getAllByPlaceholderText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { getArticles } from '../../utlities/apiCalls';
import Summary from '../Summary/Summary';
import './App.css';

const App = () => {
  const [topics, setTopics] = useState(['arts', 'home', 'science', 'us', 'world'])
  const [currentTopic, setCurrentTopic] = useState('home');
  const [allArticles, setAllArticles] = useState([]);
  // const [homeArticles, setHomeArticles] = useState([]);
  // const [artArticles, setArtArticles] = useState([]);
  // const [scienceArticles, setScienceArticles] = useState([]);
  // const [usArticles, setUsArticles] = useState([]);
  // const [worldArticles, setWorldArticles] = useState([]);


  // useEffect(()=> {
  //     getArticlesByTopic(currentTopic)
  // }, [])

  useEffect(() => {
    const retrieveArticles = async topic => {
      try {
        let data = await getArticlesByTopic(topic)
        setAllArticles(data)
      } catch (error) {
        console.log('error')
      }
    }

    retrieveArticles(currentTopic)
  } , [currentTopic])

  const getArticlesByTopic = (topic) => {
    getArticles('home')
        .then(data => {
          const articles = data.results;
          setAllArticles((prevState) => ({ ...prevState, articles }))
        })
  }

  const displayArticlesByTopic = () => {
    // getArticlesByTopic(currentTopic)
    console.log('all articles in function', allArticles)
    const articleSummaries = allArticles.articles.map((currentArticle, index) => {
        return (
          <Summary 
            currentArticle={currentArticle}
            key={index} />
        )
      })
    console.log('allArticles now', allArticles)
    return articleSummaries;
  }

  const mapTopicsToButtons = () => {
    const buttons = topics.map(currentTopic => {
      return (
        <button 
          className="topic" 
          id={currentTopic} 
          key={currentTopic}
          onClick={(e) => setCurrentTopic(e.target.id)}
        >
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
      <section className="article-summary-container">
        {displayArticlesByTopic}
      </section>
    </div>
  );
}

export default App;
