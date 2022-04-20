from flask import Flask, jsonify, request

from ml.product_quantity import perform_prediction

app = Flask(__name__)

@app.route("/", methods=['POST'])
def process_file():
  # Save csv file sent to a location that can be accessed by the ML script.
  # `/tmp` is a directory/forlder that can be accessed by any program in Linux. 
  # Use a proper file path in Windows by replacing the path `/tmp/data.csv`
  f = request.files['data']
  f.save('/tmp/data.csv')

  # Call the method in ./ml/product_quantity.py file (imported at the top) to calculate predictions.
  predictions = perform_prediction()

  # For some reason, the predictions array cannot be jsonified (with jsonify method below).
  # Therefore, adding values from predictions array to a new array `pred_values`.
  pred_values = []

  for prediction in predictions:
    pred_values.append(prediction)

  # Return the response after converting the array to a json with `jsonify`.
  return jsonify(pred_values)
