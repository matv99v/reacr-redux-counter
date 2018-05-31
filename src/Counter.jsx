import React from 'react';
import { connect } from 'react-redux'; // 2 import connect
import './Counter.css';



class Counter extends React.Component {
    // constructor(props) {
    //     super(props);

        // this.state = { // 1 - remove state
        //     count: 0
        // };
    // }

    incrementHandler = () => {
        // this.setState(prevState => ({count: prevState.count + 1})); // 1 remove state
        this.props.dispatch({ type: 'INCREMENT' }); // 5 - dispatch an action
    }

    decrementHandler = () => {
        // this.setState(prevState => ({count: prevState.count - 1})); // 1 remove state
        this.props.dispatch({ type: 'DECREMENT' }); // 5 - dispatch an action
    }

    render() { // 1 change this.state.count to this.props.count
        return (
            <div className="counter">
                <div className="counter-control" onClick={this.decrementHandler}>-</div>
                <div className="counter-value">{this.props.count}</div>
                <div className="counter-control" onClick={this.incrementHandler}>+</div>
            </div>
       );
    }
}

const mapStateToProps = state => ({ // 2 - define mapStateToProps func
    count: state.count
});


export default connect(mapStateToProps)(Counter); // 2 export connected counter
