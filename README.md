# Mr. Helper™ - Official Web Platform & Programmatic Local SEO Engine

Official website and search-engine-optimized landing platform for **Mr. Helper: Local Home Services App**, operated by **Vashik Technologies**.

Google Play Store App:  
[https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper](https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper)

---

## 🎯 SEO Strategy & Search Ranking Architecture

To ensure your app and website rank **#1** on Google and search engines for both branded and high-intent local queries:

### 1. Branded Searches (e.g., "Mr Helper app", "Mr Helper home services")
* Main domain (`index.html`) contains high-priority `<title>`, `<meta name="description">`, `Organization`, and `MobileApplication` Schema.org structured data.
* Direct official links to your Google Play Store listing (`com.digital_engineering_enterprises_platform.mrhelper`).

### 2. Service-Only Searches (e.g., "emergency plumber", "electrician near me", "ac service")
* Dedicated high-intent service directory (`services.html`) with transparent rate cards, 15-minute response guarantees, and 30-day service warranty badges.

### 3. Localized "Service + Place" Searches (Programmatic Local SEO)
Search engines rank dedicated pages containing exact match titles, geo-coordinates, locality lists, and `LocalBusiness` schemas. We created dedicated, pre-rendered static landing pages for:
* **Plumber in Hyd / Hyderabad**: `services/plumber-in-hyderabad.html` (targets Hitec City, Gachibowli, Kukatpally, Madhapur, Ameerpet, Banjara Hills...)
* **Plumber Warangal**: `services/plumber-in-warangal.html` (targets Subedari, Nakkalagutta, Pochamma Maidan, Mattewada, Kashibugga...)
* **Plumber in Hanamkonda**: `services/plumber-in-hanamkonda.html` (targets Balasamudram, Waddepally, Kishanpura, KU Road, Adarsh Nagar...)
* **Electrician in Hyd**: `services/electrician-in-hyderabad.html`
* **Electrician Warangal**: `services/electrician-in-warangal.html`
* **Electrician in Hanamkonda**: `services/electrician-in-hanamkonda.html`
* **AC Repair in Hyderabad**: `services/ac-repair-in-hyderabad.html`
* **AC Repair in Warangal**: `services/ac-repair-in-warangal.html`
* **Home Cleaning in Hyderabad**: `services/home-cleaning-in-hyderabad.html`
* **Home Cleaning in Warangal**: `services/home-cleaning-in-warangal.html`

All pages include full OpenGraph tags, Geo tags (`geo.region: IN-TG`), `sitemap.xml`, and `robots.txt`.

---

## 👥 How to Replace Founder Photos

As requested, dedicated leadership cards with placeholders have been created on both the homepage and `founders.html`.

When you are ready to insert the real photos:
1. Save your photos as:
   * `assets/images/founder-1.jpg` (Founder & CEO)
   * `assets/images/founder-2.jpg` (Co-Founder & COO / CTO)
2. In `index.html` and `founders.html`, simply update the `src` attribute:
   ```html
   <img src="assets/images/founder-1.jpg" alt="Founder & CEO" class="founder-photo">
   <img src="assets/images/founder-2.jpg" alt="Co-Founder & COO" class="founder-photo">
   ```
3. Update their names or bios in the text fields if desired.

---

## 🚀 How to Run Locally

You can run any local static web server from this directory:

```bash
# Using Python:
python -m http.server 8080

# Or using Node.js:
npx serve .
```

Open `http://localhost:8080` in your browser.
