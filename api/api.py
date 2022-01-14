import sys
from typing import MutableSet
from flask import current_app, g, request
from flask import json
from flask.blueprints import Blueprint
from flask.json import jsonify
from flask_pymongo import PyMongo
from werkzeug.local import LocalProxy
import time
import os

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


@main.route('/add_student', methods=['POST', 'GET'])
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


@main.route('/deleteDB')
def delete():
    db.students.delete_many({})


@main.route('/fillWithSampleDB')
def fill():
    path = os.path.join(current_app.static_folder, 'sample_dataset.json')
    with open(path) as file:
        sampleDB = json.load(file)

        db.students.delete_many({})
        db.students.insert_many(sampleDB['student_list'])
