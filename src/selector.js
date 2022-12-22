import React from "react";

export class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        }
    }


    handleChange = (event) => {
        this.setState({selected: event.target.value});
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Selected Value: {this.state.selected}</p>
                <select onChange={this.handleChange} value={this.state.selected}>
                    <option disabled value={""}>Choose one</option>
                    <option value={"Val1"}>Value 1</option>
                    <option value={"Val2"}>Value 2</option>
                    <option value={"Val3"}>Value 3</option>
                </select>
            </div>
        );
    }
}