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


@app.route('/bb_vs_btn')
def bb_vs_btn():
    return render_template('bb_vs_btn.html')


@app.route('/bvb')
def bvb():
    return render_template('bvb.html')


@app.route('/hu')
def hu():
    return render_template('hu.html')
