import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>

        return (
            <div className='hello' style={{color: 'red'}}>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>collapse</button>
                </h2>
                {body}
                <h3>creation date: {article.date}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article