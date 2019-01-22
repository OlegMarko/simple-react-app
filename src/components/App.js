import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                </div>

                <ArticleList articles={articles}/>
            </div>
        )
    }
}

export default App