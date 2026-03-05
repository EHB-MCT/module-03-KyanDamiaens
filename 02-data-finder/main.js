let sizes = [];
let cols = 10;
let rows = 10;
let numCircles = cols * rows;

// Stores index for find function
let foundIndex = -1;

function setup() {
	let container = document.getElementById("canvas-container");
	let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
	canvas.parent("canvas-container");
	textAlign(CENTER, CENTER);
	textSize(10);

	resetData();

	// DOM Listeners
	document.getElementById("btn-find").addEventListener("click", findValue);
	document.getElementById("btn-sort-up").addEventListener("click", sortUp);
	document.getElementById("btn-sort-down").addEventListener("click", sortDown);
	document.getElementById("btn-reset").addEventListener("click", resetData);
}

function draw() {
	background(255); // White background
	noStroke();

	let cellW = width / cols;
	let cellH = height / rows;

	// Loop through the sizes

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let index = i * rows + j;
			let size = sizes[index];
			if (foundIndex == index) {
				fill(255, 0, 0);
			} else {
				fill(0, 119, 255);
			}
			let x = i * cellW + cellW / 2;
			let y = j * cellH + cellH / 2;
			circle(x, y, size);

			if (size > 25) {
				fill(255);
				text(size, x, y);
			}
		}
	}

	// Drawing
	// Check for found index: red or blue
}

function resetData() {
	//generate sizes
	sizes = [];
	for (let i = 0; i < numCircles; i++) {
		sizes.push(Math.floor(random(0, 101)));
	}
	//reset foundIndex
	foundIndex = -1;
	//calculate stats
	calculateStats();
}

function findValue() {
	let value = parseInt(document.getElementById("find-input").value);
	foundIndex = -1;
	for (let i = 0; i < sizes.length; i++) {
		if (sizes[i] == value) {
			foundIndex = i;
			break;
		}
	}
	if (foundIndex == -1) {
		alert("Value not found!");
	}
}

function sortUp() {
	sizes.sort(function (a, b) {
		if (a > b) {
			return 1;
		} else {
			return -1;
		}
	});
	console.log(sizes);
	console.log("sorted arrays");
}

function sortDown() {
	sizes.sort(function (a, b) {
		if (a < b) {
			return 1;
		} else {
			return -1;
		}
	});
	console.log(sizes);
	console.log("sorted arrays");
}

function calculateStats() {
	//use reduce to calculate total
	let total = sizes.reduce(function (sum, size) {
		return sum + size;
	});

	console.log("total: " + total);

	// calculate average
	let avg = total / sizes.length;
	console.log("average: " + avg);

	//add both to DOM
}
