import sys
from flask import current_app, g, request
from flask import json
from flask.blueprints import Blueprint
from flask.json import jsonify
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


    return db


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)


@main.route('/test')
def add_test():

    name = request.args.get('name')
    last_name = request.args.get('last_name')

    test_doc = {'s': name,
                'last_name': last_name
                }
    db.students.insert_one(test_doc)

    return jsonify(test_doc)


@main.route('/add_student', methods=['POST'])
def add_student():
    student_first_name = request.args.get('first_name')
    student_last_name = request.args.get('last_name')
    grad_year = request.args.get('grad_year')
    major = request.args.get('major')

    student_doc = {
        'first_name': student_first_name,
        'last_name': student_last_name,
        'grad_year': grad_year,
        'major': major
    }

    db.students.insert_one(student_doc)

    return jsonify(student_doc)


@main.route('/get_students', methods=['GET'])
def get_students():
    students = []

    for student in db.students.find():
        students.append(student)

    return jsonify({'student_list': students})


@main.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}
