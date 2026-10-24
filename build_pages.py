import os
import json

template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{meta_title}</title>
  
  <meta name="description" content="{meta_desc}">
  <meta name="keywords" content="{meta_keywords}">
  <meta name="author" content="Vashik Technologies">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://mrhelper.in/services/{slug}.html">

  <meta name="geo.region" content="IN-TG">
  <meta name="geo.placename" content="{city_name}">

  <meta property="og:type" content="article">
  <meta property="og:title" content="{meta_title}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:image" content="../assets/images/app-mockup.jpg">

  <link rel="icon" type="image/png" href="../assets/images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/seo-landing.css">

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "{schema_type}",
    "name": "Mr. Helper - {service_name} in {city_name}",
    "image": "https://mrhelper.in/assets/images/mr-helper-logo-clean.png",
    "@id": "https://mrhelper.in/services/{slug}.html",
    "url": "https://mrhelper.in/services/{slug}.html",
    "telephone": "+91-9123456789",
    "priceRange": "{price_range}",
    "address": {{
      "@type": "PostalAddress",
      "addressLocality": "{city_name}",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }},
    "areaServed": {localities_json},
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "{review_count}",
      "bestRating": "5",
      "worstRating": "1"
    }}
  }}
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <nav class="navbar">
        <a href="../index.html" class="brand-logo-wrap">
          <img src="../assets/images/mr-helper-logo-clean.png" alt="Mr. Helper" class="brand-logo-img">
          <div class="brand-text">
            <span class="brand-title">Mr. Helper</span>
            <span class="brand-tagline">{city_name} {short_service}</span>
          </div>
        </a>

        <ul class="nav-menu">
          <li><a href="../index.html" class="nav-link">Home</a></li>
          <li><a href="../services.html" class="nav-link">All Services</a></li>
          <li><a href="../founders.html" class="nav-link">Founders</a></li>
          <li><a href="../index.html#faqs" class="nav-link">FAQs</a></li>
          <li><a href="../contact.html" class="nav-link">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <button type="button" class="btn btn-outline btn-sm trigger-qr-modal">📱 Scan QR</button>
          <a href="https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Get App</a>
          <button type="button" class="mobile-toggle">☰</button>
        </div>
      </nav>
    </div>
  </header>

  <div class="seo-breadcrumb-bar">
    <div class="container">
      <ul class="seo-breadcrumb-list">
        <li class="seo-breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="seo-breadcrumb-item">›</li>
        <li class="seo-breadcrumb-item"><a href="../services.html">Services</a></li>
        <li class="seo-breadcrumb-item">›</li>
        <li class="seo-breadcrumb-item active">{short_service} in {city_name}</li>
      </ul>
    </div>
  </div>

  <section class="landing-hero">
    <div class="container">
      <div class="landing-hero-grid">
        <div>
          <span class="badge badge-success" style="margin-bottom: 14px;">⚡ Verified {city_name} Experts</span>
          <h1 class="landing-h1">{hero_h1}</h1>
          <p style="font-size: 1.15rem; color: #cbd5e1; margin-bottom: 20px;">
            {hero_desc}
          </p>

          <div style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">LOCAL AREAS COVERED IN {city_name_upper}:</div>
          <div class="landing-locality-strip">
            {locality_pills}
          </div>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
              <span>Download Mr. Helper & Book {short_service}</span>
              <span>➔</span>
            </a>
            <button type="button" class="btn btn-outline btn-lg trigger-book-modal" data-service="{short_service} in {city_name}" style="color: #ffffff; border-color: rgba(255,255,255,0.3);">
              <span>⚡ Fast Web Booking</span>
            </button>
          </div>
        </div>

        <div style="text-align: center;">
          <div class="mockup-wrapper" style="max-width: 380px; margin: 0 auto;">
            <img src="../assets/images/app-mockup.jpg" alt="Mr Helper {short_service} Booking">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{city_name} Rate Card</span>
        <h2 class="section-title">Transparent {short_service} Rates in {city_name}</h2>
        <p class="section-desc">Fixed pricing with 30-Day Service Guarantee from Vashik Technologies.</p>
      </div>

      <div class="pricing-table-card">
        <div class="pricing-table-header">
          <span style="font-weight: 700; font-size: 1.1rem;">{short_service} Scope & Charges</span>
          <span class="badge badge-success">✓ Fixed Rate Guarantee</span>
        </div>
        <table class="rate-table">
          <thead>
            <tr>
              <th>Service Item</th>
              <th>Estimated Duration</th>
              <th>Standard Charge</th>
              <th>Booking</th>
            </tr>
          </thead>
          <tbody>
            {table_rows}
          </tbody>
        </table>
      </div>

      <div class="local-checklist-grid">
        <div class="local-check-item">
          <span class="local-check-icon">✓</span>
          <div>
            <h4 style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">Rapid 15-Minute Doorstep Dispatch</h4>
            <p style="font-size: 0.88rem; color: #64748b;">Our hyper-local dispatch finds the nearest certified {short_service_lower} across {city_name} within minutes.</p>
          </div>
        </div>
        <div class="local-check-item">
          <span class="local-check-icon">✓</span>
          <div>
            <h4 style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">100% Background-Checked Professionals</h4>
            <p style="font-size: 0.88rem; color: #64748b;">Every technician undergoes complete identity and criminal background verification for your safety.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none;">
        <div>
          © 2026 <strong>Mr. Helper</strong> by <strong>Vashik Technologies</strong>. All rights reserved.
        </div>
        <div>
          <a href="../index.html" style="color: #60a5fa; margin-right: 14px;">Home</a>
          <a href="../services.html" style="color: #60a5fa; margin-right: 14px;">All Services</a>
          <a href="https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style="color: #f97316;">Download App</a>
        </div>
      </div>
    </div>
  </footer>

  <div class="modal-overlay" id="qrModal">
    <div class="modal-content">
      <button type="button" class="modal-close-btn">✕</button>
      <div style="text-align: center;">
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 8px;">Scan to Download Mr. Helper</h3>
        <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 16px;">Instant {short_service} booking in {city_name}.</p>
        <img src="../assets/images/playstore-qr.png" alt="QR Code" style="width: 220px; height: 220px; margin: 0 auto 16px;">
        <a href="https://play.google.com/store/apps/details?id=com.digital_engineering_enterprises_platform.mrhelper&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">Open Google Play</a>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="bookModal">
    <div class="modal-content">
      <button type="button" class="modal-close-btn">✕</button>
      <div>
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 8px;">Book {short_service} in {city_name}</h3>
        <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 16px;">Certified {city_name} pro dispatched within 24 hours.</p>
        <form id="quickBookingForm">
          <input type="hidden" id="modalServiceInput" value="{short_service} in {city_name}">
          <input type="hidden" id="modalUserCity" value="{city_name}">
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">Locality in {city_name}</label>
            <input type="text" placeholder="e.g. Enter your area" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
          </div>
          <div style="margin-bottom: 18px;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">Mobile Number</label>
            <input type="tel" id="modalUserPhone" placeholder="e.g. 9876543210" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
          </div>
          <button type="submit" class="btn btn-secondary" style="width: 100%;">Confirm Booking ➔</button>
        </form>
      </div>
    </div>
  </div>

  <script src="../assets/js/seo-data.js"></script>
  <script src="../assets/js/main.js"></script>
