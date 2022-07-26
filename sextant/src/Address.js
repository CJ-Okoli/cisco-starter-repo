import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url) 
            .then(response => response.json())
            .then(date => this.setState({ ipAddress: date.ip }))
    }

    render() {
        return (
            <span className='Address'>
                {this.state.ipAddress}
            </span>
        )
    }
}

export default Address;
