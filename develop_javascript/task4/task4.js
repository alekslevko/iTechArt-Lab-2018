(function task4_1() {
    "use strict";

    function delay(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });     
    }

    function logHi() {
        console.log('hi');
    }

    delay(2000).then(logHi);
})();

(function task4_2() {
    "use strict";

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(10); 
        }, 3000);
    })
        .then((result) => {
            console.log("Получено " + result);

            return result + 2;
    })
        .then((result) => {
            console.log("Получено " + result);

            return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result + 2); 
            }, 2000);
        })
    })
        .then((result) => {
            console.log("В итоге " + result);
    });
})();

(function task4_3() {
    "use strict";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let promise = new Promise((resolve, reject) => {
        let time = getRandomInt(1, 4);

        setTimeout(() => {
            time <= 2 ? resolve("Время выполнения меньше 2 секунд") : reject("Время выполнения больше 2 секунд");
        }, time * 1000);
    });

    promise
        .then((result) => {
             console.log(result); 
            })
        .catch((error) => {
             console.error(error); 
            });
})();

(function task4_4() {
    "use strict";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let count = getRandomInt(1, 10);
    let promises = [];
    let sec_arr = [];
    
    for (let i = 0; i < count; i++) {
        let sec = getRandomInt(1, 10);
        sec_arr.push(sec);
        
        promises.push(new Promise((resolve) => {
            setTimeout(() => { 
                resolve(console.log("Номер " + (i + 1) + " выполнялся " + sec + " секунд")); 
            }, sec * 1000);
        }))
    }

    Promise.all(promises)
        .then(() => {
            console.log("Время выполнения " + (Math.max.apply(null, sec_arr)) + " секунд");
        });
})();