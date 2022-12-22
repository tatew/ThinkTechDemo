import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <p>Counter name: {this.props.name}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}