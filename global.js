console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

if (currentLink) { 
	currentLink.classList.add("current");
}

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
	{url: "cv/", title: "CV"},
    {url: "https://github.com/bhargavilanka/", title: "Github"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	let url = p.url;
	let title = p.title;
    let cv = p.cv;
    let contact = p.contact;
    let github = p.github;

	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}
