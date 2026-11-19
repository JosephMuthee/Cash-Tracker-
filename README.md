# THEE Onset Enterprise
Personal + business finance app: dashboard, money in/out, budgets, saving goals, debts, assets, projects, daily usage, PIN + fingerprint lock, Google Sheet backend.

## 1. Google Sheet backend (2 min)
1. Create a new Google Sheet > Extensions > Apps Script. Paste `Code.gs`, Save.
2. Deploy > New deployment > Web app. Execute as: **Me**. Who has access: **Anyone**. Deploy and copy the Web App URL.
3. In the app: More > paste URL > Backup to Sheet.

## 2. Launch via GitHub (APK)
1. Create a GitHub repo, upload ALL these files (keep folders, incl. `.github/workflows`), commit to `main`.
2. Open the **Actions** tab; "Build Android APK" runs (~5 min).
3. Open **Releases > Latest APK**, download `app-debug.apk` on your phone, tap it, allow "Install unknown apps", install.
4. First open: set a 4-digit PIN, then More > Enable fingerprint.

## Optional: web version
Repo Settings > Pages > deploy from `main`, folder `/www` (or copy www to /docs). Open the link in Chrome > Add to Home screen.
