from api.factory import create_app

import os
import sys
import configparser

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))


def gunicorn_get_app():
    print("WSGI.PY was called", file=sys.stderr)
    app = create_app()
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['PROD']['DB_URI']

    return app
