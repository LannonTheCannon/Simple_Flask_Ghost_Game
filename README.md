# Ghost Game
Welcome to the Ghost Game Project!
This repository contains a simple, engaging web-based game where a player is presented with three doors - with a ghost hiding behind one of them! The aim of the game is to avoid opening the door with the ghost behind it. If you succeed in doing so, you move on to the next level. However, if you encounter the ghost, you'll have to start over from the beginning.
The game incorporates interactive feedback, providing messages to guide the player throughout the gameplay. Whenever a door is opened, a message is displayed: either a prompt to try again if a ghost was found or an indication of safety, and the level is increased if there was no ghost.

## Structure
main.py: A Python Flask server application responsible for serving the game's main page.
The server uses Flask, a Python web framework, and it listens on port 5001. The server has a single route / that serves a rendered ghost.html template.
ghost.js: The main JavaScript logic driving the gameplay.
The script randomly chooses a door (represented by numbers 1-3) behind which the ghost will hide. It defines the main gameplay behavior and the rules for when a door is clicked, depending on whether it hides the ghost or not.

## How to Play
Open the web app (run the Flask server, and point your browser to the displayed URL, usually localhost:5001).
You'll see three closed doors displayed on your screen.
Click on a door to open it.

If you find the ghost, you'll see a "Boo! A ghost! Try again!" message, and the game will reset.
If there's no ghost behind the door you chose, you'll see the "Safe! Proceeding to level X..." message, and the game will progress to the next level.

## Contribute
Feel free to fork this repo and contribute to the game. The game logic could be expanded with additional features like timed play, score keeping, different difficulty levels, etc. Pull requests are most welcome!
Enjoy the spooky experience with the Ghost Game! Happy playing!
