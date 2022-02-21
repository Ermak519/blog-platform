import React from 'react';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from '../Navigation';
import { ArticleList } from '../ArticleList';
import { Article } from '../Article';
import { LogInForm } from '../LogInForm';
import { RegisterForm } from '../RegisterForm';

import './App.scss';

export const App = () => {
  const BackTopStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
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
            <Route path="/login" element={<LogInForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
      </div>
      <BackTop>
        <div style={BackTopStyle}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </Router>
  );
};
