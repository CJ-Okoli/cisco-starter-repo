import React, { Component } from 'react';
const ws = new WebSocket("ws://localhost:55455");

class Latency extends Component {
    render() {
        return (
            //Open WebSocket to ws://localhost:55455
            <div>
                {/* display packet Latency from Pylon */}
            </div>
        )
    }
}

export default Latency;