///////////////////////////////////////////////////////////
// Adding year dynamically
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Toggling nav-open class
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll to top
		if (href === "#") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}

		// scroll for other links
		if (href != "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		} else window.open(href);

		// mobile nav
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (!ent.isIntersecting) document.body.classList.add("sticky");
		if (ent.isIntersecting) document.body.classList.remove("sticky");
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);
