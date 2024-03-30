const {
    app,
    BrowserWindow
} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        // 최소 사이즈
        width: 1310,
        height: 710,
        // 로고/아이콘 
        icon: path.join(__dirname, '../images/logo.ico'),
        // 실행 시 화면 가운데 위치
        center: true,
        // 기본 타이틀 바 여부
        frame: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');
    // 기본 메뉴 숨기기
    win.setMenu(null);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});