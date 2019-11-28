treeTravel('container', 0);

function treeTravel(treeClass, margin) {

	let parent = $('.' + treeClass)[0];

	for(let i = 0; i < parent.children.length ; i++)
	{
		$('.tree')[0].innerHTML += <div style = "margin-left: ${margin}px"> + ' ' + parent.children[i].className + '</div>';
		treeTravel(parent.children[i].className, margin + 10);
	}
}