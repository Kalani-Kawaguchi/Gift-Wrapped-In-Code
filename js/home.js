function calculateTimeSinceMet() {
    const start = new Date("2025-07-04");
    const now = new Date();
    const timeMetDays = document.querySelector(".time-met-days");
    const timeMetHours = document.querySelector(".time-met-hours");
    const timeMetMinutes = document.querySelector(".time-met-minutes");
    const timeMetSeconds = document.querySelector(".time-met-seconds");

    const diffMs = now - start;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();
    

    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    timeMetDays.textContent = `${totalDays} day${totalDays !== 1 ? "s" : ""}`;
    timeMetHours.textContent = `${hours} hour${hours !== 1 ? "s" : ""}`;
    timeMetMinutes.textContent = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    timeMetSeconds.textContent = `${seconds} second${seconds !== 1 ? "s" : ""}`;
}

function calculateTimeSinceDate() {
    const start = new Date("2025-08-07");
    const now = new Date();
    const timeDateDays = document.querySelector(".time-date-days");
    const timeDateHours = document.querySelector(".time-date-hours");
    const timeDateMinutes = document.querySelector(".time-date-minutes");
    const timeDateSeconds = document.querySelector(".time-date-seconds");

    const diffMs = now - start;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();
    

    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    timeDateDays.textContent = `${totalDays} day${totalDays !== 1 ? "s" : ""}`;
    timeDateHours.textContent = `${hours} hour${hours !== 1 ? "s" : ""}`;
    timeDateMinutes.textContent = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    timeDateSeconds.textContent = `${seconds} second${seconds !== 1 ? "s" : ""}`;
}

calculateTimeSinceMet();
calculateTimeSinceDate();

setInterval(calculateTimeSinceMet, 1000);
setInterval(calculateTimeSinceDate, 1000);