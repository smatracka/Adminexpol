
// Prefer a function injected from outside an iframe,
// which will make dialogs that can go outside the iframe.

// Note `defaultMessageBoxTitle` handling in make_iframe_window
// Any other default parameters need to be handled there (as it works now)

window.showMessageBox = window.showMessageBox || (({
	title = window.defaultMessageBoxTitle ?? "Alert",
	message,
	buttons = [{label: "OK", value: "ok", default: true}],
	iconID = "warning" // "error", "warning", or "info"
}) => {
	let $window;
	const promise = new Promise((resolve, reject) => {
		$window = new $Window({
			title,
			resizable: false,
			innerWidth: 400,
			maximizeButton: false,
			minimizeButton: false,
		});
		
		$("<div>").append(
			$("<img width='32' height='32'>").attr("src", `../../images/icons/${iconID}-32x32-8bpp.png`).css({
				margin: "16px",
				display: "block",
			}),
			$("<p>").text(message).css({
				whiteSpace: "pre-wrap",
				textAlign: "left",
				fontFamily: "MS Sans Serif, Arial, sans-serif",
				fontSize: "14px",
				marginTop: "22px",
				flex: 1,
			})
		).css({
			display: "flex",
			flexDirection: "row",
		}).appendTo($window.$content);

		$window.$content.css({
			textAlign: "center",
		});
		for (const button of buttons) {
			const $button = $window.$Button(button.label, () => {
				button.action?.(); // API may be required for using user gesture requiring APIs
				resolve(button.value);
				$window.close(); // actually happens automatically
			});
			if (button.default) {
				$button.addClass("default");
				$button.focus();
			}
			$button.css({
				minWidth: 75,
				height: 23,
				margin: "16px 2px",
			});
		}
		$window.on("focusin", "button", (event) => {
			$(event.currentTarget).addClass("default");
		});
		$window.on("focusout", "button", (event) => {
			$(event.currentTarget).removeClass("default");
		});
		$window.center();
	});
	promise.$window = $window;
	promise.promise = promise; // for easy destructuring
	return promise;
});

window.alert = (message) => {
	showMessageBox({ message });
};