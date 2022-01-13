import sys
from flask import current_app, g
from flask.blueprints import Blueprint
from flask_pymongo import PyMongo
from werkzeug.local import LocalProxy
import time

main = Blueprint('main', __name__)


def get_db():
    """
    Configuration method to return db instance
    """
    db = getattr(g, "_database", None)

    if db is None:

        db = g._database = PyMongo(current_app).db

    print(db, file=sys.stderr)

    return db


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)


@main.route('/test')
def add_test(test):
    test_doc = {'w': 2}
    db.students.insert_one(test_doc)


@main.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}
