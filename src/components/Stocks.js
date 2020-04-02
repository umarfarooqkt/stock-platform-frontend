import React, {useEffect} from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStocks } from '../actions/stocks';
import { getPortfolio, addFavourite, removeFavourite } from '../actions/portfolio';
import { Link } from 'react-router-dom';

const Stocks = ({ stocks, getStocks, getPortfolio, addFavourite, removeFavourite }) => {
    useEffect(() => {
        getStocks()
    }, [getStocks]);

    const renderFavouriteButton = ({ symbol, favourite }) => {
        if (favourite) {
            return (
                <Button
                    variant="outline-danger"
                    onClick={async () => {
                        await removeFavourite(symbol);
                        await getPortfolio();
                    }}
                    style={{ float: 'right' }}
                >
                    Unfavourite
                </Button>
            );
        } else {
            return (
                <Button
                    onClick={async () => {
                        await addFavourite(symbol);
                        await getPortfolio();
                    }}
                    style={{ float: 'right' }}
                >
                    Favourite
                </Button>
            );
        }
    };

    return (
        <div>
            <Card>
                <Card.Header>Stock Listing</Card.Header>
                <ListGroup variant="flush">
                    {stocks.map((stock) => (
                        <ListGroup.Item key={stock.symbol}>
                            <Link to={`/stock/${stock.symbol}`}>{stock.symbol} - {stock.name}</Link>
                            {renderFavouriteButton(stock)}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    stocks: state.stocks.stockList.map((stock) => ({
        ...stock,
        favourite: state.portfolio.data.includes(stock.symbol)
    }))
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getStocks,
    getPortfolio,
    addFavourite,
    removeFavourite
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
