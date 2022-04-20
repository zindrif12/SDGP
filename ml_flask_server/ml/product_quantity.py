import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle
import matplotlib.pyplot as plt

def perform_prediction():
  dataset = pd.read_csv('/tmp/data.csv')
  x = dataset.iloc[:,:-1].values
  y = dataset.iloc[:,1].values

  x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.9)

  model = LinearRegression()
  model.fit(x_train,y_train)

  pred_result = model.predict(x_test)

  return pred_result

# Above code is directly copied from the `product1.py` file and removed unnecessary code 
# that is not required to get just the predicted values. 
