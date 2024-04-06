// Target date for the countdown (year, month (0-based), day, hour, minute, second)
const targetDate = new Date("2024-04-09T00:00:00");

function countdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    // Check if the target date has passed
    if (difference < 0) {
        clearInterval(intervalId); // Stop the countdown if the target date has passed
        document.getElementById('days').innerText = "0";
        document.getElementById('hours').innerText = "0";
        document.getElementById('minutes').innerText = "0";
        document.getElementById('seconds').innerText = "0";
        return;
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Run countdown immediately
countdown();

// Update countdown every second
const intervalId = setInterval(countdown, 1000);
