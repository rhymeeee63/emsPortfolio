EMIR PORTFOLIO — PWA SETUP

Files added:
- manifest.json
- sw.js

index.html has been updated with:
- PWA manifest metadata
- mobile web app metadata
- service worker registration
- install prompt UI

IMPORTANT:
1. Upload index.html, manifest.json and sw.js to the same folder.
2. Keep your existing assets/ folder beside them.
3. The site must be served over HTTPS for PWA installation/service workers.
4. On Android Chrome, open the site and use Install app/Add to Home screen.
5. On iPhone Safari, use Share -> Add to Home Screen.

ICON:
The manifest uses assets/img/EmDesignIcon.png as the app icon.
For best results, make sure that image is at least 512x512 PNG with a square layout.
