import React from 'react';
class Counter extends React.Component {
    constructor() {
        console.log("constructor")
        super();
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        console.log("component did mount is called");
    }

    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentDidUpdate() {
        console.log("component did update called");
    }
    render() {
        console.log("render called");
        return (
            <div>
                <h1 onClick={this.updateCounter}>The counter value is {this.state.counter}</h1>
                The master counter value in counter compoennt value is  {this.props.masterCounterValue}
            </div>
        )
    }
}
export default Counter;