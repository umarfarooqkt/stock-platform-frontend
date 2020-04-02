import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStockInfo } from '../actions/stocks';
import CanvasJSReact from '../vendor/canvasjs/canvasjs.react.js';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StockInfo = ({ getStockInfo, stockInfo }) => {
    const params = useParams();

    useEffect(() => {
        getStockInfo(params.symbol);
    }, [getStockInfo, params.symbol]);

    const renderGraph = () => {
        if (stockInfo.graph == null) {
            return (
                <div>No data available</div>
            );
        }

        const graphOptions = {
            title: {
                text: '30 Day Price Trend'
            },
            axisY: {
                title: 'Price (USD)',
                prefix: '$'
            },
            data: [{
                type: 'line',
                xValueFormatString: 'DD MMM',
                yValueFormatString: '$#,##0.00',
                dataPoints: stockInfo.graph.map((dataPoint) => ({
                    x: new Date(dataPoint.date_time),
                    y: dataPoint.price
                }))
            }]
        };

        return (
            <div>
                 <CanvasJSChart
                     options={graphOptions}
                     // onRef={(ref) => this.chart = ref}
                 />
            </div>
        );
    };

    return (
        <div>
            <Card>
                <Card.Header>Graph</Card.Header>
                <Card.Body>
                    {stockInfo != null ? renderGraph() : null}
                </Card.Body>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => ({
    stockInfo: state.stocks.stockInfo
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getStockInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo);
