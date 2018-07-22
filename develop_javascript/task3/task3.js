(function task3_1() {
    "use strict";

    document.getElementById("task1").addEventListener("click", task1);
    let timeoutId;

    function task1() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log("Hello world");
        }, 5000);
    }
})();

(function task3_2() {
    "use strict";

    document.getElementById("task2").addEventListener("click", task2);
    let flag = false;
    let timeoutId;

    function task2() {
        flag = ((flag) ? false : true);
        if (flag) {
            timeoutId = setInterval(() => {
                console.log("You are welcome");
            }, 3000);
        }
        else {
            clearInterval(timeoutId);
        }
    }
})();

(function task3_3() {
    document.getElementById("task3").addEventListener("click", task3);
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let flag = false;
    let timeoutId;

    function Timer() {
        clearTimeout(timeoutId);
        let sec = getRandomInt(1, 4);
        console.log(sec + " seconds");
        timeoutId = setTimeout(() => {
            Timer();
        }, sec * 1000);
    }

    function task3() {
        flag = ((flag) ? false : true);
        if (flag) {
            Timer();
        }
        else {
            clearTimeout(timeoutId);
        }
    }
})();

(function task3_4() {
    "use strict";

    document.getElementById("task4").addEventListener("keypress", task4);
    let timeoutId;

    function task4() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log(document.getElementById("task4").value);
        }, 1000);
    }
})();