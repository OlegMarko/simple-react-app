import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const style = {width: '50%', margin: '0 auto'}
        const body = this.state.isOpen && <section>{article.text}</section>

        return (
            <div className='card' style={style}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>

                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date: {(new Date(article.date)).toDateString()}
                    </h6>

                    {body}
                </div>
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