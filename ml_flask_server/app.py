from flask import Flask, jsonify, request
from flask_cors import CORS

from ml.product_quantity import perform_prediction

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def process_file():
  params = request.get_json()

  remainder = params['remainder']
  purchased = params['purchased']
  stock_id = params['stock_id']
  
  # Call the method in ./ml/product_quantity.py file (imported at the top) to calculate predictions.
  predictions = perform_prediction(stock_id, remainder, purchased)

  # For some reason, the predictions array cannot be jsonified (with jsonify method below).
  # Therefore, adding values from predictions array to a new array `pred_values`.
  pred_values = []

  for prediction in predictions:
    pred_values.append(prediction)

  # Return the response after converting the array to a json with `jsonify`.
  return jsonify(pred_values)
