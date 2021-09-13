import React, { useEffect, useState } from 'react';
import Topics from '../Topics/Topics'
import { getArticles } from '../../Utlities/apiCalls';
import './Home.css';

const Home = () => {
  const [topics, setTopics] = useState(['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'])


  return (
    <div className="App">
      <Topics />
      <section className="article-summary-list"> 

      </section>
    </div>
  );
}

export default Home;
