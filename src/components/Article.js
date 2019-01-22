import React from 'react'

class Article extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('Component is mounting')
    }

    componentDidMount() {
        console.log('Component mounted')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will receive props')
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update')
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const style = {width: '50%', margin: '0 auto'}
        const body = isOpen && <section>{article.text}</section>

        return (
            <div className='card' style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        <span className="alert-success p-1">{this.state.count}</span>
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Open'}
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

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article