(() => {
  const root = document.documentElement;
  const storage = window.localStorage;

  const translations = {
    fr: {
      "ui.skipToContent": "Aller au contenu",
      "ui.menu": "Menu",
      "ui.themeToggle": "Basculer le mode clair/sombre",
      "ui.themeShort": "Mode",
      "ui.languageToggle": "Changer de langue",
      "ui.close": "Fermer",
      "ui.readMore": "En savoir plus",
      "nav.home": "Accueil",
      "nav.restaurant": "Le Restaurant",
      "nav.chef": "Le Chef",
      "nav.menu": "La Carte",
      "nav.reservation": "Reservation",
      "nav.gallery": "Galerie",
      "nav.contact": "Contact",
      "nav.legal": "Mentions legales",
      "cta.reserve": "Reserver",
      "cta.discoverMenu": "Decouvrir la carte",
      "cta.viewGallery": "Voir la galerie",
      "cta.learnMore": "En savoir plus",
      "cta.contact": "Nous contacter",
      "cta.bookTable": "Reserver une table",
      "cta.seeMenus": "Voir les menus",
      "cta.downloadMenu": "Telecharger la carte",
      "cta.subscribe": "S'inscrire",
      "cta.sendGift": "Offrir un bon cadeau",
      "cta.planEvent": "Preparer un evenement",
      "cta.exploreRestaurant": "Explorer le restaurant",
      "cta.meetChef": "Rencontrer le chef",
      "footer.tagline":
        "Restaurant gastronomique a Paris. Une experience sensorielle signee Chef Adrien Lemaire.",
      "footer.addressTitle": "Adresse",
      "footer.hoursTitle": "Horaires",
      "footer.linksTitle": "Liens",
      "footer.followTitle": "Suivre",
      "footer.hoursWeek": "Mar - Ven : 12h00 - 14h00 / 19h00 - 22h00",
      "footer.hoursWeekend": "Sam - Dim : 12h00 - 14h30 / 19h00 - 22h30",
      "meta.index.title": "La Maison du Chef - Restaurant gastronomique a Paris",
      "meta.index.description":
        "Decouvrez une table gastronomique d'exception. Cuisine de saison, experience immersive, reservation en ligne.",
      "hero.eyebrow": "Experience gastronomique",
      "hero.title": "La Maison du Chef, l'art du gout sublime",
      "hero.subtitle":
        "Une adresse confidentielle ou chaque detail celebre le produit, le geste et l'emotion.",
      "hero.ctaPrimary": "Reserver",
      "hero.ctaSecondary": "Voir la carte",
      "signature.title": "Signature du chef",
      "signature.quote":
        "\"Chaque assiette est un dialogue entre la saison et le savoir-faire.\"",
      "signature.name": "Chef Adrien Lemaire",
      "about.title": "Une maison intimiste, un service d'exception",
      "about.text":
        "18 couverts, une brigade passionnee et une cuisine ouverte sur le verger francais. Vivez un rituel gastronomique a votre rythme.",
      "stats.seats": "Couverts par service",
      "stats.services": "Services signatures",
      "stats.rating": "Note moyenne",
      "tasting.badge": "Menu degustation",
      "tasting.title": "Menu degustation signature",
      "tasting.text":
        "Sept services inspires par le marche, accord mets et vins sur-mesure, option sans allergenes.",
      "tasting.note": "Disponible tous les soirs et le samedi midi.",
      "testimonials.title": "Ils parlent de nous",
      "testimonials.subtitle": "Avis certifies, note moyenne 4,9/5",
      "testimonial.1":
        "Une precision rare, un service fluide. La meilleure experience gastronomique de l'annee.",
      "testimonial.1.author": "Claire D.",
      "testimonial.2":
        "Chaque plat raconte une histoire. Accords vins remarquables.",
      "testimonial.2.author": "Julien M.",
      "testimonial.3":
        "Atmosphere feutree, equipe attentive, cuisine lumineuse.",
      "testimonial.3.author": "Nina P.",
      "gallery.preview.title": "Apercu de la galerie",
      "gallery.preview.text":
        "Plats signatures, salle feutree, instants d'exception.",
      "quick.title": "Acces rapides",
      "quick.text": "Tout ce qu'il faut pour planifier votre soiree.",
      "events.title": "Evenements & menus speciaux",
      "events.text":
        "Diners a 4 mains, soirees accords rares, menu truffe d'hiver.",
      "events.date": "Prochain rendez-vous : 21 mars",
      "newsletter.title": "Newsletter privilegiee",
      "newsletter.text":
        "Recevez les menus de saison, evenements prives et offres exclusives.",
      "gift.title": "Bon cadeau",
      "gift.text":
        "Offrez une experience gastronomique inoubliable, livraison instantanee.",
      "instagram.title": "Carnet gourmand Instagram",
      "instagram.text": "Suivez les coulisses de notre atelier culinaire.",
      "reviews.title": "Avis clients",
      "reviews.text": "Selection d'avis authentiques et verifiables.",
      "meta.restaurant.title":
        "Le Restaurant - La Maison du Chef",
      "meta.restaurant.description":
        "Histoire, philosophie culinaire et experience immersive.",
      "restaurant.hero.title": "Le restaurant",
      "restaurant.hero.text":
        "Un ecrin intimiste ou l'excellence se vit avec serenite.",
      "restaurant.history.title": "Histoire",
      "restaurant.history.text":
        "Une maison de maitre du XIXe siecle transformee en table gastronomique.",
      "restaurant.philosophy.title": "Philosophie culinaire",
      "restaurant.philosophy.text":
        "Respect du produit, cuisson precise, sauce signature et vegetal au coeur de l'assiette.",
      "restaurant.sourcing.title": "Produits & sourcing",
      "restaurant.sourcing.text":
        "Producteurs francais, maraichage bio, poisson sauvage et epices rares.",
      "restaurant.ambience.title": "Ambiance & experience",
      "restaurant.ambience.text":
        "Lumiere tamisee, vaisselle artisanale, service choregraphie.",
      "restaurant.experience.title": "L'experience Maison",
      "restaurant.experience.item1": "Cuisine ouverte et chef accessible",
      "restaurant.experience.item2": "Cadence personnalisee pour chaque table",
      "restaurant.experience.item3": "Accords mets & vins sur-mesure",
      "meta.chef.title": "Le Chef - La Maison du Chef",
      "meta.chef.description": "Bio, parcours et vision gastronomique.",
      "chef.hero.title": "Le Chef",
      "chef.hero.text":
        "Un parcours international, une signature francaise.",
      "chef.bio.title": "Biographie",
      "chef.bio.text":
        "Forme par les plus grandes maisons, le Chef Adrien Lemaire sublime la saison.",
      "chef.career.title": "Parcours",
      "chef.career.text":
        "Trois etoiles au Japon, residencies nordiques, retour a Paris en 2019.",
      "chef.awards.title": "Recompenses",
      "chef.awards.item1": "1 etoile Michelin (2022)",
      "chef.awards.item2": "Gault & Millau 16/20",
      "chef.awards.item3": "Meilleure carte des vins 2024",
      "chef.vision.title": "Vision gastronomique",
      "chef.vision.text":
        "Allier technicite, emotion et durabilite pour une cuisine sincere.",
      "meta.menu.title": "La Carte - La Maison du Chef",
      "meta.menu.description":
        "Menus degustation, carte saisonniere et accords mets & vins.",
      "menu.hero.title": "La carte & les menus",
      "menu.hero.text":
        "Une partition culinaire qui evolue au rythme des saisons.",
      "menu.updatedLabel": "Mise a jour",
      "menu.note":
        "Cartes et tarifs modulables via JSON pour une mise a jour rapide.",
      "menu.pairing.title": "Accords mets & vins",
      "menu.pairing.text":
        "Selection de crus rares, decouverte du sommelier, option sans alcool.",
      "meta.reservation.title": "Reservation - La Maison du Chef",
      "meta.reservation.description":
        "Reservez en ligne votre table gastronomique.",
      "reservation.hero.title": "Reservation",
      "reservation.hero.text":
        "Choisissez votre moment, indiquez vos preferences, nous nous occupons du reste.",
      "reservation.form.title": "Reservez en 30 secondes",
      "reservation.policy.title": "Politique",
      "reservation.policy.text":
        "Confirmation immediate, annulation gratuite jusqu'a 24h avant.",
      "reservation.confirmation":
        "Merci {name}, votre reservation pour {guests} personnes le {date} a {time} est pre-enregistree.",
      "reservation.guestFallback": "Invite",
      "reservation.api.title": "Integrations",
      "reservation.api.text":
        "Connexion possible a Zenchef, TheFork ou Resy via API.",
      "form.name": "Nom complet",
      "form.email": "Email",
      "form.phone": "Telephone",
      "form.date": "Date",
      "form.time": "Heure",
      "form.guests": "Convives",
      "form.allergies": "Allergies ou demandes",
      "form.message": "Message",
      "form.newsletterPlaceholder": "Votre email professionnel",
      "form.reserveSubmit": "Confirmer ma reservation",
      "form.newsletterSubmit": "S'inscrire",
      "form.newsletterNote": "RGPD friendly - pas de spam.",
      "meta.gallery.title": "Galerie - La Maison du Chef",
      "meta.gallery.description":
        "Plats signatures, salle et experiences.",
      "gallery.hero.title": "Galerie",
      "gallery.hero.text":
        "Un regard sur nos creations et l'ambiance de la maison.",
      "gallery.section.plats": "Plats signatures",
      "gallery.section.salle": "La salle",
      "gallery.section.experience": "L'experience",
      "meta.contact.title": "Contact - La Maison du Chef",
      "meta.contact.description":
        "Coordonnees, horaires, acces et parking.",
      "contact.hero.title": "Contact",
      "contact.hero.text":
        "Nous sommes a votre disposition pour toute demande particuliere.",
      "contact.address.title": "Adresse",
      "contact.address.text": "18 rue des Oliviers, 75003 Paris",
      "contact.phone.title": "Telephone",
      "contact.email.title": "Email",
      "contact.hours.title": "Horaires",
      "contact.access.title": "Acces",
      "contact.access.text":
        "Metro Arts-et-Metiers (L3, L11). 2 min a pied.",
      "contact.parking.title": "Parking",
      "contact.parking.text":
        "Parking couvert Indigo, 4 rue Saint-Martin.",
      "meta.legal.title": "Mentions legales - La Maison du Chef",
      "meta.legal.description":
        "Informations legales et politique de confidentialite.",
      "legal.hero.title": "Mentions legales & RGPD",
      "legal.hero.text":
        "Informations editeur, hebergeur et traitement des donnees.",
      "legal.editor.title": "Editeur du site",
      "legal.editor.text":
        "La Maison du Chef, 18 rue des Oliviers, 75003 Paris.",
      "legal.host.title": "Hebergement",
      "legal.host.text":
        "Heberge par Vercel, 340 S Lemon Ave #4133, Walnut, CA.",
      "legal.rgpd.title": "Donnees personnelles",
      "legal.rgpd.text":
        "Vos donnees sont utilisees uniquement pour les reservations et la newsletter.",
      "legal.cookies.title": "Cookies",
      "legal.cookies.text":
        "Cookies fonctionnels et mesure d'audience anonymisee.",
      "legal.contact.title": "Contact RGPD",
      "legal.contact.text": "rgpd@lamaisonduchef.fr",
      "menu.loadError": "Impossible de charger le menu. Veuillez reessayer.",
      "image.heroAlt": "Table gastronomique elegante",
      "image.diningAlt": "Salle du restaurant",
      "image.dishAlt": "Assiette signature",
      "image.galleryDessertAlt": "Dessert signature",
      "image.galleryRoomAlt": "Salle principale",
      "image.galleryFishAlt": "Poisson de saison",
      "image.galleryServiceAlt": "Service en salle",
      "image.galleryAmuseAlt": "Amuse-bouche",
      "image.galleryCocktailAlt": "Cocktail d'accueil",
      "image.eventAlt": "Table d'exception",
      "image.giftAlt": "Bon cadeau",
      "image.instagramAlt1": "Assiette moderne",
      "image.instagramAlt2": "Restaurant de nuit",
      "image.instagramAlt3": "Details culinaires",
      "image.restaurantHeroAlt": "Salle intimiste",
      "image.historyAlt": "Facade historique",
      "image.philosophyAlt": "Cuisine de saison",
      "image.sourcingAlt": "Produits frais",
      "image.ambienceAlt": "Ambiance feutree",
      "image.chefHeroAlt": "Portrait du chef",
      "image.chefKitchenAlt": "Chef en cuisine",
      "image.chefCareerAlt": "Parcours du chef",
      "image.chefAwardsAlt": "Recompenses",
      "image.chefVisionAlt": "Vision gastronomique",
      "image.menuHeroAlt": "Menu degustation",
      "image.reservationAlt": "Table reservee",
      "image.galleryDetailsAlt": "Details culinaires",
      "image.galleryWelcomeAlt": "Accueil personnalise",
      "image.galleryPairingAlt": "Accords mets et vins"
    },
    en: {
      "ui.skipToContent": "Skip to content",
      "ui.menu": "Menu",
      "ui.themeToggle": "Toggle light/dark mode",
      "ui.themeShort": "Theme",
      "ui.languageToggle": "Switch language",
      "ui.close": "Close",
      "ui.readMore": "Learn more",
      "nav.home": "Home",
      "nav.restaurant": "The Restaurant",
      "nav.chef": "The Chef",
      "nav.menu": "Menus",
      "nav.reservation": "Reservations",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "nav.legal": "Legal notice",
      "cta.reserve": "Book now",
      "cta.discoverMenu": "Discover the menu",
      "cta.viewGallery": "View gallery",
      "cta.learnMore": "Learn more",
      "cta.contact": "Contact us",
      "cta.bookTable": "Book a table",
      "cta.seeMenus": "See menus",
      "cta.downloadMenu": "Download menu",
      "cta.subscribe": "Subscribe",
      "cta.sendGift": "Send a gift card",
      "cta.planEvent": "Plan an event",
      "cta.exploreRestaurant": "Explore the restaurant",
      "cta.meetChef": "Meet the chef",
      "footer.tagline":
        "Fine dining in Paris. A sensory experience by Chef Adrien Lemaire.",
      "footer.addressTitle": "Address",
      "footer.hoursTitle": "Hours",
      "footer.linksTitle": "Links",
      "footer.followTitle": "Follow",
      "footer.hoursWeek": "Tue - Fri: 12:00 - 14:00 / 19:00 - 22:00",
      "footer.hoursWeekend": "Sat - Sun: 12:00 - 14:30 / 19:00 - 22:30",
      "meta.index.title": "La Maison du Chef - Fine Dining in Paris",
      "meta.index.description":
        "Discover a refined dining destination. Seasonal cuisine, immersive experience, online booking.",
      "hero.eyebrow": "Gastronomic experience",
      "hero.title": "La Maison du Chef, the art of elevated taste",
      "hero.subtitle":
        "A confidential address where every detail celebrates the ingredient, the gesture and emotion.",
      "hero.ctaPrimary": "Book now",
      "hero.ctaSecondary": "See the menu",
      "signature.title": "Chef's signature",
      "signature.quote":
        "\"Each plate is a dialogue between the season and craftsmanship.\"",
      "signature.name": "Chef Adrien Lemaire",
      "about.title": "An intimate house, exceptional service",
      "about.text":
        "18 seats, a passionate brigade and an open kitchen focused on French terroir.",
      "stats.seats": "Seats per service",
      "stats.services": "Signature courses",
      "stats.rating": "Average rating",
      "tasting.badge": "Tasting menu",
      "tasting.title": "Signature tasting menu",
      "tasting.text":
        "Seven courses inspired by the market, custom wine pairing, allergen-free option.",
      "tasting.note": "Available every evening and Saturday lunch.",
      "testimonials.title": "Guest voices",
      "testimonials.subtitle": "Certified reviews, 4.9/5 average",
      "testimonial.1":
        "Rare precision and a seamless service. The best gastronomic experience this year.",
      "testimonial.1.author": "Claire D.",
      "testimonial.2":
        "Every plate tells a story. Outstanding wine pairings.",
      "testimonial.2.author": "Julien M.",
      "testimonial.3":
        "Soft lighting, attentive team, luminous cuisine.",
      "testimonial.3.author": "Nina P.",
      "gallery.preview.title": "Gallery preview",
      "gallery.preview.text": "Signature dishes, intimate room, special moments.",
      "quick.title": "Quick access",
      "quick.text": "Everything you need to plan your evening.",
      "events.title": "Events & special menus",
      "events.text":
        "Four-hands dinners, rare pairings, winter truffle menu.",
      "events.date": "Next event: March 21",
      "newsletter.title": "Private newsletter",
      "newsletter.text":
        "Seasonal menus, private events and exclusive offers.",
      "gift.title": "Gift card",
      "gift.text":
        "Offer an unforgettable gastronomic experience, instant delivery.",
      "instagram.title": "Instagram journal",
      "instagram.text": "Follow the scenes of our culinary atelier.",
      "reviews.title": "Client reviews",
      "reviews.text": "A curated selection of verified feedback.",
      "meta.restaurant.title": "The Restaurant - La Maison du Chef",
      "meta.restaurant.description": "Story, culinary philosophy and immersion.",
      "restaurant.hero.title": "The restaurant",
      "restaurant.hero.text":
        "An intimate jewel box where excellence feels effortless.",
      "restaurant.history.title": "History",
      "restaurant.history.text":
        "A 19th century townhouse transformed into a fine dining home.",
      "restaurant.philosophy.title": "Culinary philosophy",
      "restaurant.philosophy.text":
        "Respect for ingredients, precise cuisson, signature sauces and vegetal focus.",
      "restaurant.sourcing.title": "Products & sourcing",
      "restaurant.sourcing.text":
        "French growers, organic market gardens, wild fish and rare spices.",
      "restaurant.ambience.title": "Ambience & experience",
      "restaurant.ambience.text":
        "Soft lighting, artisan tableware, choreographed service.",
      "restaurant.experience.title": "The Maison experience",
      "restaurant.experience.item1": "Open kitchen and accessible chef",
      "restaurant.experience.item2": "Personalized pace for every table",
      "restaurant.experience.item3": "Tailor-made food and wine pairings",
      "meta.chef.title": "The Chef - La Maison du Chef",
      "meta.chef.description": "Bio, career and gastronomic vision.",
      "chef.hero.title": "The Chef",
      "chef.hero.text":
        "An international career with a French signature.",
      "chef.bio.title": "Biography",
      "chef.bio.text":
        "Trained in the finest houses, Chef Adrien Lemaire elevates the season.",
      "chef.career.title": "Career",
      "chef.career.text":
        "Three-star experience in Japan, Nordic residencies, return to Paris in 2019.",
      "chef.awards.title": "Awards",
      "chef.awards.item1": "1 Michelin star (2022)",
      "chef.awards.item2": "Gault & Millau 16/20",
      "chef.awards.item3": "Best wine list 2024",
      "chef.vision.title": "Gastronomic vision",
      "chef.vision.text":
        "Combining technique, emotion and sustainability for sincere cuisine.",
      "meta.menu.title": "Menus - La Maison du Chef",
      "meta.menu.description":
        "Tasting menu, seasonal menu and food & wine pairings.",
      "menu.hero.title": "Menus",
      "menu.hero.text": "A culinary score that follows the seasons.",
      "menu.updatedLabel": "Updated",
      "menu.note": "Menus and pricing are editable via JSON for fast updates.",
      "menu.pairing.title": "Food & wine pairings",
      "menu.pairing.text":
        "Rare cuvees, sommelier discoveries, alcohol-free option.",
      "meta.reservation.title": "Reservations - La Maison du Chef",
      "meta.reservation.description": "Book your table online.",
      "reservation.hero.title": "Reservations",
      "reservation.hero.text":
        "Choose your moment, share preferences, we'll take care of the rest.",
      "reservation.form.title": "Book in 30 seconds",
      "reservation.policy.title": "Policy",
      "reservation.policy.text":
        "Instant confirmation, free cancellation up to 24h before.",
      "reservation.confirmation":
        "Thank you {name}, your reservation for {guests} guests on {date} at {time} is pre-registered.",
      "reservation.guestFallback": "Guest",
      "reservation.api.title": "Integrations",
      "reservation.api.text":
        "API-ready for Zenchef, TheFork or Resy.",
      "form.name": "Full name",
      "form.email": "Email",
      "form.phone": "Phone",
      "form.date": "Date",
      "form.time": "Time",
      "form.guests": "Guests",
      "form.allergies": "Allergies or requests",
      "form.message": "Message",
      "form.newsletterPlaceholder": "Your business email",
      "form.reserveSubmit": "Confirm my booking",
      "form.newsletterSubmit": "Subscribe",
      "form.newsletterNote": "GDPR friendly - no spam.",
      "meta.gallery.title": "Gallery - La Maison du Chef",
      "meta.gallery.description": "Signature dishes, dining room and moments.",
      "gallery.hero.title": "Gallery",
      "gallery.hero.text": "A glimpse of our creations and atmosphere.",
      "gallery.section.plats": "Signature dishes",
      "gallery.section.salle": "The dining room",
      "gallery.section.experience": "The experience",
      "meta.contact.title": "Contact - La Maison du Chef",
      "meta.contact.description": "Address, hours, access and parking.",
      "contact.hero.title": "Contact",
      "contact.hero.text":
        "We are at your disposal for any special request.",
      "contact.address.title": "Address",
      "contact.address.text": "18 rue des Oliviers, 75003 Paris",
      "contact.phone.title": "Phone",
      "contact.email.title": "Email",
      "contact.hours.title": "Hours",
      "contact.access.title": "Access",
      "contact.access.text": "Metro Arts-et-Metiers (L3, L11). 2 min walk.",
      "contact.parking.title": "Parking",
      "contact.parking.text": "Indigo covered parking, 4 rue Saint-Martin.",
      "meta.legal.title": "Legal notice - La Maison du Chef",
      "meta.legal.description": "Legal information and privacy policy.",
      "legal.hero.title": "Legal notice & GDPR",
      "legal.hero.text": "Editor, host and data processing details.",
      "legal.editor.title": "Website editor",
      "legal.editor.text": "La Maison du Chef, 18 rue des Oliviers, 75003 Paris.",
      "legal.host.title": "Hosting",
      "legal.host.text": "Hosted by Vercel, 340 S Lemon Ave #4133, Walnut, CA.",
      "legal.rgpd.title": "Personal data",
      "legal.rgpd.text":
        "Your data is used only for reservations and newsletter.",
      "legal.cookies.title": "Cookies",
      "legal.cookies.text": "Functional cookies and anonymized analytics.",
      "legal.contact.title": "GDPR contact",
      "legal.contact.text": "rgpd@lamaisonduchef.fr",
      "menu.loadError": "Unable to load the menu. Please try again.",
      "image.heroAlt": "Elegant dining table",
      "image.diningAlt": "Dining room",
      "image.dishAlt": "Signature dish",
      "image.galleryDessertAlt": "Signature dessert",
      "image.galleryRoomAlt": "Main dining room",
      "image.galleryFishAlt": "Seasonal fish",
      "image.galleryServiceAlt": "Dining service",
      "image.galleryAmuseAlt": "Amuse-bouche",
      "image.galleryCocktailAlt": "Welcome cocktail",
      "image.eventAlt": "Exceptional table",
      "image.giftAlt": "Gift card",
      "image.instagramAlt1": "Modern dish",
      "image.instagramAlt2": "Restaurant at night",
      "image.instagramAlt3": "Culinary details",
      "image.restaurantHeroAlt": "Intimate dining room",
      "image.historyAlt": "Historic facade",
      "image.philosophyAlt": "Seasonal cuisine",
      "image.sourcingAlt": "Fresh produce",
      "image.ambienceAlt": "Soft ambience",
      "image.chefHeroAlt": "Chef portrait",
      "image.chefKitchenAlt": "Chef in the kitchen",
      "image.chefCareerAlt": "Chef career",
      "image.chefAwardsAlt": "Awards",
      "image.chefVisionAlt": "Gastronomic vision",
      "image.menuHeroAlt": "Tasting menu",
      "image.reservationAlt": "Reserved table",
      "image.galleryDetailsAlt": "Culinary details",
      "image.galleryWelcomeAlt": "Personalized welcome",
      "image.galleryPairingAlt": "Food and wine pairing"
    }
  };

  const t = (lang, key) => translations[lang]?.[key] || translations.fr[key];

  const applyTranslations = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(lang, el.dataset.i18n);
      if (value) {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = t(lang, el.dataset.i18nHtml);
      if (value) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = t(lang, el.dataset.i18nPlaceholder);
      if (value) {
        el.setAttribute("placeholder", value);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = t(lang, el.dataset.i18nAria);
      if (value) {
        el.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = t(lang, el.dataset.i18nAlt);
      if (value) {
        el.setAttribute("alt", value);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const value = t(lang, el.dataset.i18nTitle);
      if (!value) return;
      if (el.tagName === "TITLE") {
        el.textContent = value;
      } else {
        el.setAttribute("title", value);
      }
    });

    document.querySelectorAll("[data-i18n-meta]").forEach((el) => {
      const value = t(lang, el.dataset.i18nMeta);
      if (value) {
        el.setAttribute("content", value);
      }
    });

    document.querySelectorAll("[data-i18n-value]").forEach((el) => {
      const value = t(lang, el.dataset.i18nValue);
      if (value) {
        el.setAttribute("value", value);
      }
    });
  };

  let menuData = null;
  const menuRoot = document.querySelector("[data-menu-root]");
  const menuUpdated = document.querySelector("[data-menu-updated]");
  const menuPairing = document.querySelector("[data-menu-pairing]");

  const renderMenus = (lang) => {
    if (!menuData || !menuRoot) return;
    menuRoot.innerHTML = "";
    menuData.menus.forEach((menu) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="menu-card__header">
          <h3 class="serif">${menu.name[lang]}</h3>
          <span class="menu-price">${menu.price}</span>
        </div>
        <p class="section-intro">${menu.description[lang]}</p>
        <ul class="menu-items">
          ${menu.items
            .map(
              (item) => `
                <li>
                  <strong>${item.name[lang]}</strong>
                  <span>${item.desc[lang]}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      `;
      menuRoot.appendChild(card);
    });

    if (menuUpdated && menuData.updatedAt) {
      menuUpdated.textContent = menuData.updatedAt;
    }

    if (menuPairing && menuData.pairing) {
      menuPairing.innerHTML = `
        <div class="card">
          <div class="menu-card__header">
            <h3 class="serif">${menuData.pairing.title[lang]}</h3>
            <span class="menu-price">${menuData.pairing.price}</span>
          </div>
          <p class="section-intro">${menuData.pairing.description[lang]}</p>
          <div class="pill-list">
            ${menuData.pairing.options
              .map((option) => `<span class="pill">${option[lang]}</span>`)
              .join("")}
          </div>
        </div>
      `;
    }
  };

  const loadMenus = async () => {
    if (!menuRoot) return;
    try {
      const response = await fetch("data/menus.json");
      menuData = await response.json();
      renderMenus(root.getAttribute("data-lang") || "fr");
    } catch (error) {
      menuRoot.textContent = t(root.getAttribute("data-lang") || "fr", "menu.loadError");
    }
  };

  const langToggle = document.querySelector("[data-lang-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");

  const setLanguage = (lang) => {
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
    storage.setItem("lang", lang);
    applyTranslations(lang);
    updateLangToggle(lang);
    renderMenus(lang);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", t(lang, "ui.themeToggle"));
      themeToggle.textContent = t(lang, "ui.themeShort");
    }
  };

  const updateLangToggle = (lang) => {
    if (!langToggle) return;
    const next = lang === "fr" ? "en" : "fr";
    langToggle.textContent = next.toUpperCase();
    langToggle.setAttribute("aria-label", t(lang, "ui.languageToggle"));
  };

  const storedLang = storage.getItem("lang") || root.getAttribute("lang") || "fr";
  setLanguage(storedLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-lang") || "fr";
      setLanguage(current === "fr" ? "en" : "fr");
    });
  }

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    storage.setItem("theme", theme);
    if (themeToggle) {
      const lang = root.dataset.lang || "fr";
      themeToggle.setAttribute("aria-label", t(lang, "ui.themeToggle"));
      themeToggle.textContent = t(lang, "ui.themeShort");
    }
  };

  const storedTheme =
    storage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          nav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  const animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && animated.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animated.forEach((el) => observer.observe(el));
  } else {
    animated.forEach((el) => el.classList.add("is-visible"));
  }

  const lightbox = document.querySelector("[data-lightbox-root]");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector("p");
    const closeButton = lightbox.querySelector("button");

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
    };

    document.querySelectorAll("[data-lightbox]").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const src = item.getAttribute("href");
        const lang = root.getAttribute("data-lang") || "fr";
        const caption =
          (lang === "en" ? item.dataset.captionEn : item.dataset.captionFr) ||
          item.dataset.caption ||
          "";
        if (lightboxImage) lightboxImage.src = src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    if (closeButton) {
      closeButton.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  const reservationForm = document.querySelector("[data-reservation-form]");
  const confirmation = document.querySelector("[data-reservation-confirmation]");
  if (reservationForm && confirmation) {
    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(reservationForm);
      const lang = root.getAttribute("data-lang") || "fr";
      const values = {
        name: formData.get("name") || t(lang, "reservation.guestFallback"),
        guests: formData.get("guests") || "-",
        date: formData.get("date") || "-",
        time: formData.get("time") || "-",
      };

      const template = t(lang, "reservation.confirmation");
      const message = template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
      confirmation.textContent = message;
      confirmation.hidden = false;
      confirmation.focus({ preventScroll: true });
    });
  }

  loadMenus();
})();
