from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def ghost():
    return render_template('ghost.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
