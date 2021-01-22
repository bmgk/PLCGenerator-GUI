import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import kill from 'tree-kill';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

import { runServer } from '../src/services/electron/';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    title: 'VASS6 PLC Creator',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
    return runServer();
  })
  .then((server) => {
    app.on('quit', () => {
      kill(server.pid);
    });
    app.on('window-all-closed', () => {
      kill(server.pid);
    });
  });

app.allowRendererProcessReuse = true;
