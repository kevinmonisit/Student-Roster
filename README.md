# Student Roster
Built with React, Flask, and MongoDB. Depolyed on Heroku.

To run on your own computer, type the following:

```
git clone git@github.com:kevinmonisit/Student-Roster.git
cd Student-Roster
npm install
python3 -m venv ./api/venv
source ./api/venv/bin/activate
pip install -r requirements.txt
```

To begin an instance of the flask server, cd into the project and type:
```
gunicorn wsgi:"gunicorn_get_app()"
```

Make sure you're running the python virtual environemnt when running the above command. You will know you're running a python env when the beginning of your console starts with `(venv)`.

Alternatively, you can use the currently (at the time of writing this) activate Heroku link:

https://cryptic-castle-74585.herokuapp.com/

The MONGO_URI is currently connected to a database that I have running on MongoDB (includes the random username and password). It's just a throwaway anyways, so it doesn't matter if Github crawlers/bots are looking into this. Definintely bad practice to leave it out, though.

If you want, you can create your own MongoDB database. Change the `[PROD] DB_URI` in the `.ini` to the URI that connects to your own MongoDB database.
