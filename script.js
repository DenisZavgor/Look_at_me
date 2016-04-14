(function () {
	var parent = document.querySelector('#parent'),
		appendElement = document.createElement('div'),
		child = parent.querySelectorAll('.child');


	appendElement.innerText = 'Test';
	parent.appendChild(appendElement);
	console.log(parent.querySelectorAll('div'));

})()
