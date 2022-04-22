import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle
import matplotlib.pyplot as plt

def perform_prediction(stock_id, remainder, purchased):
  
  df = pd.DataFrame({
    "Remainder": pd.Series(remainder),
    "Purchased": pd.Series(purchased)
  })

  csv_filename = str(stock_id) + '.csv'

  df.to_csv(csv_filename)
  dataset = pd.read_csv(csv_filename, usecols=["Remainder", "Purchased"])

  x = dataset.iloc[:,:-1].values
  y = dataset.iloc[:,1].values

  x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.9)

  model = LinearRegression()
  model.fit(x_train,y_train)

  pred_result = model.predict(x_test)

  return pred_result
