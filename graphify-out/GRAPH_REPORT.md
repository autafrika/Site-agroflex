# Graph Report - agroflex  (2026-11-12)

## Corpus Check
- Corpus is ~12,166 words - fits in a single context window. You may not need a graph.

## Summary
- 396 nodes · 605 edges · 31 communities (20 shown, 11 thin omitted)
- Extraction: 83% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 98 edges (avg confidence: 0.84)
- Token cost: 615,261 input · 0 output

## Community Hubs (Navigation)
- Landing Page Core & Assets
- Mobile Payment Mockups
- Mobile Profile & Cooperatives
- AI Chat & Mobile Home
- Disease Scan Results (Sick)
- Brand & Cooperative Dashboard
- Dev Dependencies
- Payment Method Screens
- New Market Sections
- Web Feed & Messaging
- HTML Entry & SEO
- Feature Illustrations
- Plant Catalog & Details
- Runtime Dependencies
- Store Badges & Web Feed
- Disease Detection Gallery
- ESLint Config
- Vite Build Config
- NPM Scripts
- Weather Component
- Weather Modal Screens
- Plant Data List
- Weather Icons
- Vite Scaffold Asset
- Tea Field Imagery
- Vercel Rewrites
- React Logo

## God Nodes (most connected - your core abstractions)
1. `react` - 26 edges
2. `framer-motion` - 12 edges
3. `MainPage()` - 12 edges
4. `index.html SPA Entry Page` - 9 edges
5. `Price Detail & Similar Products Screenshot (mobile)` - 8 edges
6. `react-icons` - 7 edges
7. `BlurImage()` - 7 edges
8. `Header()` - 7 edges
9. `Marche()` - 7 edges
10. `PhoneFrame()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `AgroFlex Home Feed (MacBook Air mockup)` --implements--> `AgroFlex Brand Identity (green leaf + wordmark)`  [INFERRED]
  src/assets/images/582shots_so.png → public/agroflexBg.png
- `AgroFlex mobile home (logged in)` --semantically_similar_to--> `AgroFlex mobile home (logged out)`  [INFERRED] [semantically similar]
  src/assets/images/Screenshot_20261104_221723_Chrome.jpg → src/assets/images/Screenshot_20261104_221606_Chrome.jpg
- `Mobile Money Provider Selection Screen (duplicate)` --semantically_similar_to--> `Mobile Money Provider Selection Screen`  [INFERRED] [semantically similar]
  src/assets/images/envente/oa__5_-removebg-preview.png → src/assets/images/envente/oa__27_-removebg-preview.png
- `AgroFlex Favicon` --semantically_similar_to--> `AgroFlex Logo (background image)`  [INFERRED] [semantically similar]
  public/favicon.png → public/agroflexBg.png
- `Prix près de chez vous widget (Haricots, Manioc, Larves comestibles, Poivron, Piment)` --semantically_similar_to--> `Market price lookup by product and zone`  [INFERRED] [semantically similar]
  src/assets/images/582shots_so.png → src/assets/images/Screenshot from 2026-11-04 21-53-44.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Social/SEO metadata for Agroflex landing page** — index_seo_meta, index_open_graph_meta, index_twitter_card_meta, index_agroflex_brand [INFERRED 0.85]
- **Vite React SPA bootstrap** — index_html_entry, index_root, index_main_jsx_script, index_app_css_stylesheet [INFERRED 0.85]
- **AgroFlex web app screens (feed, messages, prices)** — src_assets_images_582shots_so_agroflex_home_feed_mockup, src_assets_images_screenshot_from_2026_10_29_13_25_16_agroflex_messages_page, src_assets_images_screenshot_from_2026_10_29_20_15_06_agroflex_messages_page_extended, src_assets_images_screenshot_from_2026_11_04_21_53_23_agroflex_feed_offer_post, src_assets_images_screenshot_from_2026_11_04_21_53_44_agroflex_prix_du_marche_page [INFERRED 0.85]
- **AgroFlex logo assets** — public_agroflexbg_agroflex_logo_background, public_favicon_agroflex_favicon, public_agroflexbg_agroflex_brand_identity [INFERRED 0.85]
- **AgroFlex profile and cooperative management** — src_assets_images_screenshot_from_2026_11_04_21_56_31_profile_switcher, src_assets_images_screenshot_from_2026_11_04_21_56_31_personal_profile_form, src_assets_images_screenshot_20261104_155105_chrome_mes_cooperatives, src_assets_images_screenshot_20261104_155323_chrome_search_visibility_toggle, src_assets_images_screenshot_20261104_155105_chrome_verified_phone [INFERRED 0.85]
- **AgroFlex local price discovery** — src_assets_images_screenshot_20261104_221606_chrome_nearby_prices_carousel, src_assets_images_screenshot_20261104_221606_chrome_location_filter, src_assets_images_screenshot_20261104_221640_chrome_market_price_lookup, src_assets_images_screenshot_20261104_221640_chrome_product_catalog_grid [INFERRED 0.85]
- **Listing to contact flow** — src_assets_images_screenshot_20261104_221619_chrome_listing_post_card, src_assets_images_screenshot_20261104_221619_chrome_contact_actions, src_assets_images_screenshot_from_2026_11_04_21_55_38_messaging_inbox [INFERRED 0.75]
- **AgroFlex mobile web app screens** — src_assets_images_screenshot_20261104_221729_chrome, src_assets_images_screenshot_20261104_221841_chrome, src_assets_images_screenshot_20261104_221858_chrome, src_assets_images_screenshot_20261104_221907_chrome [INFERRED 0.95]
- **Market price lookup flow** — src_assets_images_screenshot_20261104_221858_chrome_price_search_form, src_assets_images_screenshot_20261104_221858_chrome_nearest_zone_price_fallback, src_assets_images_screenshot_20261104_221907_chrome_price_evolution, src_assets_images_screenshot_20261104_221907_chrome_similar_products, src_assets_images_screenshot_20261104_221907_chrome_price_source_attribution [INFERRED 0.85]
- **Phone mockups for landing page showcase** — src_assets_images_agrophone, src_assets_images_astuces, src_assets_images_agroflex [INFERRED 0.75]
- **AgroFlex marketplace feed UI components** — src_assets_images_hero_market_sidebar_navigation, src_assets_images_hero_market_feed_filters, src_assets_images_hero_market_publication_post, src_assets_images_hero_market_prix_pres_de_chez_vous, src_assets_images_hero_market_publier_action [EXTRACTED 1.00]
- **Agricultural growth visual imagery** — src_assets_images_champ1_tea_plantation_landscape, src_assets_images_champ1_tea_plantation_landscape_hires, src_assets_images_croissant_growth_seedlings_chart [INFERRED 0.75]
- **AgroFlex Home Feature Set** — src_assets_images_ai_landing_disease_detection, src_assets_images_ai_landing_ai_assistant, src_assets_images_ai_landing_project_generator, src_assets_images_ai_landing_marketplace [EXTRACTED 1.00]
- **AgroFlex Mobile App Screens** — src_assets_images_ai_landing_screen, src_assets_images_ai_ai_res_1_screen, src_assets_images_ai_ai_res_2_screen, src_assets_images_details_astuce_0_screen, src_assets_images_details_astuce_1_screen, src_assets_images_details_detail_0_screen [INFERRED 0.95]
- **Farming Tip Browsing Flow** — src_assets_images_details_astuce_0_screen, src_assets_images_details_astuce_0_farming_tips_carousel, src_assets_images_details_astuce_1_screen [INFERRED 0.85]
- **Courge plant detail page screens** — src_assets_images_details_detail_1_plant_detail_screen, src_assets_images_details_detail_3_plant_detail_watering, src_assets_images_details_detail_2_plant_detail_tips_gallery [INFERRED 0.95]
- **Plant discovery flow: home cards -> catalog -> detail** — src_assets_images_details_detail_11_home_plant_cards, agroflex_plant_catalog, agroflex_plant_detail_page [INFERRED 0.85]
- **Plant Scan to Diagnosis Results Flow** — src_assets_images_detectionresponse_scan_0_screen, src_assets_images_detectionresponse_sick_1_screen, src_assets_images_detectionresponse_sick_2_screen, src_assets_images_detectionresponse_sick_3_screen, src_assets_images_detectionresponse_healthy_3_screen [INFERRED 0.85]
- **Marketplace Browse-Detail-Checkout Flow** — src_assets_images_envente_1_screen, src_assets_images_envente_2_screen, src_assets_images_envente_3_screen [INFERRED 0.85]
- **Agroflex Market Purchase Flow (browse -> detail -> checkout -> payment)** — src_assets_images_envente_oa__20__removebg_preview, src_assets_images_envente_oa__21__removebg_preview, src_assets_images_envente_oa__22__removebg_preview, src_assets_images_envente_oa__23__removebg_preview, src_assets_images_envente_oa__24__removebg_preview, src_assets_images_envente_4, src_assets_images_envente_5 [INFERRED 0.85]
- **Supported Payment Methods** — src_assets_images_envente_oa__24__removebg_preview_card_payment_form, src_assets_images_envente_4_paypal_payment, src_assets_images_envente_5_mobile_money_payment [EXTRACTED 1.00]
- **Mobile Money Providers** — src_assets_images_envente_5_lumicash, src_assets_images_envente_5_ecocash, src_assets_images_envente_5_m_pesa, src_assets_images_envente_5_airtel_money [EXTRACTED 1.00]
- **Marketplace Checkout Payment Flow** — src_assets_images_envente_oa__25__removebg_preview_payment_screen, src_assets_images_envente_oa__26__removebg_preview_paypal_expanded, src_assets_images_envente_oa__27__removebg_preview_mobile_money_providers, src_assets_images_envente_oa__28__removebg_preview_mobile_money_how_it_works [INFERRED 0.95]
- **Supported Mobile Money Providers** — src_assets_images_envente_oa__27__removebg_preview_lumicash, src_assets_images_envente_oa__27__removebg_preview_ecocash, src_assets_images_envente_oa__27__removebg_preview_m_pesa, src_assets_images_envente_oa__27__removebg_preview_airtel_money, src_assets_images_envente_oa__28__removebg_preview_orange_money [INFERRED 0.85]
- **Agroflex feature section illustrations (Functionnalities component)** — src_assets_svg_create_project, src_assets_svg_irrigation_field, src_assets_svg_prescriptions, src_assets_svg_prevision_meteo [INFERRED 0.85]
- **Agroflex feature illustrations (unDraw)** — src_assets_svg_scan_deseases, src_assets_svg_suivie_du_champs, undraw_illustration_library [INFERRED 0.75]
- **Weather indicator icons** — src_assets_svg_sun, src_assets_svg_water, weather_conditions [INFERRED 0.75]

## Communities (31 total, 11 thin omitted)

### Community 0 - "Landing Page Core & Assets"
Cohesion: 0.08
Nodes (27): framer-motion, react, react-router-dom, Hand-drawn Arrow (Excalidraw sketch), App(), MainPage(), BlurImage(), Diagnostic() (+19 more)

### Community 1 - "Mobile Payment Mockups"
Cohesion: 0.09
Nodes (28): Payment Screen - PayPal Expanded (mockup), Bottom Nav Bar (Home, Chat, Scan, Projects, Market), Order Summary with Delivery Fee and Total, Payment Method Accordion (Card / PayPal / Mobile Money), PayPal Payment Option, Payment Screen - Mobile Money Provider Selection (mockup), Airtel Money, Ecocash (+20 more)

### Community 2 - "Mobile Profile & Cooperatives"
Cohesion: 0.10
Nodes (28): Mes cooperatives section, Mobile bottom tab bar (logged in), AgroFlex mobile profile: contact fields and Mes cooperatives, Verified phone number used for profile, Voir mon profil public link, AgroFlex mobile Mon profil (personal profile form), Profil visible dans les recherches toggle, Feed filter chips (Tout, Prix, Offres, Demandes) (+20 more)

### Community 3 - "AI Chat & Mobile Home"
Cohesion: 0.10
Nodes (26): Agroflex Chat (AI Assistant), Bean Cultivation Advice (haricot), Bottom Navigation Bar (Home, Chat, Scan, Projects, Market), Agroflex Chat - AI Answer Screen (part 1), Agroflex Chat - AI Answer Screen (part 2), Assistant IA, Detection des maladies (plant disease scan), Marketplace (sell harvests to targeted buyers) (+18 more)

### Community 4 - "Disease Scan Results (Sick)"
Cohesion: 0.10
Nodes (26): Conseils Section (watering, fertilisation, monitoring), Analysis Results Screen - Treatments & Advice (healthy_3), Traitements Section (inspection, insecticide), Analyser Button (start AI plant analysis), AgroFlex Bottom Navigation (Home, Chat, Scan, Projects, Market), Plant Scan Preview Screen (scan_0), AI Diagnostic Summary (hedged, needs more info), Detected Disease: Leaf Damage (undetermined cause) (+18 more)

### Community 5 - "Brand & Cooperative Dashboard"
Cohesion: 0.12
Nodes (25): AgroFlex Logo, AgroFlex Brand Identity (green plant mark), AgroFlex Splash Screen Phone Mockup, Astuces (Tips) Screen Phone Mockup, Farming Tips Feed (Le saviez-vous / conseil), Plant Scan Action Button, Grocery Shopping Cart Cutout, Marketplace / Sales Section Visual (+17 more)

### Community 6 - "Dev Dependencies"
Cohesion: 0.13
Nodes (21): devDependencies, autoprefixer@^10.4.21, eslint@^9.20.1, eslint-plugin-react-hooks@^5.0.0, eslint-plugin-react-refresh@^0.4.18, postcss@^8.5.3, tailwindcss@^4.0.14, @types/react@^19.0.8 (+13 more)

### Community 7 - "Payment Method Screens"
Cohesion: 0.11
Nodes (18): App Bottom Navigation (Home, Chat, Scan, Projects, Market), Credit / Debit Card Payment Option, Mobile Money Payment Option, Order Summary (Tomates Bio, Total $6.98), Paiement Screen - Payment Method Selection, PayPal Payment Option, Paiement Screen - PayPal Expanded, Se Connecter à PayPal Button (+10 more)

### Community 8 - "New Market Sections"
Cohesion: 0.25
Nodes (12): react-icons, Cooperative(), features, Marche(), steps, points, Prix(), samples (+4 more)

### Community 9 - "Web Feed & Messaging"
Cohesion: 0.16
Nodes (17): AgroFlex Brand Identity (green leaf + wordmark), AgroFlex Logo (background image), AgroFlex Favicon, AgroFlex Home Feed (MacBook Air mockup), Feed filters (Tout, Prix, Offres, Demandes, Semences, Transformés) + Choisir ma zone, Hero banner: Les prix et les produits agricoles près de chez vous, Marketplace post card (author, role, location, time, product photo), Prix près de chez vous widget (Haricots, Manioc, Larves comestibles, Poivron, Piment) (+9 more)

### Community 10 - "HTML Entry & SEO"
Cohesion: 0.18
Nodes (15): Agroflex - Agriculture intelligente et durable, /src/styles/App.css Stylesheet Link, Disabled Tailwind/DaisyUI CDN Includes, index.html SPA Entry Page, /src/main.jsx Module Script, Open Graph Meta Tags, #root Mount Point, SEO Meta Tags (description, keywords) (+7 more)

### Community 11 - "Feature Illustrations"
Cohesion: 0.20
Nodes (13): Field Monitoring, Plant Disease Detection, Create Project Illustration (unDraw: person adding a new project card on a dashboard), unDraw Illustration Style (Katerina Limpitsouni), Irrigation Field Illustration (unDraw: person watering green plants), Light Bulb Icon (SVG Repo), Monitoring Illustration (unDraw: person viewing dashboard charts), Prescriptions Illustration (unDraw: doctor/clipboard, disease detection and treatment) (+5 more)

### Community 12 - "Plant Catalog & Details"
Cohesion: 0.26
Nodes (13): Courge (Cucurbita spp.), Plant Catalog with Search & Category Filters, Plant Detail Page (Details sur la plante), AI Plant Health Detection (photo analysis), Unicode escape rendering bug in plant tips, AgroFlex Home Screen - Plant Cards, Plant Detail Screen - Courge (header & essentials), Plant Detail Screen - Conseils & Gallerie (+5 more)

### Community 13 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, framer-motion@^12.5.0, prop-types@^15.8.1, react@^19.0.0, react-dom@^19.0.0, react-icons@^5.5.0, react-router-dom@^7.3.0, react-scroll@^1.9.3 (+5 more)

### Community 14 - "Store Badges & Web Feed"
Cohesion: 0.22
Nodes (11): Growth Seedlings Rising Chart (croissant.jpg), Hand-drawn Curly Arrow (flesh_excalidraw.png), Get It On Google Play Badge, Google Play Triangle Logo, AgroFlex Web Market Feed Screenshot, Feed Filters (Tout, Prix, Offres, Demandes, Semences, Transformés) + Zone selector, Prix près de chez vous (Nearby Prices Widget), Marketplace Publication Post (buyer/trader in Goma) (+3 more)

### Community 16 - "ESLint Config"
Cohesion: 0.25
Nodes (6): @eslint/js@^9.21.0, eslint-plugin-react@^7.37.4, globals@^16.0.0, @eslint/js, eslint-plugin-react, globals

### Community 17 - "Vite Build Config"
Cohesion: 0.29
Nodes (6): @tailwindcss/vite@^4.0.14, vite@^6.1.0, @vitejs/plugin-react@^4.3.4, @tailwindcss/vite, vite, @vitejs/plugin-react

### Community 18 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 20 - "Weather Modal Screens"
Cohesion: 0.50
Nodes (4): Conditions Actuelles (Feels like, Humidity, Wind, Visibility), Météo Modal - Current Weather, Météo Modal - 5-Day Forecast, 5-Day Forecast List

### Community 24 - "Weather Icons"
Cohesion: 1.00
Nodes (3): Sun Icon, Water Drop Icon, Weather Conditions Indicators

## Ambiguous Edges - Review These
- `index.html SPA Entry Page` → `Laravel Blade Placeholders (asset(), url()->current())`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to
- `Hand-drawn Curly Arrow (flesh_excalidraw.png)` → `Get It On Google Play Badge`  [AMBIGUOUS]
  src/assets/images/flesh_excalidraw.png · relation: conceptually_related_to
- `Light Bulb Icon (SVG Repo)` → `Weather Forecast Illustration (unDraw: person with sun/weather scene)`  [AMBIGUOUS]
  src/assets/svg/light.svg · relation: conceptually_related_to

## Knowledge Gaps
- **63 isolated node(s):** `ESLint Rules`, `/src/styles/App.css Stylesheet Link`, `Disabled Tailwind/DaisyUI CDN Includes`, `Agroflex - Agriculture intelligente et durable`, `Vite Logo SVG (default scaffold asset)` (+58 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 116 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Landing Page Core & Assets` to `Dev Dependencies`, `New Market Sections`, `Feature Illustrations`, `Runtime Dependencies`, `Disease Detection Gallery`, `Weather Component`, `Image Helper`, `AI Chat Section`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **What connects `ESLint Rules`, `/src/styles/App.css Stylesheet Link`, `Disabled Tailwind/DaisyUI CDN Includes` to the rest of the system?**
  _63 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page Core & Assets` be split into smaller, more focused modules?**
  _Cohesion score 0.07562008469449485 - nodes in this community are weakly interconnected._
- **Why does `Payment Screen - PayPal Expanded (mockup)` connect `Mobile Payment Mockups` to `Landing Page Core & Assets`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `Mobile Payment Mockups` be split into smaller, more focused modules?**
  _Cohesion score 0.09259259259259259 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `index.html SPA Entry Page` and `Laravel Blade Placeholders (asset(), url()->current())`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Hand-drawn Curly Arrow (flesh_excalidraw.png)` and `Get It On Google Play Badge`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._