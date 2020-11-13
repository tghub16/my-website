//when page button clicked, goes to page
function goToPage(x, y) {
	const pages = document.getElementsByClassName('page');
	for (let i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}

	document.getElementById(x).style.display = "flex";

	document.getElementById('title').innerHTML = y;
};



function openFile(x) {
	window.open(x, '_blank');
}