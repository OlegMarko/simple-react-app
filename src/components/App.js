import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.PureComponent {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>

                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App