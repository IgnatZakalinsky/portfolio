import React, {Component} from 'react';

const Clock = class Clock extends Component {
    state = {
        t: 0,
        v: true
    };
    ti = null;

    constructor(props) {
        super(props);
        console.log("constucted.");

    }

    componentDidMount() {
        console.log("mounted.");
        this.ti = setInterval(() => {
            console.log("updated.");
            this.setState({t: this.state.t + 1});
        }, 1000)
    }

    componentDidUpdate() {
        //console.log("updated.");
    }

    componentWillUnmount() {
        clearInterval(this.ti)
    }

    render() {
        //console.log("rendered.");
        return <div>Clock {this.state.v && this.state.t}</div>
    }
};

export default Clock;