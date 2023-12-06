from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_price')
def get_price():
    api_url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    response = requests.get(api_url)
    data = response.json()
    price = data.get('price', 'N/A')
    return {'price': price}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=2080)
