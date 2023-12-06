from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def BitCoin_Price():
    key = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    # requesting data from url
    data = requests.get(key)
    data = data.json()
    return data['price']

@app.route("/")
def BTC():
    btc_price = BitCoin_Price()
    return f"BTC price: {btc_price}"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=2080)

