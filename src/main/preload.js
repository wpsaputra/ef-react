const { remote } = require('electron');

// let currWindow = remote.BrowserWindow.getFocusedWindow();
let currWindow = remote.getCurrentWindow();

globalThis.minimizeCurrentWindow = function(){
  currWindow.minimize();
}

globalThis.maximizeCurrentWindow = function(){
    currWindow.maximize();
}

globalThis.unMaximizeCurrentWindow = function(){
    currWindow.unmaximize();
}

globalThis.closeCurrentWindow = function(){
  currWindow.close();
}