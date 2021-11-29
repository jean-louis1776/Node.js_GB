// date fomat: "november 29 2021 16:33:45"
var startDates = process.argv.slice(2).map((e) => {
    return new Date(e).getTime();
});

const EventEmitter = require("events");
const emitter = new EventEmitter();

function countdown(startDate, i) {
    let now = new Date().getTime();
    let end = startDate - now;
    let days = Math.floor(end / (1000 * 60 * 60 * 24));
    let hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((end % (1000 * 60)) / 1000);

    if (end < 0) {
        //   clearInterval(tik);
        console.log("Timer " + (i + 1) + ": Время вышло");
    } else {
        console.log(
            "Timer " +
            (i + 1) +
            ": " +
            days +
            "д " +
            hours +
            "ч " +
            minutes +
            "м " +
            seconds +
            "с "
        );
    }
}

emitter.on("test", (startDates) =>
    startDates.forEach((element, i) => countdown(element, i))
);

var a = setInterval(() => {
    const dateObj = new Date();
    var timers = startDates.length;
    var end = startDates.length;
    emitter.emit("test", startDates);
    startDates.forEach((element) => {
        if (element >= dateObj.getTime()) {
            timers = timers - 1;
        }
    });
    if (timers == end) {
        clearInterval(a);
    }
}, 1000);