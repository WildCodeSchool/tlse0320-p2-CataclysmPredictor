import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

function ArticleContent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="heigth" />
    </div>
  );
}

export default ArticleContent;
