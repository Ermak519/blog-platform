import React from "react";
import { Tag } from 'antd';

import './ArticleListItem.scss'

export const ArticleListItem = () => {
    const tag = 'tag';

    return (
        <div className="article-list-item article">
            <div className="article__header">
                <div className="article__title title">
                    <div className="title__info">
                        info
                    </div>
                    <div className="title__tags">
                        <Tag>{tag}</Tag>
                    </div>
                </div>
                <article className="article__body">
                    body
                </article>
            </div>
            <div className="article__user">
                user
            </div>
        </div>
    )
}