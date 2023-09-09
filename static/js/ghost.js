
let ghostBehindDoor = Math.floor(Math.random() * 3) + 1;
console.log("Initial ghost door:", ghostBehindDoor);

let level = 1;
let doorClicked = false;

function checkDoor(doorNumber) {
    console.log("Door clicked:", doorNumber);
    console.log("Ghost is behind door:", ghostBehindDoor);

    if (doorClicked) return;
    doorClicked = true;

    let door = document.getElementById('door' + doorNumber);
    let backOfDoor = door.querySelector('.back');

    door.querySelector('.front').style.transform = 'rotateY(180deg)';
    backOfDoor.style.transform = 'rotateY(0deg)';

    if (doorNumber === ghostBehindDoor) {
        backOfDoor.addEventListener('transitionend', function showGhost(event) {
            // Check if the transitioned element is the .back element
            if (event.target === backOfDoor) {
                backOfDoor.style.backgroundImage = "url('../static/images/ghost2.png')";
                backOfDoor.classList.add('ghost');
                door.style.zIndex = "2";
                backOfDoor.removeEventListener('transitionend', showGhost);  // Remove the event listener
            }
        });

        document.body.classList.add('ghostBackground');

        setTimeout(() => {
            document.getElementById('feedback').innerText = "Boo! A ghost! Try again!";
            resetGame();
            level = 1;
        }, 4500);
    } else {
        setTimeout(() => {
            document.getElementById('feedback').innerText = "Safe! Proceeding to level " + (++level) + "...";
            resetGame();
        }, 3800);
    }
}

function resetGame() {
    let doors = document.querySelectorAll('.door');
    doors.forEach(door => {
        door.querySelector('.front').style.transform = 'rotateY(0deg)';
        door.querySelector('.back').style.transform = 'rotateY(180deg)';
        door.querySelector('.back').style.backgroundImage = "url('../static/images/open_door.png')";
        door.querySelector('.back').classList.remove('ghost');
        door.style.zIndex = "1"

    });
    ghostBehindDoor = Math.floor(Math.random() * 3) + 1;
    doorClicked = false;

        setTimeout(() => {
        document.getElementById('feedback').innerText = "Choose a door!";
    }, 3200);  // Display the message after the doors have reset

    document.body.classList.remove('ghostBackground');
}

document.getElementById('door1').addEventListener('click', () => checkDoor(1));
document.getElementById('door2').addEventListener('click', () => checkDoor(2));
document.getElementById('door3').addEventListener('click', () => checkDoor(3));