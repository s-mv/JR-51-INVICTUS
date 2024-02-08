from flask import Flask

from sklearn.preprocessing import MinMaxScaler
import pandas as pd
from tensorflow.keras.models import load_model

import math

df = pd.read_csv("./newdata.csv")
orderD = df.filter(["Order_Demand"])
# Convert the dataframe to a np array
orderD_array = orderD.values
# See the train data len
train_close_len = math.ceil(len(orderD_array) * 0.8)
train_close_len

scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(orderD_array)

train_data = scaled_data[0:train_close_len, :]
# Create X_train and y_train
X_train = []
y_train = []
for i in range(60, len(train_data)):
    X_train.append(train_data[i - 60 : i, 0])
    y_train.append(train_data[i, 0])

model = load_model("./Demand.joblib")

app = Flask(__name__)


@app.route("/daily")
def hello_world():
    return model.predict(X_train)


app.run(port=3000)
