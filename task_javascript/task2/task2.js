(function task2() {
	let Robot = function (name) {
		this.name = name;
	}

	function add(op1, op2) {
		this.name = this.name || "Human";
		return this.name + " can count to " + (op1 + op2);
	}

	let voltron = new Robot("Voltron");

	(function task2_1__4() {
		console.log(add(0, 1));
		console.log(add.call(voltron, 1, 2));
		console.log(add.apply(voltron, [20, 30]));
		console.log(add.bind(voltron)("drinking", "beer"));
	})();

	showName = function () {
		let that = this;
		let name = this.name;
		function show(obj) {
			return obj.name;
		}

		setTimeout(function () {
			console.log(show(voltron));
			console.log(show.apply(this, [voltron]));
			console.log(show.call(this, voltron));
			console.log(show.bind(this)(voltron));
			console.log(name);
			console.log(that.name);
		}, 1000);
	}.bind(voltron)
	showName();
})();