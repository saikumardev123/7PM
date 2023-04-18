import React from 'react';
import Counter from './Counter';
class MasterCounter extends React.Component {
    constructor() {
        console.log("master- constructor")
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        console.log("master - component did mount is called");
    }

    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentDidUpdate() {
        console.log("master - component did update called");
    }
    render() {
        console.log("master - render called");
        return (
            <div>
                <h1 onClick={this.updateCounter}>The master counter value is {this.state.counter}</h1>
                <Counter masterCounterValue={this.state.counter}></Counter>
            </div>
        )
    }
}
export default MasterCounter;