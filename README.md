
# ![](images/icons/windows-update-32x32.png) [Adminexpol '98](https://adminexpol.pl)

A web based Windows 98 desktop remake.

Includes:
* ![](images/icons/notepad-16x16.png) Notepad ([separate README](programs/notepad/README.md))
* ![](images/icons/speaker-16x16.png) Sound Recorder ([separate README](programs/sound-recorder/README.md))
* ![](images/icons/paint-16x16.png) Paint ([separate repository](https://github.com/1j01/jspaint))
* ![](images/icons/calculator-16x16.png) Calculator ([separate README](programs/calculator/README.md))
* ![](images/icons/pipes-16x16.png) 3D Pipes ([separate repository](https://github.com/1j01/pipes))
* ![](images/icons/pipes-16x16.png) 3D FlowerBox ([original repository](https://github.com/kevin-shannon/3D-FlowerBox)) by [Kevin Shannon](https://github.com/kevin-shannon)
* ![](images/icons/minesweeper-16x16.png) Minesweeper ([separate README](programs/minesweeper/README.md); [original repository](https://github.com/ziebelje/minesweeper)) by [Jon Ziebell](https://github.com/ziebelje/)
* ![](images/icons/solitaire-16x16.png) Solitaire ([original repository](https://github.com/rjanjic/js-solitaire)) by [Radovan Janjic](https://github.com/rjanjic)
* ![](images/icons/pinball-16x16.png) Pinball ([original repository](https://github.com/alula/SpaceCadetPinball)) ported by [Muzychenko Andrey](https://github.com/k4zmu2a) and [Alula](https://github.com/alula)
* ![](images/icons/winamp2-16x16.png) Winamp 2.9 ([separate README](programs/winamp/README.md); [original repository](https://github.com/captbaritone/webamp)) by [Jordan Eldredge](https://jordaneldredge.com/)
* ![](images/icons/folder-open-16x16.png) Windows Explorer / ![](images/icons/internet-explorer-16x16.png) Internet Explorer ([separate README](programs/explorer/README.md))
* ![](images/icons/chm-16x16.png) Help Viewer
* 📎 Clippy ([original repository](https://github.com/smore-inc/clippy.js))

Features:
* Drop files onto the desktop, and they'll be stored in a virtual filesystem
* Load Windows themes! Many are included in the Themes folder on the desktop.
* Easter eggs (try a famous cheat code 😉)
* Meticulous detail in many areas (altho there's obviously lots "missing")
* **Help > Help Topics** in Paint, Sound Recorder, Notepad, and Minesweeper
* You can add the site to your homescreen on mobile

## Try it out

## Related Projects

Apps that it would be nice to integrate:
* [![](images/icons/settings-16x16.png) Windows Classic theme designer](https://github.com/tpenguinltg/winclassic)
* [![](images/icons/media-player-16x16.png) Win95 Media Player](https://benwiley4000.github.io/win95-media-player/)

Libraries:
* [![](images/icons/task-16x16.png) OS-GUI](https://os-gui.js.org), which grew out of this project
* ![](images/icons/task-16x16.png) [Packard Belle](https://github.com/padraigfl/packard-belle/),
  [React95](https://github.com/React95/React95/),
  and another one called [React95](https://github.com/arturbien/React95), with similar goals to OS-GUI
* [![](images/icons/folder-16x16.png) BrowserFS](https://github.com/jvilk/BrowserFS), a filesystem abstraction library powering 98.js

Also:
* [Awesome Atwood's Law](https://github.com/captbaritone/awesome-attwoods-law), a curated list of JavaScript reimplementations, similar to [/r/atwoodslaw/](https://www.reddit.com/r/atwoodslaw/)


## Development Setup

- Install [Git](https://git-scm.com/) if you don't already have it.
- Install [Node.js](https://nodejs.org/) if you don't already have it.
- [Clone the repository.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- Open up a terminal / command prompt in the project directory, and run `npm install` to install dependencies.
- Run `npm start` to start up a live-reloading development web server.

When pulling changes from git, run `npm install` again in case there are any new or updated dependencies.
(If you know `package-lock.json` hasn't changed, you shouldn't need to do this.)

Some dependencies are versioned with npm, but pulled into the repo with `npm run pull-libs`

To update subrepos, or push changes to them, install [git-subrepo](https://github.com/ingydotnet/git-subrepo). You don't need this tool to clone the project and get up and running, as subrepos are just normal subdirectories with a `.gitrepo` metadata file.
Note that the metadata file references specific commit hashes, including between repositories, so it's best to avoid rebasing when subrepo updates are involved, i.e. once you do a subrepo command, it makes a commit, and should leave it (and earlier commits) alone, and you should leave commits in the subrepo alone, before and up to any commits referenced by the containing project.
I'd recommend phrasing commit messages to apply to the subrepo, primarily, rather than the containing project.
If you so much as edit the commit message for a `git subrepo push`ed commit, you'd have to update the `.gitrepo` metadata file manually,
OR you could drop the commit you pushed and the `git subrepo push` commit (which updates the metadata) and do `git subrepo pull` instead (which btw gives you an option to rename the commit; and I think renaming that commit would be safe after the fact anyways as long as it's the last commit and not pushed).
