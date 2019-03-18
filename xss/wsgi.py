from flask import Flask, send_from_directory


app = Flask('xss', static_folder='build')


@app.route('/')
def route_homepage():
    return app.send_static_file('index.html')


@app.route('/static/<path:path>')
def route_static(path):
    print(path)
    return send_from_directory('build/static', path)


@app.route('/img/<path:path>')
def route_img(path):
    print(path)
    return send_from_directory('build/img', path)
