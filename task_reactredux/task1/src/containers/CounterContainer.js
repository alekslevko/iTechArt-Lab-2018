import React from 'react';
import Counter from '../views/Counter';
import commandsEnum from '../Constants';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset = () => {
        this.setState({
            count: 0
        });
    }

    checkNumberOnParity = (num) => {
        return num % 2 === 0;
    }

    componentDidMount() {
        console.log("Child: componentDidMount()");
    }

    componentDidUpdate() {
        console.log("Child: componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("Child: componentWillUnmount()");
    }

    UNSAFE_componentWillReceiveProps(prop) {
        console.log("Child: componentWillReceiveProps()");

        let counter = this.state.count;

        if (prop.command === commandsEnum.add && counter !== 0 && this.checkNumberOnParity(counter) ) {
            this.setState({
                count: counter + 1
            });
        } else if (prop.command === commandsEnum.del && counter !== 0 && !this.checkNumberOnParity(counter) ) {
            this.setState({
                count: counter - 1
            });
        } else if (prop.command === commandsEnum.def) {
            this.setState({
                count: 0
            });
        }       
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Child: shouldComponentUpdate()");

        if (nextState.count === this.state.count) {
            return false;
        } 

        return true;
    }

    render() {
        console.log("Child: render()");         

        return (<Counter
            increment = {this.increment}
            decrement = {this.decrement}
            reset = {this.reset}
            count = {this.state.count}
        />);
    }
}

export default CounterContainer;