</body>
</html>
"""

pages = [
    {
        'slug': 'electrician-in-hyderabad',
        'meta_title': 'Electrician in Hyderabad (Hyd) | Within 24 Hours Arrival | Mr. Helper App',
        'meta_desc': 'Need an electrician in Hyderabad? Book verified electricians on Mr. Helper App. Fan installation, switchboard repair, MCB fix across Hitec City, Kukatpally, Gachibowli. Download now!',
        'meta_keywords': 'electrician in hyd, electrician in hyderabad, best electrician hyderabad, emergency electrician hyderabad, mr helper electrician',
        'city_name': 'Hyderabad',
        'city_name_upper': 'HYDERABAD',
        'short_service': 'Electrician',
        'service_name': 'Electrical Services',
        'schema_type': 'Electrician',
        'price_range': '₹149 - ₹1499',
        'review_count': '16200',
        'hero_h1': 'Top Rated Electrician in Hyderabad (Hyd)',
        'hero_desc': 'Ceiling fan not working, frequent MCB tripping, or need switchboard installation in Hyderabad? Mr. Helper connects you with certified electricians within 24 hours with upfront fixed pricing.',
        'localities': ['Hitec City', 'Gachibowli', 'Kukatpally', 'Madhapur', 'Ameerpet', 'Banjara Hills', 'Secunderabad', 'Dilsukhnagar'],
        'items': [
            ('Ceiling Fan Installation & Repair', '20 Mins', '₹149'),
            ('Switchboard & Socket Fixing', '20 Mins', '₹129'),
            ('MCB Tripping & Fuse Box Inspection', '30 Mins', '₹249'),
            ('Inverter & Battery Wiring Setup', '45 Mins', '₹399'),
            ('Chandelier & Decorative Light Mounting', '40 Mins', '₹349'),
            ('Full Short Circuit Diagnosis', '45 Mins', '₹299'),
        ]
    },
    {
        'slug': 'electrician-in-warangal',
        'meta_title': 'Electrician Warangal | Fast Doorstep Electrician | Mr. Helper App',
        'meta_desc': 'Looking for an electrician in Warangal? Book certified electricians on Mr. Helper App in Subedari, Nakkalagutta, Mattewada. Fan, switchboard, wiring repair within 24 hours. Download on Play Store!',
        'meta_keywords': 'electrician warangal, electrician in warangal, emergency electrician warangal, fan repair warangal, mr helper warangal',
        'city_name': 'Warangal',
        'city_name_upper': 'WARANGAL',
        'short_service': 'Electrician',
        'service_name': 'Electrical Services',
        'schema_type': 'Electrician',
        'price_range': '₹149 - ₹1199',
        'review_count': '4820',
        'hero_h1': 'Electrician Warangal - Certified Doorstep Electricians',
        'hero_desc': 'Book experienced electricians in Warangal town for prompt fan repairs, inverter installation, switchboard repair, and house wiring. Upfront rate card on Mr. Helper.',
        'localities': ['Subedari', 'Nakkalagutta', 'Pochamma Maidan', 'Mattewada', 'Kashibugga', 'Ramnagar', 'Hunter Road'],
        'items': [
            ('Ceiling Fan & Exhaust Fan Repair', '20 Mins', '₹149'),
            ('Switchboard / Socket Replacement', '20 Mins', '₹129'),
            ('Inverter Connection & Battery Maintenance', '40 Mins', '₹349'),
            ('MCB Tripping Issue Resolution', '30 Mins', '₹229'),
            ('Main Meter & Wiring Inspection', '35 Mins', '₹249'),
        ]
    },
    {
        'slug': 'electrician-in-hanamkonda',
        'meta_title': 'Electrician in Hanamkonda | Within 24 Hours Arrival | Mr. Helper App',
        'meta_desc': 'Need an electrician in Hanamkonda? Book verified electricians on Mr. Helper App in Balasamudram, Waddepally, KU Road. Doorstep arrival within 24 hours, upfront pricing. Download on Google Play!',
        'meta_keywords': 'electrician in hanamkonda, electrician hanamakonda, best electrician hanamkonda, fan repair hanamkonda, mr helper hanamkonda',
        'city_name': 'Hanamkonda',
        'city_name_upper': 'HANAMKONDA',
        'short_service': 'Electrician',
        'service_name': 'Electrical Services',
        'schema_type': 'Electrician',
        'price_range': '₹149 - ₹1199',
        'review_count': '3950',
        'hero_h1': 'Electrician in Hanamkonda - Rapid Doorstep Experts',
        'hero_desc': 'Quick emergency electricians across Balasamudram, Waddepally, and Kakatiya University Road. Fixed rates starting from ₹149 with 30-day service warranty.',
        'localities': ['Balasamudram', 'Waddepally', 'Kishanpura', 'KU Road', 'Adarsh Nagar', 'Bheemaram', 'Nayeemnagar'],
        'items': [
            ('Fan Repair & Capacitor Change', '15 Mins', '₹149'),
            ('Switchboard & Power Socket Repair', '20 Mins', '₹129'),
            ('Inverter Setup & Re-wiring', '40 Mins', '₹349'),
            ('MCB Distribution Box Fix', '30 Mins', '₹229'),
        ]
    },
    {
        'slug': 'ac-repair-in-hyderabad',
        'meta_title': 'AC Repair in Hyderabad (Hyd) | Jet Servicing & Gas Refill | Mr. Helper App',
        'meta_desc': 'Best AC repair in Hyderabad. Power jet cleaning, gas charging, cooling issue fix across Hitec City, Gachibowli, Kukatpally. Same-day service. Download Mr. Helper App on Google Play!',
        'meta_keywords': 'ac repair in hyderabad, ac service in hyd, ac gas refill hyderabad, split ac service hyderabad, mr helper ac repair',
        'city_name': 'Hyderabad',
        'city_name_upper': 'HYDERABAD',
        'short_service': 'AC Repair',
        'service_name': 'Air Conditioning Repair',
        'schema_type': 'HVACBusiness',
        'price_range': '₹399 - ₹2499',
        'review_count': '14100',
        'hero_h1': 'AC Repair & Power Jet Servicing in Hyderabad (Hyd)',
        'hero_desc': 'Is your AC blowing warm air or leaking water? Book high-pressure power jet AC servicing, gas leak test, and cooling repair in Hyderabad with certified technicians on Mr. Helper.',
        'localities': ['Hitec City', 'Gachibowli', 'Kukatpally', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kondapur', 'Secunderabad'],
        'items': [
            ('Power Jet Deep Cleaning (Indoor + Outdoor)', '45 Mins', '₹499'),
            ('Split AC Gas Leakage Fix & Full Refill', '60 Mins', '₹1899'),
            ('AC Installation / Uninstallation', '60 Mins', '₹799'),
            ('Cooling Troubleshooting & Inspection', '30 Mins', '₹299'),
            ('PCB Circuit Board Repair', '60 Mins', '₹999'),
        ]
    },
    {
        'slug': 'ac-repair-in-warangal',
        'meta_title': 'AC Repair in Warangal | Top AC Technicians | Mr. Helper App',
        'meta_desc': 'AC repair in Warangal! Book verified AC technicians on Mr. Helper for power jet servicing, gas charging, cooling issues in Subedari, Nakkalagutta, Mattewada. Download on Play Store!',
        'meta_keywords': 'ac repair in warangal, ac service warangal, ac gas recharge warangal, split ac repair warangal, mr helper warangal',
        'city_name': 'Warangal',
        'city_name_upper': 'WARANGAL',
        'short_service': 'AC Repair',
        'service_name': 'Air Conditioning Repair',
        'schema_type': 'HVACBusiness',
        'price_range': '₹399 - ₹2299',
        'review_count': '3800',
        'hero_h1': 'AC Repair & Servicing in Warangal',
        'hero_desc': 'Get your split or window AC chilled and running at peak performance before summer in Warangal. Experienced cooling technicians with genuine parts and upfront rate cards.',
        'localities': ['Subedari', 'Nakkalagutta', 'Pochamma Maidan', 'Mattewada', 'Kashibugga', 'Ramnagar'],
        'items': [
            ('Power Jet AC Servicing', '45 Mins', '₹449'),
            ('AC Gas Leakage Check & Refill', '60 Mins', '₹1799'),
            ('AC Dismounting & Installation', '60 Mins', '₹749'),
            ('Water Leakage & Filter Clean', '30 Mins', '₹299'),
        ]
    },
    {
        'slug': 'home-cleaning-in-hyderabad',
        'meta_title': 'Home Cleaning in Hyderabad (Hyd) | Deep Sanitization | Mr. Helper App',
        'meta_desc': 'Book professional deep home cleaning in Hyderabad. Bathroom scrub, kitchen chimney degreasing, sofa shampooing across Kukatpally, Hitec City, Gachibowli on Mr. Helper App!',
        'meta_keywords': 'home cleaning in hyderabad, deep cleaning hyd, bathroom cleaning hyderabad, sofa dry cleaning hyderabad, mr helper cleaning',
        'city_name': 'Hyderabad',
        'city_name_upper': 'HYDERABAD',
        'short_service': 'Home Cleaning',
        'service_name': 'Cleaning Services',
        'schema_type': 'HousePainter',
        'price_range': '₹499 - ₹4999',
        'review_count': '11200',
        'hero_h1': 'Deep Home Cleaning & Sanitization in Hyderabad (Hyd)',
        'hero_desc': 'Hospital-grade sanitization, intensive bathroom scrub, kitchen degreasing, and sofa shampooing by trained cleaning crews in Hyderabad on Mr. Helper.',
        'localities': ['Hitec City', 'Gachibowli', 'Kukatpally', 'Madhapur', 'Ameerpet', 'Banjara Hills', 'Dilsukhnagar'],
        'items': [
            ('Intensive Bathroom Deep Scrub (Per Bath)', '45 Mins', '₹399'),
            ('Kitchen Deep Clean & Chimney Degreasing', '90 Mins', '₹899'),
            ('3-Seater Sofa & Cushion Shampooing', '60 Mins', '₹599'),
            ('Full 2BHK Home Deep Sanitization', '3-4 Hours', '₹2499'),
            ('Full 3BHK Home Deep Sanitization', '4-5 Hours', '₹3299'),
        ]
    },
    {
        'slug': 'home-cleaning-in-warangal',
        'meta_title': 'Home Cleaning in Warangal | Deep House Cleaning | Mr. Helper App',
        'meta_desc': 'Professional home cleaning in Warangal. Full house deep cleaning, bathroom sanitization, sofa cleaning in Subedari, Nakkalagutta. Book on Mr. Helper App!',
        'meta_keywords': 'home cleaning in warangal, deep cleaning warangal, house cleaning warangal, sofa shampoo warangal, mr helper cleaning',
        'city_name': 'Warangal',
        'city_name_upper': 'WARANGAL',
        'short_service': 'Home Cleaning',
        'service_name': 'Cleaning Services',
        'schema_type': 'HousePainter',
        'price_range': '₹449 - ₹3999',
        'review_count': '2900',
        'hero_h1': 'Deep Home Cleaning Services in Warangal',
        'hero_desc': 'Revitalize your house with expert deep cleaning teams in Warangal. Safe, eco-friendly sanitizers and specialized machinery for spotless tiles, kitchens, and washrooms.',
        'localities': ['Subedari', 'Nakkalagutta', 'Pochamma Maidan', 'Mattewada', 'Kashibugga', 'Ramnagar'],
        'items': [
            ('Intensive Bathroom Cleaning', '45 Mins', '₹349'),
            ('Kitchen Deep Scrub & Degrease', '75 Mins', '₹799'),
            ('Sofa Set Shampooing (5 Seater)', '60 Mins', '₹699'),
            ('Complete 2BHK House Deep Cleaning', '3 Hours', '₹1999'),
        ]
    }
]

for p in pages:
    loc_pills = '\n'.join([f'<span class="landing-locality-pill">📍 {l}</span>' for l in p['localities']])
    t_rows = '\n'.join([
        f'<tr><td><strong>{it[0]}</strong></td><td>{it[1]}</td><td><span class="price-val">{it[2]}</span></td><td><button class="btn btn-primary btn-sm trigger-book-modal" data-service="{it[0]}">Book</button></td></tr>'
        for it in p['items']
    ])
    
    html = template.format(
        meta_title=p['meta_title'],
        meta_desc=p['meta_desc'],
        meta_keywords=p['meta_keywords'],
        slug=p['slug'],
        city_name=p['city_name'],
        city_name_upper=p['city_name_upper'],
        short_service=p['short_service'],
        short_service_lower=p['short_service'].lower(),
        service_name=p['service_name'],
        schema_type=p['schema_type'],
        price_range=p['price_range'],
        review_count=p['review_count'],
        localities_json=json.dumps(p['localities']),
        hero_h1=p['hero_h1'],
        hero_desc=p['hero_desc'],
        locality_pills=loc_pills,
        table_rows=t_rows
    )
    
    filepath = os.path.join('services', f"{p['slug']}.html")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Generated', filepath)
