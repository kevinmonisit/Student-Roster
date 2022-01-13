# OSS Starting Project (Student Roster)
Built with React, Flask, and MongoDB. Runs using Gunicorn and is deployed
on Heroku. Static files are encapsulated using WhiteNoise.

To run, type:

cd OSS-Project
source venv/bin/activate
gunicorn wsgi:"create_app()"
