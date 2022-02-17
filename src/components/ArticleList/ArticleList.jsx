import React from "react";

import { ArticleListItem } from "../ArticleListItem";

import './ArticleList.scss'

export const ArticleList = () => {
    const styles = {
        borderRadius: '5px'
    }

    return (
        <>
            <ArticleListItem styles={styles} />
            <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem />
        </>
    )
}