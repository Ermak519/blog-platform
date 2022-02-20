import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from '../Navigation';
import { ArticleList } from '../ArticleList';
import { Article } from '../Article';

import './App.scss';

export const App = () => (
  <Router>
    <div className="app">
      <nav className="app__nav">
        <Navigation />
      </nav>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </main>
    </div>
  </Router>
);
