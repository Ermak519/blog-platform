import React from 'react';
import { Pagination } from 'antd';

import { Navigation } from '../Navigation';
import { ArticleList } from '../ArticleList';

import './App.scss';


export const App = () => (
    <div className="app">
        <nav className='app__nav'>
            <Navigation />
        </nav>
        <main className="app__main">
            <ArticleList />
            <Pagination size="small" total={50} />
        </main>
    </div>
)


