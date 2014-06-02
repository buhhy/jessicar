var worksListEl = document.getElementById('works');				// Works List
var homeBtn = document.getElementById("homeBtn")

homeBtn.onclick = function(event) {
	event.preventDefault();
	for (i=0;i<works.length;i++){
		works[i].hide();
	}
}

/**
 * This class represents a project entry.
 * @param {String} name - Name of the project
 */
var Work = function (name) {
	var self = this;

	this.name = name;
	this.entryEl = document.getElementById(name + "Entry");
	this.contentEl = document.getElementById(name + "Content");
	this.scrollContainerEl = this.contentEl.querySelector("[data-id='scrollContainer']");
	this.backBtnEl = this.contentEl.querySelector("[data-id='backBtn']");
	this.topBtnEl = this.contentEl.querySelector("[data-id='topBtn']");
	this.nextBtnEl = this.contentEl.querySelector("[data-id='nextBtn']");

	this.topBtnEl.onclick = function (event) {
		event.preventDefault();
		self.scrollContainerEl.scrollTop = 0;
	};

	this.backBtnEl.onclick = function (event) {
		event.preventDefault();
		self.hide();
	};

	this.entryEl.onclick = function (event) {
		event.preventDefault();
		self.show();
	};
};

/**
 * Shows the entry content, hides works list.
 */
Work.prototype.show = function () {
	this.contentEl.classList.add('visible');
	worksListEl.classList.remove('visible');
};

/**
 * Hides the entry content, shows the works list.
 */
Work.prototype.hide = function () {
	this.contentEl.classList.remove('visible');
	worksListEl.classList.add('visible');
};

Work.prototype.setNext = function(nextWork) {
	var self = this;
		this.nextBtnEl.onclick = function (event) {
		event.preventDefault();
		self.hide();
		nextWork.show();
	};
}

Work.prototype.setPrev = function(prevWork) {
	var self = this;
		this.backBtnEl.onclick = function (event) {
		event.preventDefault();
		self.hide();
		prevWork.show();
	};
}

var works = [
	new Work("pagination"),
	new Work("quickmatch"),
	new Work("pinecone"),
	new Work("psychology"),
	new Work("gDesign")
];

for (var i=0; i<works.length; i++){
	works[i].setNext(works[(i+1)%works.length]);
}