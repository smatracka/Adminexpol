// TODO: include jquery and stuff; maybe even update script tags in html, with CDN URLs, integrity checksums, and fallbacks

const { copySync, readFileSync, writeFileSync } = require("fs-extra");
const { basename, join } = require("path");

const copy = (from, toDir) => {
	const to = join(toDir, basename(from));
	console.log(`Copying ${from} => ${to}`);
	copySync(from, to);
};

copy("node_modules/os-gui/build/windows-98.css", "libraries/os-gui/");
copy("node_modules/os-gui/build/windows-98.css.map", "libraries/os-gui/");
copy("node_modules/os-gui/build/layout.css", "libraries/os-gui/");
copy("node_modules/os-gui/build/layout.css.map", "libraries/os-gui/");
copy("node_modules/os-gui/build/windows-default.css", "libraries/os-gui/");
copy("node_modules/os-gui/build/windows-default.css.map", "libraries/os-gui/");
copy("node_modules/os-gui/build/peggys-pastels.css", "libraries/os-gui/");
copy("node_modules/os-gui/build/peggys-pastels.css.map", "libraries/os-gui/");
copy("node_modules/os-gui/parse-theme.js", "libraries/os-gui/");
copy("node_modules/os-gui/$MenuBar.js", "libraries/os-gui/");
copy("node_modules/os-gui/MenuBar.js", "libraries/os-gui/");
copy("node_modules/os-gui/$Window.js", "libraries/os-gui/");
copy("node_modules/browserfs/dist/browserfs.js", "libraries/");
copy("node_modules/browserfs/dist/browserfs.js.map", "libraries/");
copy("node_modules/browserfs/dist/browserfs.min.js", "libraries/");
copy("node_modules/browserfs/dist/browserfs.min.js.map", "libraries/");
// copy("node_modules/webamp/built/webamp.bundle.js", "programs/winamp/libraries/");
// copy("node_modules/webamp/built/webamp.bundle.min.js", "programs/winamp/libraries/");
// copy("node_modules/webamp/built/webamp.bundle.min.js.map", "programs/winamp/libraries/");
copy("node_modules/butterchurn/libraries/butterchurn.min.js", "programs/winamp/libraries/");
copy("node_modules/butterchurn-presets/libraries/butterchurnPresets.min.js", "programs/winamp/libraries/");

const copy_and_monkey_patch_webamp = (file_name) => {
	const from = `node_modules/webamp/built/${file_name}`;
	const to = `programs/winamp/lib/${file_name}`;
	console.log(`Monkey patching and copying ${from} => ${to}`);
	let js = readFileSync(from, "utf8");
	js = js.replace(/((\w|\.)+)\.render\(\)/g, "(monkey_patch_render($1))");
	js = js.replace("//# sourceMappingURL=webamp.bundle.min.js.map", ""); // lastIndexOf + slice would be way more efficient but WHERE WE'RE GOING, WE DON'T NEED SPEED
	writeFileSync(to, js, "utf8");
};
copy_and_monkey_patch_webamp("webamp.bundle.js");
copy_and_monkey_patch_webamp("webamp.bundle.min.js");

console.log(`Done.

Note: This script doesn't handle updating npm dependencies, it just copies scripts into the repo.`);
