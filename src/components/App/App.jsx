import React from 'react';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../Header';
import { ArticleList } from '../ArticleList';
import { Article } from '../Article';
import { LogInForm } from '../LogInForm';
import { RegisterForm } from '../RegisterForm';
import { Page404 } from '../Page404';
import { EditUser } from '../EditUser';
import { ArticleForm } from '../ArticleForm';

import 'antd/dist/antd.css';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <nav className="app__nav">
        <Header />
      </nav>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/articles/:id/edit" element={<ArticleForm />} />
          <Route path="/new-article" element={<ArticleForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<EditUser />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <BackTop>
        <div className="app__back-top">
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </div>
  </Router>
);

export default App;
