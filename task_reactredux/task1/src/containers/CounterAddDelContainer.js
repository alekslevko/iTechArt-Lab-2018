import React from 'react';
import CounterContainer from './CounterContainer';
import AddDelCounter from '../views/AddDelCounter/index';

class CounterAddDelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterArr: [<CounterContainer  />],
            command: "start"
        };
        
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.onDelBtnClick = this.onDelBtnClick.bind(this);
        this.onDefBtnClick = this.onDefBtnClick.bind(this);
    }

    onAddBtnClick() {
        let counter = this.state.counterArr;

        counter.push(<CounterContainer />);
        this.setState({
            command: "add",
            counterArr: counter
        });
    }

    onDelBtnClick() {
        let counter = this.state.counterArr;
        let index = counter.length - 1;

        if (counter.length > 1) {
            counter.splice(index, 1);
            this.setState({
                command: "delete",
                counterArr: counter
            });
        }
    }

    onDefBtnClick() {
        let counter = this.state.counterArr;
        
        counter = [<CounterContainer />];
        this.setState({
            command: "default",
            counterArr: counter
        });
    }

    componentDidMount(){
        console.log("Parent: componentDidMount()");
    }

    componentDidUpdate(){
        console.log("Parent: componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log("Parent: componentWillUnmount()");
    }

    UNSAFE_componentWillReceiveProps(prop){
        console.log("Parent: componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Parent: shouldComponentUpdate()");

        return true;
    }

    render() {
        console.log("Parent: render()");

        return (<AddDelCounter
            onAddBtnClick={this.onAddBtnClick}
            onDelBtnClick={this.onDelBtnClick}
            onDefBtnClick={this.onDefBtnClick}
            counters={this.state.counterArr.map((item, index) => {
                
                return <CounterContainer key={index} command={this.state.command} />;
            })}
        />);

    }
}

export default CounterAddDelContainer;