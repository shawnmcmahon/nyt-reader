import React from 'react';
import './Summary.css';

const Summary = ({currentArticle}) => {
  return (
    <article className="article-summary">
      {currentArticle.title}
    </article>
  );
}

export default Summary;