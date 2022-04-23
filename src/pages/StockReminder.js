import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Reorder from './pages/Reorder';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reorder from './Reorder';

import { STOCK_STATUS } from '../constants/stock_status';

StockReminder.propTypes = {
  MatStockList: PropTypes.array,
};

StockReminder.defaultProps = {
  MatStockList: [],
};

function StockReminder(props) {
  const [predictions, setPredictions] = useState([]);
  function onDelete1(id) {
    // fetch("http://localhost:8080/api/v1/getExpireInfo/")
    alert('Deleted');
  }

  function onOrder(id) {
    // fetch('http://localhost:3000/reorder')
    // const history = useHistory();
    // const onOrder = () =>{
    // let path = `http://localhost:3000/reorder`;
    // history.push(path);

    <Router>
      <Switch>
        <Route path="/Reorder.js">
          <Reorder />
        </Route>
      </Switch>
    </Router>;
  }

  const { MatStockList } = props;

  useEffect(() => {
    // These two variables should be set with data queried from the database and
    // passed down here
    const remaindToBeDynamic = [
      20, 10, 15, 20, 45, 10, 25, 35, 5, 15, 40, 20, 25, 15, 10, 20, 20, 5, 10, 15, 10, 20, 25, 15, 12, 24, 45, 23, 12,
      13, 22, 13, 15, 12, 14, 12,
    ];
    const purchasedToBeDynamic = [
      180, 500, 45, 80, 135, 120, 195, 175, 150, 145, 185, 160, 200, 165, 200, 250, 130, 100, 110, 145, 250, 220, 160,
      120, 150, 56, 115, 47, 145, 175, 145, 147, 147, 123, 115, 110,
    ];

    const predictionParams = [];

    MatStockList.forEach((stock) => {
      const stockStatus = getStockStatus(stock.id);

      if (stockStatus) {
        predictionParams.push({
          stock_id: stock.id,
          stock_name: stock.mtr_name,
          remainder: stockStatus.remainder,
          purchased: stockStatus.purchased,
        });
      }
    });

    if (predictionParams.length > 0) {
      Promise.all([...fetchPredictions(predictionParams)]).then((predictionsArr) => {
        setPredictions(predictionsArr);
      });
    }
  }, [MatStockList]);

  const fetchPredictions = (predictionParams) => {
    const fetches = [];

    predictionParams.forEach((params) => {
      fetches.push(
        fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        })
          .then((response) => response.json())
          .then((result) => {
            const lastIndex = result.length - 1;
            return { stock_id: params.stock_id, prediction: result[lastIndex] };
          })
      );
    });

    return fetches;
  };

  const getStockStatus = (stockId) => {
    return STOCK_STATUS.find((status) => {
      return status.stock_id == stockId;
    });
  };

  const getPredictionByStockId = (stockId) => {
    const found = predictions.find((pred) => {
      return pred.stock_id == stockId;
    });

    if (found && typeof parseInt(found.prediction) === 'number') {
      return parseInt(found.prediction);
    }

    return 'Not found';
  };

  return (
    <div>
      <h2 className="text-center">Stock Prediction</h2>
      <div className="row"></div>

      <div className="row">
        <table style={{ marginLeft: '15px' }} className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Products Name</th>
              <th>Products No.</th>
              <th>Prediction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MatStockList.map((post) => (
              <tr key={post.id}>
                <td>{post.mtr_name}</td>
                <td>{post.mtr_no}</td>
                <td>{getPredictionByStockId(post.id)}</td>
                <td>
                  <button onClick={onDelete1.bind(this, post.id)} className="btn btn-danger">
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={onOrder.bind(this, post.id)}
                    className="btn btn-success"
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockReminder;
