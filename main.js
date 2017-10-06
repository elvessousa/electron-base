// ----------------------------------------------------
// Module to control application life.
// ----------------------------------------------------
const electron = require('electron')
const app = electron.app

// ----------------------------------------------------
// Module to create native browser window.
// ----------------------------------------------------
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const Vue = require('vue')
Vue.use('vue')

// ----------------------------------------------------
// Main window global reference
// ----------------------------------------------------
let mainWindow

// ----------------------------------------------------
// Create the browser window.
// ----------------------------------------------------
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    titleBarStyle: 'hiddenInset',
    frame: false
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// ----------------------------------------------------
// Create windows when app is ready
// ----------------------------------------------------
app.on('ready', createWindow)

// ----------------------------------------------------
// Quit when all windows are closed.
// ----------------------------------------------------
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ----------------------------------------------------
// Reopen window on activate dock icon
// ----------------------------------------------------
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.