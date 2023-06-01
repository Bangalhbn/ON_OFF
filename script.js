const switchBtn = document.querySelector("#switch");
const switchLabel = document.querySelector("#switch__label");
const background = document.querySelector(".background");
const title = document.querySelector(".title");
const grid = document.querySelector(".grid");

createGrid(grid);

switchBtn.addEventListener("change", () => {
	const wrapper = switchLabel.querySelector(".switch");
	const content = switchLabel.querySelector(".switch__content");
	const sun = switchLabel.querySelector(".switch__sun");

	toggleElement(title);
	toggleElement(background);
	toggleElement(wrapper);
	toggleElement(content);
	toggleElement(sun);
	toggleElement(grid);
});

function toggleElement(el) {
	const classActive = `${el.classList[0]}--active`;

	el.classList.contains(classActive)
		? el.classList.remove(classActive)
		: el.classList.add(classActive);
}

function createGrid(grid, nbItem = 100) {
	for (let index = 0; index < nbItem; index++) {
		grid.appendChild(createGridItem());
	}
}

function createGridItem() {
	const div = document.createElement("div");
	div.classList.add("grid__item");
	return div;
}