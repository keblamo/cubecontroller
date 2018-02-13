const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let main;

// When the app is ready
app.on('ready', function(){

    // Create new window
    main = new BrowserWindow({});

    // Load HTML file into window
    main.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file',
        slashes: true
    }));

    // Build menu
    const menu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert menu
    Menu.setApplicationMenu(menu);

});

// Menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Pattern',
                accelerator: process.platform == 'darwin' ? 'Command+N' : 'Ctrl+N'
            },
            {
                label: 'Open Pattern',
                accelerator: process.platform == 'darwin' ? 'Command+O' : 'Ctrl+O'
            },
            {
                label:  'Save Pattern',
                accelerator: process.platform == 'darwin' ? 'Command+S' : 'Ctrl+S'
            },
            {
                label: 'Exit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',

                click(){
                    app.quit();
                }
            }
        ]
    }
];