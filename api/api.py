import time
from flask import Flask, send_from_directory
from whitenoise import WhiteNoise
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
app.wsgi_app = WhiteNoise(app.wsgi_app, root='../build')
CORS(app)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/testindex')
def anotherTest():
    return send_from_directory('../build/', 'index.html')


@app.route('/test')
def test():
    return '<h1>test</h1>'
