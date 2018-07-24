//Сommented functions are with errors!!!

//task5_1 

function loadVideosAsync() {
    return "Load video";
}
function loadMetaAsync() {
    return "Load meta";
}
function DoSomething(fromVideo, fromMeta) {
    return console.log(fromVideo + "  " + fromMeta);
}

/* 
loadVideosAsync().then((videos) => {
    loadMetaAsync().then((meta) => {
        DoSomething(videos, meta);
    });
});
*/

Promise.all([loadVideosAsync(), loadMetaAsync()])
    .then((results) => {
        DoSomething(results[0], results[1]);
    });

//task5_2

function doSomethingAsync() {
    return new Promise((resolve) => {
        resolve("1");
    });
}
function somethingComplicated(res) {
    return console.log("done" + " " + res);
}

/*
function anAsyncCall() {
    var promise = doSomethingAsync();
    promise.then(() => {
        somethingComplicated();
    });
    return promise;
}
*/

function anAsyncCall() {
    var promise = doSomethingAsync();
    return promise.then((res) => {
        somethingComplicated(res);
    });
}

anAsyncCall();

// task5_3

/* 
db.getAllDocs().then((result) => {
  result.rows.forEach((row) => {
    db.remove(row.doc);  
  });
})
    .then(() => {
        // All docs must be removed!
});
*/

db.getAllDocs().then((result) => {
    return Promise.all(result.rows.forEach((row) => {
        db.remove(row.doc);
    }));
})
    .then(() => {
        // All docs are removed!
});

// task5_4

function doAsync() {
    return new Promise((resolve, reject) => {
        reject("Error!!!");
    });
}

/*
doAsync()
    .then(() => {
        throw new Error('nope');
    }, (err) => {
        // I didn't catch your error! :(
    });
*/

doAsync()
    .then(() => {
        throw new Error('nope');
    })
    .catch((err) => {
        console.error(err);
    });