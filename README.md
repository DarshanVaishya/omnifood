# Omnifood project
Omnifood is a website for fictional food delivery app which uses AI to provide meal ideas. The website is created using HTML and CSS. It has a beautiful and easy to use UI. The website works responsively on desktop, tablet and mobile.

Live preview: [Link](https://omnifood.darshanvaishya.xyz)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d964c6db-6ba5-476a-b581-67ef3bb2d2d6/deploy-status)](https://app.netlify.com/sites/naughty-poincare-2c7926/deploys)

## Technologies used
+ HTML
+ CSS

## Challenges faced
This was one of the first projects for me where I had the design and had to create the website from it. I found it easier to work with design rather than making decisions on the fly. I learnt to how to make a website responsive for the first time with this project. It was a interesting challenge, but I managed to make it work! Another challenge was that I hadn't learnt JavaScript yet, but I needed it for the mobile navigation bar. It turned out to be easier than expected!

Here is the code which I used

```js
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});
```

After this, I realized that navigation bar is only visible from the top of the page. So I used Intersection observer API to make navigation bar "sticky" when the hero section is out of viewport.

```js
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting) {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);
```

## Learning outcomes

In terms of CSS, this project really taught me a lot! I realized the power of flexbox, grid and media queries to create beautiful and responsive website design. For the first time I worked on mobile and tablet design, and this was a great deal of fun to learn.

In terms of HTML, I learnt why one should use semantic tags instead of ```div``` everywhere. Got a basic understanding of SEO and google's lighthouse tool.

I also learnt how to deploy websites to [netlify](https://www.netlify.com/), and use DNS to link my custom domain to the deployed website.