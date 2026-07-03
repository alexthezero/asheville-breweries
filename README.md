# Asheville Brewery Checklist Web App

A static GitHub Pages-ready web app that ranks popular Asheville-area breweries from highest to lowest by a visible starter score.

The app includes brewery names, addresses, details, website links, map links, filters, and a local checklist saved with `localStorage`.

## Files

- `index.html`
- `style.css`
- `app.js`
- `README.md`

## Features

- Ranked brewery list from highest starter score to lowest
- Address included for every brewery
- Details for every brewery
- Checklist boxes
- Checklist progress saved locally in browser memory
- Search box
- Category/area filter
- Google Maps links
- Website links
- Info source links
- Copy checked list
- Reset checklist
- Mobile-friendly layout

## Important note about ratings

The score is a static starter ranking stored in `app.js`. It is not live Google/Yelp data. Live review ratings change often and require an API.

To update a brewery score, edit the `rating` field in `app.js`.

## Publish on GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select:
   - Branch: `main`
   - Folder: `/root`
5. Save.

Your site should publish at:

```text
https://alexthezero.github.io/asheville-breweries/
```

## Starter sources

- Southern Living — The 15 Best Breweries In Asheville, North Carolina
- Southern Living — Highland Brewing Company profile
- Axios Raleigh — Asheville's new breweries elevate city's beer scene
- Official brewery websites linked in the app

Always verify addresses, hours, menus, and age policies before visiting.
