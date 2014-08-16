function setOpacity(element, opacity) {
	element.style.opacity = opacity;
	element.style.filter = "alpha(opacity=" + opacity + ")";
}

function fade(element, duration, start, target, callback) {
	var opacity = start;
	var interval = 5;
	var delta = (start - target) / (duration / interval);
	var progress = 0;
	var id = setInterval(function () {
		progress += interval;
		opacity -= delta;
		if (progress > duration) {
			setOpacity(element, target);
			clearInterval(id);
			if (callback)
				callback();
		} else {
			setOpacity(element, opacity);
		}
	}, interval);
}

function fadeIn(element, duration, callback) { fade (element, duration, 0.0, 1.0, callback); }
function fadeOut(element, duration, callback) { fade (element, duration, 1.0, 0.0, callback); }

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
	this.homeBtnEl = this.contentEl.querySelector("[data-id='homeBtn']");

	this.topBtnEl.onclick = function (event) {
		event.preventDefault();
		self.scrollContainerEl.scrollTop = 0;
	};

	this.homeBtnEl.onclick = function (event) {
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
	var self = this;
	var screen = document.querySelector("html");
	screen.style.overflow = "hidden";
	window.scrollTo(0,2000);
	fadeOut(worksListEl, 50, function () {
		worksListEl.classList.remove('visible');
		self.contentEl.classList.add('visible');
		fadeIn(self.contentEl, 150, function () {
		});
	});
};

/**
 * Hides the entry content, shows the works list.
 */
Work.prototype.hide = function () {
	var self = this;
	var screen = document.querySelector("html");
	screen.style.overflow = "auto";
	fadeOut(self.contentEl, 50, function () {
		self.contentEl.classList.remove('visible');
		worksListEl.classList.add('visible');
		fadeIn(worksListEl, 150, function () {
		});
	});

/*	this.contentEl.classList.remove('visible');
	worksListEl.classList.add('visible');*/
};

Work.prototype.setNext = function (nextWork) {
	var self = this;
	this.nextBtnEl.onclick = function (event) {
		event.preventDefault();
		self.hide();
		nextWork.show();
	};
}

Work.prototype.setPrev = function (prevWork) {
	var self = this;
	this.backBtnEl.onclick = function (event) {
		event.preventDefault();
		self.hide();
		prevWork.show();
	};
}

var works = [
	new Work("pagination"),
	new Work("appdl"),
	new Work("gDesign"),
	new Work("quickmatch"),
	new Work("pinecone"),
	new Work("psychology")
];

for (var i=0; i<works.length; i++){
	works[i].setNext(works[(i + 1) % works.length]);
}

for (var i=0; i<works.length; i++){
	works[i].setPrev(works[(i - 1 + works.length) % works.length]);
}