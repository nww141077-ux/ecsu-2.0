const { app, BrowserWindow, session, shell } = require("electron");
const path = require("node:path");

const BLOCKED_HOSTS = new Set(["functions.poehali.dev", "cdn.poehali.dev", "bucket.poehali.dev"]);

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 620,
    show: false,
    autoHideMenuBar: true,
    title: "ECSU 2.0 — локальный режим",
    backgroundColor: "#060b14",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: false,
    },
  });

  // Desktop package is a local/offline frontend. It must not silently call the old hosted backend.
  session.defaultSession.webRequest.onBeforeRequest({ urls: ["*://*.poehali.dev/*"] }, (details, callback) => {
    try {
      const hostname = new URL(details.url).hostname;
      callback({ cancel: BLOCKED_HOSTS.has(hostname) || hostname.endsWith(".poehali.dev") });
    } catch {
      callback({ cancel: true });
    }
  });

  win.once("ready-to-show", () => win.show());
  win.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" || parsed.protocol === "http:") void shell.openExternal(parsed.toString());
    } catch { /* ignore invalid urls */ }
    return { action: "deny" };
  });

  win.loadFile(path.join(__dirname, "..", "dist", "index.html"));
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
