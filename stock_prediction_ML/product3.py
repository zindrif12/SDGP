import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle
import matplotlib.pyplot as plt

dataset = pd.read_csv('p3.csv')
x = dataset.iloc[:,:-1].values
y = dataset.iloc[:,1].values
print(dataset.head())

x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.9)

model = LinearRegression()
model.fit(x_train,y_train)

pred_result = model.predict(x_test)

print("Tests for Remainder : ", x_test)
print()
print("Predicted Qty to buy : ", pred_result)

plt.scatter(x,y, color='red')
plt.title('Product 3 - Stock Prediction')
plt.xlabel('Remainder')
plt.ylabel('Buying Qty')
plt.show()

filename = 'p3_prediction'
pickle.dump(model,open(filename,'wb'))

load_model = pickle.load(open(filename,'rb'))
load_model.predict(x_test)