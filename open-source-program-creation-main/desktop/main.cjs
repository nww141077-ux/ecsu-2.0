const { app, BrowserWindow, shell } = require("electron");

const DEFAULT_APP_URL = "https://ecsu-system-2026.web.app/egsu/start";
const APP_URL = process.env.ECSU_DESKTOP_URL || DEFAULT_APP_URL;
const TRUSTED_HOSTS = new Set([
  "ecsu-system-2026.web.app",
  "escu-nww.com",
  "www.escu-nww.com",
]);

function isTrustedAppUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && TRUSTED_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

function openExternalHttpUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") {
      void shell.openExternal(url.toString());
    }
  } catch {
    // Ignore malformed URLs and non-web protocols.
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 620,
    show: false,
    autoHideMenuBar: true,
    title: "ECSU 2.0",
    backgroundColor: "#060b14",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: false,
    },
  });

  win.once("ready-to-show", () => win.show());

  win.webContents.setWindowOpenHandler(({ url }) => {
    openExternalHttpUrl(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    if (isTrustedAppUrl(url)) return;
    event.preventDefault();
    openExternalHttpUrl(url);
  });

  if (!isTrustedAppUrl(APP_URL)) {
    win.loadURL(DEFAULT_APP_URL);
    return;
  }
  win.loadURL(APP_URL);
}

app.whenReady().then(() => {
  app.setAppUserModelId("com.ecsu.desktop");
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
