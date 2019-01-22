import React from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends React.Component{
    render() {
        const {articles} = this.props
        const articleList = articles.map(article =>
            <li key={article.id} className="article-list__li">
                <Article article={article} />
            </li>
        )

        return <ul>{articleList}</ul>
    }
}

export default ArticleList