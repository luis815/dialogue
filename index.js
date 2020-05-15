$(document).ready(() => {
	const app = $("#app");
	const main = $("main");
	const form = $("form");
	const input = $("input");

	const scrollToEnd = function () {
		main[0].scrollTo(0, main[0].scrollHeight);
	};

	const send = function(event) {
		event.preventDefault();
		const value = input.val();

		if(value.length !== 0) {
			main.append(`<p class='self'>${input.val()}</p>`);
			input.val("");
			main.append("<p class='someone'>maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam</p>");
			scrollToEnd();
		}
	}

	app[0].style.height = `${window.innerHeight}px`;
	scrollToEnd();
	form.submit(send);
});
