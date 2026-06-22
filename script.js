const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const dateSection = document.getElementById("dateSection");
const music = document.getElementById("bgMusic");

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {

    music.play();

    dateSection.classList.remove("hidden");

    launchConfetti();

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

function launchConfetti(){

    confetti({
        particleCount:150,
        spread:100,
        origin:{x:0,y:0}
    });

    confetti({
        particleCount:150,
        spread:100,
        origin:{x:1,y:0}
    });

    setTimeout(()=>{
        confetti({
            particleCount:200,
            spread:180,
            origin:{x:0.5,y:0.3}
        });
    },300);
}

document
.getElementById("submitDate")
.addEventListener("click", sendDate);

function sendDate(){

    const selectedDate =
    document.getElementById("datePicker").value;

    if(!selectedDate){
        alert("Please choose a date ❤️");
        return;
    }

    emailjs.send(
        "service_q4ts9vq",
        "template_arufodl",
        {
            selected_date:selectedDate
        }
    )
    .then(() => {

        document.getElementById("successMessage")
        .innerHTML =
        "❤️ Date locked! Can't wait to see you ❤️";

    })
    .catch(() => {

        alert("Failed to send date.");
    });
}