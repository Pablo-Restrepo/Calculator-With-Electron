const { app, BrowserWindow } = require('electron');
const path = require('path');
const electronReload = require('electron-reload');

function createWindow() {
    const mainWindow = new BrowserWindow({
        minHeight: 540,
        minWidth: 330,
        width: 330,
        height: 580,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.setMenu(null)
    mainWindow.loadFile('index.html');
}

electronReload(__dirname);

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
