import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Spin, List } from 'antd';

import { getDataArticles } from '../../store/middlewares/thunks'

import { ArticleListItem } from "../ArticleListItem";

import './ArticleList.scss'


export const ArticleList = () => {
    const { articlesData, articlesLoadingStatus } = useSelector(state => state.articles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataArticles())
    }, [dispatch]);

    return (
        <>
            {
                articlesLoadingStatus === 'loading' ? <Spin /> :
                    <List grid={{ gutter: 16, column: 1 }}
                        dataSource={articlesData}
                        renderItem={(article) => (
                            <List.Item>
                                <ArticleListItem data={article} />
                            </List.Item>
                        )} />
            }
            <Pagination size="small" total={50} />
        </>
    )
}