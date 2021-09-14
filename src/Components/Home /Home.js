import React from 'react';
import './Home.css';

const Home = ({currentArticle}) => {
  return (
    <article className="article-summary">
      {currentArticle.title}
    </article>
  );
}

export default Home;