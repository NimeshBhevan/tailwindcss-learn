window.onload = () => {
	const mobileMenuIcon = document.getElementById("mobile-menu-button");
	mobileMenuIcon.addEventListener("click", () => {
		if (mobileMenuIcon.classList.contains("open")) {
			mobileMenuIcon.classList.remove("open");
		} else {
			mobileMenuIcon.classList.add("open");
		}
	});

	const ticketMenuItem = document.getElementById("ticket-menu-item");
	ticketMenuItem.addEventListener("click", () => {
		if (ticketMenuItem.classList.contains("open")) {
			ticketMenuItem.classList.remove("open");
		} else {
			ticketMenuItem.classList.add("open");
		}
	});

	const darkMode = document.getElementById("dark-mode-toggle");
	darkMode.addEventListener("click", () => {
		if (document.body.classList.contains("dark")) {
			document.body.classList.remove("dark");
		} else {
			document.body.classList.add("dark");
		}
	});

	const previousButton = document.getElementById("previous");
	const nextButton = document.getElementById("next");
	const carousel = document.getElementById("carousel");
	nextButton.addEventListener("click", () => {
		const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
		carousel.scrollLeft = carousel.scrollLeft + itemWidth;
	});
	previousButton.addEventListener("click", () => {
		const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
		carousel.scrollLeft = carousel.scrollLeft - itemWidth;
	});
};
