import React, { Component } from "react";
import axios from "axios";
import ReactJson from 'react-json-view'

class Registry extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/directory`)
            .then(response => {
                console.log(response.data);
                const data = response.data;
                this.setState({ data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <ReactJson src={this.state.data}/>
            </div>
        )
    }
}

export default Registry;
