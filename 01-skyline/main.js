let container = document.querySelector("#canvas-container");

let buildings = [];
let numBuildings = 10;
let buildingWidth;
let groundLevel;
let startX;

function setup() {
	let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
	canvas.parent(container);

	// Calculate layout
	buildingWidth = (width * 0.8) / numBuildings;
	startX = width * 0.1;
	groundLevel = height * 0.8;

	// Initialize data
	resetData();

	// 2. Add Event Listeners

	// Select the buttons and add 'click' listeners to call the functions below
}

function draw() {
	background(255);

	// Draw ground line
	stroke(0);
	//draw line
	line(startX, groundLevel, width * 0.8, groundLevel);
	noStroke();

	// 3. Visualize the Loop
	// Use forEach to loop through the buildings array
	fill("red");
	buildings.forEach(function (building, index) {
		rect(startX + index * buildingWidth, groundLevel, buildingWidth, building);
	});
	// Calculate x and y positions
	// Draw a rect() for each building
	// Challenge: Set fill() based on height (taller = darker)
	// Bonus: Apply animationOffset to height
}

function resetData() {
	// empty buildings array
	buildings = [];
	// use a loop to create random heights
	for (let i = 0; i < numBuildings; i++) {
		let randomHeight = random(50, 300);
		buildings.push(randomHeight);
	}

	updateDOM();
}

function growCity() {
	// 4. Grow the City
	// Use .map() to create a new array where buildings are 10% taller
	console.log("Grow city");
	updateDOM();
}

function shrinkCity() {
	// 5. Shrink the City
	// Use .map() to create a new array where buildings are 10% smaller
	console.log("Shrink city");
	updateDOM();
}

function updateDOM() {
	let output = document.getElementById("data-output");
	output.innerText = buildings.join(", ");
}
