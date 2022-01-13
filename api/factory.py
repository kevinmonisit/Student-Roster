import time
from flask import Flask, send_from_directory
from flask.json import JSONEncoder
from whitenoise import WhiteNoise
from flask_cors import CORS
from bson import json_util, ObjectId
from datetime import datetime
import os

class MongoJsonEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime("%Y-%m-%d %H:%M:%S")
        if isinstance(obj, ObjectId):
            return str(obj)
        return json_util.default(obj, json_util.CANONICAL_JSON_OPTIONS)


def create_app():

    APP_DIR = os.path.abspath(os.path.dirname(__file__))
    STATIC_FOLDER = os.path.join(APP_DIR, '../build/')
    TEMPLATE_FOLDER = os.path.join(APP_DIR, '..build/static')

    app = Flask(__name__,
                static_folder=STATIC_FOLDER,
                template_folder=TEMPLATE_FOLDER,
                static_url_path='/')

    app.wsgi_app = WhiteNoise(app.wsgi_app, root='./build')
    app.json_decoder = MongoJsonEncoder
    CORS(app)

    @app.route('/')
    def index():
        return app.send_static_file('index.html')

    from .api import main
    app.register_blueprint(main)

    return app

