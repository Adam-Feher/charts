from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('basic.html')


@app.route('/btn')
def btn():
    return render_template('btn.html')


@app.route('/sb_vs_btn')
def sb_vs_btn():
    return render_template('sb_vs_btn.html')
