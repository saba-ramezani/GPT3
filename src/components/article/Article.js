import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <button type='Button'>Read Full Article</button>
    </div>
  </div>
);

export default Article;
