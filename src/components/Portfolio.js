import React, { Component } from 'react'
import { Card, ListGroup, Button } from "react-bootstrap";
import axios from 'axios';
import { getToken } from '../reducers';
import configureStore from "../configureStore";

class Portfolio extends Component{
    state = {
        favStocks: [
            {
                user_id: "1",
                stock_symbol: "APPL",
                favourite_status: true,
                stock_name: "Apple Inc.",
                stock_description: "This is the stock description"
            },
            {
                user_id: "1",
                stock_symbol: "AMD",
                favourite_status: true,
                stock_name: "Advance Micro Devices",
                stock_description: "This is the stock description"
            }
        ],
        unFavStocks: [
            {
                user_id: "1",
                stock_symbol: "Intel",
                favourite_status: true,
                stock_name: "Intel Corporation",
                stock_description: "This is the stock description"
            }
        ]
    };

    token = getToken(configureStore().store.getState());

    portfolioUrl = `${process.env.REACT_APP_BACKEND_URL}/portfolio`;

    componentDidMount() {
        this.getFavStocks();
        this.getUnFavStocks();
    }

    getFavStocks() {
        const url = this.portfolioUrl + '/allfavourites';

        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    ...this.state,
                    favStocks: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getUnFavStocks() {
        const url = this.portfolioUrl + '/allunfavourites';

        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response => {
                this.setState({
                    ...this.state,
                    unFavStocks: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    getFavList() {
        let list = [];

        this.state.favStocks.forEach(stock => {
            list.push(<ListGroup.Item key={stock.stock_symbol}>({stock.stock_symbol}) {stock.stock_name}<Button variant="outline-danger">Remove</Button></ListGroup.Item>);
        });
        return list
    }

    getUnFavList() {
        let list = [];

        this.state.unFavStocks.forEach(stock => {
            list.push(<ListGroup.Item key={stock.stock_symbol}>({stock.stock_symbol}) {stock.stock_name}<Button variant="outline-primary">Add</Button></ListGroup.Item>);
        });
        return list
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Favourites</Card.Header>
                    <ListGroup variant="flush">
                        {this.getFavList()}
                    </ListGroup>
                </Card>
                <Card>
                    <Card.Header>Stocks</Card.Header>
                    <ListGroup variant="flush">
                        {this.getUnFavList()}
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default Portfolio
