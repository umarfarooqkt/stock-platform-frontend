import React, { useEffect } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPortfolio, removeFavourite } from '../actions/portfolio';
import { Link } from 'react-router-dom';

const Portfolio = ({ portfolio, getPortfolio, removeFavourite }) => {
    useEffect(() => {
        getPortfolio();
    }, [getPortfolio]);

    const handleRemoveButton = async (symbol) => {
        await removeFavourite(symbol);
        await getPortfolio();
    };

    return (
        <div>
            <Card>
                <Card.Header>Favourites</Card.Header>
                <ListGroup variant="flush">
                    {portfolio.map((stock) => (
                        <ListGroup.Item key={stock.symbol}>
                            <Link to={`/stock/${stock.symbol}`}>{stock.symbol} - {stock.name}</Link>
                            <Button
                                variant="outline-danger"
                                onClick={() => handleRemoveButton(stock.symbol)}
                                style={{ float: 'right' }}
                            >
                                Remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    portfolio: state.stocks.stockList.filter((stock) => state.portfolio.data.includes(stock.symbol))
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPortfolio,
    removeFavourite
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
