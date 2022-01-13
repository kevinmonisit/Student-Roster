# OSS Starting Project (Student Roster)
Built with React, Flask, and MongoDB. Depoyed on Heroku.

To run on your own computer, type the following:

```
git git@github.com:kevinmonisit/Student-Roster-OSS.git
cd Student-Roster-OSS
source api/venv/bin/activate
gunicorn wsgi:"gunicorn_get_app()"
```

Alternatively, you can use the currently (at the time of writing this) activate Heroku link:

https://cryptic-castle-74585.herokuapp.com/

The MONGO_URI is currently connected to a database that I have running on MongoDB (includes the random username and password). It's just a throwaway anyways, so it doesn't matter if Github crawlers/bots are looking into this. Definintely bad practice to leave it out, though.

If you want, you can create your own MongoDB database. Change the `[PROD] DB_URI` in the `.ini` to the URI that connects to your own MongoDB database.
