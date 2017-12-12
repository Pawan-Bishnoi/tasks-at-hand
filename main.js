const {app, BrowserWindow} = require('electron');
const path = require ('path');
const url = require ('url');

// Keeping a global reference to window object
// so that window doesn't close when JS GC collects it
let win

function createWindow () {
	// create the browser window
	win = new BrowserWindow ({width: 800, height: 600});

	win.loadURL(url.format({
		pathname: path.join (__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));

	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	})

}

app.on ('ready', createWindow)

app.on ('window-all-closed', ()=> {
	if (process.platform != 'darwin')
		app.quit();
})

app.on ('activate', ()=> {
	if (win === null)
		createWindow()
})
