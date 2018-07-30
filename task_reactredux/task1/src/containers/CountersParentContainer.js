import React from 'react';
import CounterContainer from './CounterContainer';
import CountersParent from '../views/CountersParent/index';
import commandsEnum from '../Constants';

class CountersParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countersList: [<CounterContainer  />],
            command: commandsEnum.start
        };
    }

    onAddCounterBtnClick = () => {
        let counterArr = [...this.state.countersList];

        counterArr.push(<CounterContainer />);
        this.setState({
            command: commandsEnum.add,
            countersList: counterArr
        });
    }

    onDeleteCounterBtnClick = () => {
        let counterArr = [...this.state.countersList];
        let index = counterArr.length - 1;

        if (counterArr.length > 1) {
            counterArr.splice(index, 1);
            this.setState({
                command: commandsEnum.del,
                countersList: counterArr
            });
        }
    }

    onSetDefaultsBtnClick = () => {
        this.setState({
            command: commandsEnum.def,
            countersList: [<CounterContainer />]
        });
    }

    componentDidMount() {
        console.log("Parent: componentDidMount()");
    }

    componentDidUpdate() {
        console.log("Parent: componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("Parent: componentWillUnmount()");
    }

    UNSAFE_componentWillReceiveProps(prop) {
        console.log("Parent: componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Parent: shouldComponentUpdate()");

        return true;
    }

    render() {
        console.log("Parent: render()");

        return (<CountersParent
            onAddCounterBtnClick={this.onAddCounterBtnClick}
            onDeleteCounterBtnClick={this.onDeleteCounterBtnClick}
            onSetDefaultsBtnClick={this.onSetDefaultsBtnClick}
            counterArr={this.state.countersList.map((item, index) => {
                return <CounterContainer key={index} command={this.state.command} />;
            })}
        />);

    }
}

export default CountersParentContainer;