const eventDate = new Date("July 31, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("countdown").innerHTML =
    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes " +
    seconds + " Seconds";


    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "Tech Extravaganza 2.0 is Live!";

    }


}, 1000);
