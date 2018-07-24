import React from 'react';
import Counter from '../views/Counter';
import PropTypes from 'prop-types';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset() {
        this.setState({
            count: 0
        });
    }

    render() {
        return <Counter
            increment = {this.increment}
            decrement = {this.decrement}
            reset = {this.reset}
            count = {this.state.count}
        />;
    }    
}

export default CounterContainer;