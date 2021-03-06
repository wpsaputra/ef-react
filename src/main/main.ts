import { app, BrowserWindow, Menu, globalShortcut } from 'electron'
declare var MAIN_WINDOW_WEBPACK_ENTRY: any

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

// Disable file menu
Menu.setApplicationMenu(null);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: any

const createWindow = () => {
  // Create the browser window.
  var path = require('path');
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    // titleBarStyle: 'hiddenInset',
    // transparent: true,
    webPreferences: {
      // preload: path.join(app.getAppPath(), 'src', 'main', 'preload.js')
      preload: path.join(__dirname, 'preload.js')
    },
    backgroundColor: "#252526",
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  globalShortcut.register('f5', function() {
		console.log('f5 is pressed')
		mainWindow.reload()
	})
	globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed')
		mainWindow.reload()
  })
  globalShortcut.register('CommandOrControl+I', function() {
		console.log('CommandOrControl+I is pressed')
		mainWindow.webContents.openDevTools()
	})

  // mainWindow.setMenu(null);
  // mainWindow.setAutoHideMenuBar(true);
  // mainWindow.removeMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
