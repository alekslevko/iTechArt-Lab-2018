(function task1_1() {
  "use strict";

  Array.prototype.map = function (projectionFunction) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(projectionFunction.call(this, this[i], i));
    }

    return arr;
  };

  console.log(JSON.stringify([1, 2, 3].map(
    (x) => { 
      return x + 1; 
    })) === "[2,3,4]");
  console.log(JSON.stringify([1, 2, 3].map(
    (x) => {
      return x + 10; 
    })) === "[11,12,13]");
})();

(function task1_2() {
  "use strict";

  let newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  }, {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }, {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  }, {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }];

  newReleases = newReleases.map((rel) => {
    let obj = {
      "id": rel.id,
      "title": rel.title
    };

    return obj;
  });

  console.log(JSON.stringify(newReleases));
})();

(function task1_3() {
  "use strict";

  Array.prototype.filter = function (predicateFunction) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (predicateFunction.call(this, this[i], i)) {
        arr.push(this[i]);
      }
    }

    return arr;
  };

  console.log(JSON.stringify([1, 2, 3].filter(
    (fil) => {
        return fil > 2; 
      })) === "[3]");
  console.log(JSON.stringify([1, 2, 3].filter(
    (fil) => {
        return fil > 1; 
      })) === "[2,3]");
})();

(function task1_4() {
  "use strict";

  let newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  }, {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }, {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  }, {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }];

  newReleases = newReleases.filter((rel) => {
    return rel.rating.includes(5.0);
  })
    .map((rel) => {
      return rel.id;
  });
  
  console.log(JSON.stringify(newReleases));
})();

(function task1_5() {
  "use strict";

  let movieLists = [{
    name: "Instant Queue",
    videos: [{
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [{
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
      }, {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    }, {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [{
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
      }, {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }]
  }, {
    name: "New Releases",
    videos: [{
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [{
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
      }, {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    }, {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [{
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
      }, {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
      }, {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }]
  }];

  movieLists = movieLists.map((x) => {
    return x.videos;
  });

  let movie = movieLists[0].concat(movieLists[1]);

  movie = movie.map((mov) => {
    let boxart = mov.boxarts.filter((size) => {
      return size.width == 150 && size.height == 200;
    });

    let obj = {
      "id": mov.id,
      "title": mov.title,
      "boxart": boxart[0].url
    }

    return obj;
  });

  console.log(JSON.stringify(movie));
})();

(function task1_6() {
  "use strict";

  Array.prototype.reduce = function (combiner, initialValue) {
    let res = initialValue;
    if (res === undefined) { res = null; }
    for (let i = 0; i < this.length; i++) {
      res = combiner.call(null, res, this[i], i, this);
    }

    return res;
  };

  console.log([1, 2, 3].reduce((memo, item) => {
    return memo + item;
  }) === 6);
  console.log([1, 2, 3].reduce((memo, item) => {
    return memo + item;
  }, 10) === 16);
})();

(function task1_7() {
  "use strict";

  let ratings = [2, 3, 1, 4, 5];

  let max = ratings.reduce((p, c) => {
    return p > c ? p : c
  });

  console.log(max);
})();

(function task1_8() {
  "use strict";

  let boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  }, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  }, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  }, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }];

  let url_max_sq = boxarts.reduce((p, c) => {
    let curr_sq = c.width * c.height;
    let prev_sq;
    if (prev_sq !== undefined){
       prev_sq = p.width * p.height;
    }    

    return prev_sq > curr_sq ? p : c;
  }).url;

  console.log(url_max_sq);
})();

(function task1_9() {
  "use strict";

  let videos = [{
    "id": 65432445,
    "title": "The Chamber"
  }, {
    "id": 675465,
    "title": "Fracture"
  }, {
    "id": 70111470,
    "title": "Die Hard"
  }, {
    "id": 654356453,
    "title": "Bad Boys"
  }];

  videos = videos.reduce((p, c) => {
    p[c.id] = c.title;

    return p;
  }, {});
  console.log(JSON.stringify(videos));
})();
