// Toggle responsive navbar menu
const myFunction = () => {
	const x = document.getElementById('myTopnav');
	x.classList.toggle('responsive');
};

// Toggle instructions visibility
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('button').forEach((button) => {
		button.addEventListener('click', () => {
			const instructions = document.getElementById('instructions');
			if (instructions) {
				instructions.style.display =
					instructions.style.display === 'none' || !instructions.style.display
						? 'block'
						: 'none';
			}
		});
	});
});
