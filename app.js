const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        show: false,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.maximize();
      mainWindow.show();

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/electron-app/index.html`),
          protocol: "file:",
          slashes: true
        })
      );

      // mainWindow.loadFile(path.join(__dirname, '/dist/electron-app/index.html'));

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

    // try {
    //   require('electron-reloader')(module)
    // } catch (_) {}
