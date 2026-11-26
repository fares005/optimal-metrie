import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, NavLink, useParams, useLocation} from 'react-router-dom';
import {ArrowRight,ChevronDown,ChevronLeft,ChevronRight,Menu,X,Home as HomeIcon,Microscope,Thermometer,ShieldCheck,Wind,Mail,Phone,MapPin,Search} from 'lucide-react';
import './style.css';
import {productCategories, catalogProducts} from './catalogData.js';
import {productDetails} from './productDetails.js';
import hero from './assets/hero-product.png';
import humidityIndustrial from './assets/humidity-industrial.png';
import brandLogo from './assets/optimal-metrie-logo-blue.png';
import testoLogo from './assets/testo-logo.png';
import mnLogo from './assets/mn-logo.png';
import heroDehumidification from './assets/hero-dehumidification.png';
import heroMeasure from './assets/hero-measure.png';
import heroThermography from './assets/hero-thermography.png';
import heroLaboratory from './assets/hero-laboratory.jpg';
import heroGeneralLaboratory from './assets/hero-general-laboratory.jpg';
import heroSafety from './assets/hero-safety.png';
import pageProducts from './assets/page-products.png';
import pageDehumidification from './assets/page-dehumidification.png';
import pageSectors from './assets/page-sectors.png';
import pageAbout from './assets/page-about.png';
import pageContact from './assets/page-contact.png';
import delice from './assets/references/delice.png'; import gipa from './assets/references/gipa.png'; import poulina from './assets/references/poulina.png'; import thera from './assets/references/thera-laboratoires.png'; import dick from './assets/references/dick.png'; import saiph from './assets/references/saiph.jpg';

import catImg0 from './assets/catalogue/analyseur/product-001.png';
import catImg1 from './assets/catalogue/analyseur/product-002.png';
import catImg2 from './assets/catalogue/analyseur/product-003.png';
import catImg3 from './assets/catalogue/analyseur/product-004.png';
import catImg4 from './assets/catalogue/anemometre/product-001.png';
import catImg5 from './assets/catalogue/anemometre/product-002.png';
import catImg6 from './assets/catalogue/anemometre/product-003.png';
import catImg7 from './assets/catalogue/anemometre/product-004.png';
import catImg8 from './assets/catalogue/anemometre/product-005.png';
import catImg9 from './assets/catalogue/anemometre/product-006.png';
import catImg10 from './assets/catalogue/anemometre/product-007.png';
import catImg11 from './assets/catalogue/anemometre/product-008.png';
import catImg12 from './assets/catalogue/anemometre/product-009.png';
import catImg13 from './assets/catalogue/camera/product-001.png';
import catImg14 from './assets/catalogue/camera/product-002.png';
import catImg15 from './assets/catalogue/camera/product-003.png';
import catImg16 from './assets/catalogue/camera/product-004.png';
import catImg17 from './assets/catalogue/camera/product-005.png';
import catImg18 from './assets/catalogue/electric/product-001.png';
import catImg19 from './assets/catalogue/electric/product-002.png';
import catImg20 from './assets/catalogue/electric/product-003.png';
import catImg21 from './assets/catalogue/electric/product-004.png';
import catImg22 from './assets/catalogue/electric/product-005.png';
import catImg23 from './assets/catalogue/froid/product-001.png';
import catImg24 from './assets/catalogue/froid/product-002.png';
import catImg25 from './assets/catalogue/froid/product-003.png';
import catImg26 from './assets/catalogue/froid/product-004.png';
import catImg27 from './assets/catalogue/froid/product-005.png';
import catImg28 from './assets/catalogue/froid/product-006.png';
import catImg29 from './assets/catalogue/hygrometre/product-001.png';
import catImg30 from './assets/catalogue/hygrometre/product-002.png';
import catImg31 from './assets/catalogue/hygrometre/product-003.png';
import catImg32 from './assets/catalogue/hygrometre/product-004.png';
import catImg33 from './assets/catalogue/hygrometre/product-005.png';
import catImg34 from './assets/catalogue/hygrometre/product-006.png';
import catImg35 from './assets/catalogue/hygrometre/product-007.png';
import catImg36 from './assets/catalogue/hygrometre/product-008.png';
import catImg37 from './assets/catalogue/hygrometre/product-009.png';
import catImg38 from './assets/catalogue/hygrometre/product-010.png';
import catImg39 from './assets/catalogue/hygrometre/product-011.png';
import catImg40 from './assets/catalogue/hygrometre/product-012.png';
import catImg41 from './assets/catalogue/hygrometre/product-013.png';
import catImg42 from './assets/catalogue/hygrometre/product-014.png';
import catImg43 from './assets/catalogue/hygrometre/product-015.png';
import catImg44 from './assets/catalogue/hygrometre/product-016.png';
import catImg45 from './assets/catalogue/pH/product-001.png';
import catImg46 from './assets/catalogue/pH/product-002.png';
import catImg47 from './assets/catalogue/pH/product-003.png';
import catImg48 from './assets/catalogue/pression/product-001.png';
import catImg49 from './assets/catalogue/pression/product-002.png';
import catImg50 from './assets/catalogue/pression/product-003.png';
import catImg51 from './assets/catalogue/tachymetre/product-001.png';
import catImg52 from './assets/catalogue/tachymetre/product-002.png';
import catImg53 from './assets/catalogue/tachymetre/product-003.png';
import catImg54 from './assets/catalogue/tachymetre/product-004.png';
import catImg55 from './assets/catalogue/tachymetre/product-005.png';
import catImg56 from './assets/catalogue/tachymetre/product-006.png';
import catImg57 from './assets/catalogue/tachymetre/product-007.png';
import catImg58 from './assets/catalogue/tachymetre/product-008.png';
import catImg59 from './assets/catalogue/tachymetre/product-009.png';
import catImg60 from './assets/catalogue/tachymetre/product-010.png';
import catImg61 from './assets/catalogue/tachymetre/product-011.png';
import catImg62 from './assets/catalogue/tachymetre/product-012.png';
import catImg63 from './assets/catalogue/tachymetre/product-013.png';
import catImg64 from './assets/catalogue/tachymetre/product-014.png';
import catImg65 from './assets/catalogue/tachymetre/product-015.png';
import catImg66 from './assets/catalogue/tachymetre/product-016.png';
import catImg67 from './assets/catalogue/thermometre/product-001.png';
import catImg68 from './assets/catalogue/thermometre/product-002.png';
import catImg69 from './assets/catalogue/thermometre/product-003.png';
import catImg70 from './assets/catalogue/thermometre/product-004.png';
import catImg71 from './assets/catalogue/thermometre/product-005.png';
import catImg72 from './assets/catalogue/thermometre/product-006.png';
import catImg73 from './assets/catalogue/thermometre/product-007.png';
import catImg74 from './assets/catalogue/thermometre/product-008.png';
import catImg75 from './assets/catalogue/thermometre/product-009.png';
import catImg76 from './assets/catalogue/thermometre/product-010.png';
import catImg77 from './assets/catalogue/thermometre/product-011.png';
import catImg78 from './assets/catalogue/thermometre/product-012.png';
import catImg79 from './assets/catalogue/thermometre/product-013.png';
import catImg80 from './assets/catalogue/thermometre/product-014.png';
import catImg81 from './assets/catalogue/thermometre/product-015.png';
import catImg82 from './assets/catalogue/thermometre/product-016.png';
import catImg83 from './assets/catalogue/thermometre/product-017.png';
import catImg84 from './assets/catalogue/thermometre/product-018.png';
import catImg85 from './assets/catalogue/thermometre/product-019.png';
import catImg86 from './assets/catalogue/thermometre/product-020.png';
import catImg87 from './assets/catalogue/thermometre/product-021.png';
import catImg88 from './assets/catalogue/thermometre/product-022.png';
import catImg89 from './assets/catalogue/thermometre/product-023.png';
import catImg90 from './assets/catalogue/thermometre/product-024.png';
import catImg91 from './assets/catalogue/thermometre/product-025.png';
import catImg92 from './assets/catalogue/thermometre/product-026.png';
import catImg93 from './assets/catalogue/thermometre/product-027.png';
import catImg94 from './assets/catalogue/thermometre/product-028.png';
import catImg95 from './assets/catalogue/thermometre/product-029.png';
import catImg96 from './assets/catalogue/thermometre/product-030.png';
import catImg97 from './assets/catalogue/thermometre/product-031.png';
import catImg98 from './assets/catalogue/thermometre/product-032.png';
import catImg99 from './assets/catalogue/thermometre/product-033.png';
import catImg100 from './assets/catalogue/thermometre/product-034.png';
import catImg101 from './assets/catalogue/thermometre/product-035.png';
import catImg102 from './assets/catalogue/thermometre/product-036.png';
import catImg103 from './assets/catalogue/thermometre/product-037.png';
import catImg104 from './assets/catalogue/thermometre/product-038.png';
import catImg105 from './assets/catalogue/thermometre/product-039.png';
import catImg106 from './assets/catalogue/thermometre/product-040.png';
import catImg107 from './assets/catalogue/thermometre/product-041.png';
import catImg108 from './assets/catalogue/thermometre/product-042.png';

const files={
  './assets/catalogue/analyseur/320.PNG': catImg0,
  './assets/catalogue/analyseur/330-ll.PNG': catImg1,
  './assets/catalogue/analyseur/340.PNG': catImg2,
  './assets/catalogue/analyseur/350.PNG': catImg3,
  './assets/catalogue/anemometre/405.PNG': catImg4,
  './assets/catalogue/anemometre/410-1.PNG': catImg5,
  './assets/catalogue/anemometre/410I.PNG': catImg6,
  './assets/catalogue/anemometre/416.PNG': catImg7,
  './assets/catalogue/anemometre/420.PNG': catImg8,
  './assets/catalogue/anemometre/425.PNG': catImg9,
  './assets/catalogue/anemometre/435-4.PNG': catImg10,
  './assets/catalogue/anemometre/480.PNG': catImg11,
  './assets/catalogue/anemometre/sonde.PNG': catImg12,
  './assets/catalogue/camera/865.PNG': catImg13,
  './assets/catalogue/camera/868.PNG': catImg14,
  './assets/catalogue/camera/871.PNG': catImg15,
  './assets/catalogue/camera/883.PNG': catImg16,
  './assets/catalogue/camera/890.PNG': catImg17,
  './assets/catalogue/electric/745.PNG': catImg18,
  './assets/catalogue/electric/750.PNG': catImg19,
  './assets/catalogue/electric/755.PNG': catImg20,
  './assets/catalogue/electric/760.PNG': catImg21,
  './assets/catalogue/electric/770.PNG': catImg22,
  './assets/catalogue/froid/316-4.PNG': catImg23,
  './assets/catalogue/froid/549.PNG': catImg24,
  './assets/catalogue/froid/550.PNG': catImg25,
  './assets/catalogue/froid/552.PNG': catImg26,
  './assets/catalogue/froid/557.PNG': catImg27,
  './assets/catalogue/froid/570.PNG': catImg28,
  './assets/catalogue/hygrometre/174h.PNG': catImg29,
  './assets/catalogue/hygrometre/175 h1.PNG': catImg30,
  './assets/catalogue/hygrometre/176 h1.PNG': catImg31,
  './assets/catalogue/hygrometre/176 p1.PNG': catImg32,
  './assets/catalogue/hygrometre/176h2.PNG': catImg33,
  './assets/catalogue/hygrometre/184 g1.PNG': catImg34,
  './assets/catalogue/hygrometre/184 h1.PNG': catImg35,
  './assets/catalogue/hygrometre/400.PNG': catImg36,
  './assets/catalogue/hygrometre/605I.PNG': catImg37,
  './assets/catalogue/hygrometre/606.PNG': catImg38,
  './assets/catalogue/hygrometre/608-h1.PNG': catImg39,
  './assets/catalogue/hygrometre/608-h2.PNG': catImg40,
  './assets/catalogue/hygrometre/610.PNG': catImg41,
  './assets/catalogue/hygrometre/622.PNG': catImg42,
  './assets/catalogue/hygrometre/623.PNG': catImg43,
  './assets/catalogue/hygrometre/625.png': catImg44,
  './assets/catalogue/pH/205.PNG': catImg45,
  './assets/catalogue/pH/206.PNG': catImg46,
  './assets/catalogue/pH/270.PNG': catImg47,
  './assets/catalogue/pression/511.PNG': catImg48,
  './assets/catalogue/pression/512.PNG': catImg49,
  './assets/catalogue/pression/526.PNG': catImg50,
  './assets/catalogue/tachymetre/460.PNG': catImg51,
  './assets/catalogue/tachymetre/465.PNG': catImg52,
  './assets/catalogue/tachymetre/470.PNG': catImg53,
  './assets/catalogue/tachymetre/476.PNG': catImg54,
  './assets/catalogue/tachymetre/477.PNG': catImg55,
  './assets/catalogue/tachymetre/540.PNG': catImg56,
  './assets/catalogue/tachymetre/549.PNG': catImg57,
  './assets/catalogue/tachymetre/552.PNG': catImg58,
  './assets/catalogue/tachymetre/570.PNG': catImg59,
  './assets/catalogue/tachymetre/745.PNG': catImg60,
  './assets/catalogue/tachymetre/750 3.PNG': catImg61,
  './assets/catalogue/tachymetre/755.PNG': catImg62,
  './assets/catalogue/tachymetre/760 3.PNG': catImg63,
  './assets/catalogue/tachymetre/770 3.PNG': catImg64,
  './assets/catalogue/tachymetre/815.PNG': catImg65,
  './assets/catalogue/tachymetre/816 1.PNG': catImg66,
  './assets/catalogue/thermometre/103.PNG': catImg67,
  './assets/catalogue/thermometre/104 -ir.PNG': catImg68,
  './assets/catalogue/thermometre/104.PNG': catImg69,
  './assets/catalogue/thermometre/105.PNG': catImg70,
  './assets/catalogue/thermometre/106.PNG': catImg71,
  './assets/catalogue/thermometre/108.PNG': catImg72,
  './assets/catalogue/thermometre/112.PNG': catImg73,
  './assets/catalogue/thermometre/115 ip.PNG': catImg74,
  './assets/catalogue/thermometre/150  t1.PNG': catImg75,
  './assets/catalogue/thermometre/150 din2.PNG': catImg76,
  './assets/catalogue/thermometre/150 tuc.PNG': catImg77,
  './assets/catalogue/thermometre/174 h.PNG': catImg78,
  './assets/catalogue/thermometre/174 t.PNG': catImg79,
  './assets/catalogue/thermometre/175 t1.PNG': catImg80,
  './assets/catalogue/thermometre/175 t2.PNG': catImg81,
  './assets/catalogue/thermometre/175 t3.PNG': catImg82,
  './assets/catalogue/thermometre/176 t1.PNG': catImg83,
  './assets/catalogue/thermometre/176 t3.PNG': catImg84,
  './assets/catalogue/thermometre/176 t4.PNG': catImg85,
  './assets/catalogue/thermometre/184 h1.PNG': catImg86,
  './assets/catalogue/thermometre/184 t1.PNG': catImg87,
  './assets/catalogue/thermometre/184 t2.PNG': catImg88,
  './assets/catalogue/thermometre/184 t3.PNG': catImg89,
  './assets/catalogue/thermometre/184 t4.PNG': catImg90,
  './assets/catalogue/thermometre/190 t1.PNG': catImg91,
  './assets/catalogue/thermometre/190 t3.PNG': catImg92,
  './assets/catalogue/thermometre/190.PNG': catImg93,
  './assets/catalogue/thermometre/191.PNG': catImg94,
  './assets/catalogue/thermometre/440.PNG': catImg95,
  './assets/catalogue/thermometre/720.PNG': catImg96,
  './assets/catalogue/thermometre/735-2.PNG': catImg97,
  './assets/catalogue/thermometre/805.PNG': catImg98,
  './assets/catalogue/thermometre/810.PNG': catImg99,
  './assets/catalogue/thermometre/830.PNG': catImg100,
  './assets/catalogue/thermometre/831.PNG': catImg101,
  './assets/catalogue/thermometre/845.PNG': catImg102,
  './assets/catalogue/thermometre/925.PNG': catImg103,
  './assets/catalogue/thermometre/autocollants.PNG': catImg104,
  './assets/catalogue/thermometre/cam#U00e9ra thermique.PNG': catImg105,
  "./assets/catalogue/thermometre/mini thermometre d'alarme.PNG": catImg106,
  './assets/catalogue/thermometre/mini thermometre.PNG': catImg107,
  './assets/catalogue/thermometre/saveris t2.PNG': catImg108
};

const dehumidifierImages = import.meta.glob('./assets/dehumidification/*.png', { eager:true, import:'default' });
const dehumImg = name => dehumidifierImages[`./assets/dehumidification/${name}.png`];
const dehumidifiers = [
 {name:'Déshumidificateur Consorb DC30', model:'DC30', slug:'consorb-dc30', group:'Professionnel', img:dehumImg('dc30'), desc:'Déshumidificateur à adsorption compact pour applications professionnelles et techniques.'},
 {name:'Déshumidificateur FLEXISORB', model:'FLEXISORB', slug:'flexisorb', group:'Industriel', img:dehumImg('flexisorb'), desc:'Solution industrielle avec récupération de chaleur intégrée pour les installations exigeantes.'},
 {name:'Déshumidificateur FRIGOSORB F-31', model:'F-31', slug:'frigosorb-f31', group:'Industriel', img:dehumImg('frigosorb-f31'), desc:'Unité robuste conçue pour le contrôle de l’humidité dans les environnements industriels.'},
 {name:'Déshumidificateur industriel TE-120 KROLL', model:'TE-120', slug:'kroll-te-120', group:'Portable & chantier', img:dehumImg('te120'), desc:'Déshumidificateur mobile haute capacité pour chantier, stockage et applications professionnelles.'},
 {name:'CONSORB CZ-Series STD / ICE', model:'CZ-Series', slug:'consorb-cz-series', group:'Industriel', img:dehumImg('consorb-cz'), desc:'Système de déshumidification industriel pour installations à fortes exigences hygrométriques.'},
 {name:'CONSORB DC-50R', model:'DC-50R', slug:'consorb-dc-50r', group:'Industriel', img:dehumImg('dc50r'), desc:'Déshumidificateur industriel compact destiné au contrôle continu de l’humidité.'},
 {name:'Déshumidificateur semi-industriel TK-30 KROLL', model:'TK-30', slug:'kroll-tk-30', group:'Portable & chantier', img:dehumImg('tk30'), desc:'Unité mobile semi-industrielle, pratique pour ateliers, locaux techniques et chantiers.'},
 {name:'Déshumidificateur semi-industriel TK-60 KROLL', model:'TK-60', slug:'kroll-tk-60', group:'Portable & chantier', img:dehumImg('tk60'), desc:'Solution mobile renforcée pour des besoins de déshumidification plus importants.'},
 {name:'Déshumidificateur industriel TE-80 KROLL', model:'TE-80', slug:'kroll-te-80', group:'Portable & chantier', img:dehumImg('te80'), desc:'Déshumidificateur professionnel mobile pour conditions de travail exigeantes.'},
 {name:'Déshumidificateur professionnel DH26', model:'DH26', slug:'dh26', group:'Portable & chantier', img:dehumImg('dh26'), desc:'Machine professionnelle mobile adaptée aux travaux de séchage et au contrôle d’humidité.'},
 {name:'Master DH 752', model:'DH 752', slug:'master-dh-752', group:'Portable & chantier', img:dehumImg('dh752'), desc:'Déshumidificateur à condensation mobile pour usages professionnels et industriels.'},
 {name:'Master DH 792', model:'DH 792', slug:'master-dh-792', group:'Portable & chantier', img:dehumImg('dh792'), desc:'Déshumidificateur à condensation haute capacité pour grands espaces et applications intensives.'},
 {name:'Déshumidificateur domestique DH712', model:'DH712', slug:'master-dh-712', group:'Domestique', img:dehumImg('dh712'), desc:'Solution compacte pour améliorer le confort hygrométrique dans les espaces intérieurs.'},
 {name:'Déshumidificateur domestique DH720', model:'DH720', slug:'master-dh-720', group:'Domestique', img:dehumImg('dh720'), desc:'Appareil domestique compact avec commandes numériques pour un usage quotidien.'},
 {name:'Déshumidificateur professionnel DH721', model:'DH721', slug:'master-dh-721', group:'Professionnel', img:dehumImg('dh721'), desc:'Unité professionnelle sur roulettes pour une utilisation flexible dans différents locaux.'}
];

const dehumidifierDetails = {
 'consorb-dc30': {brand:'Seibu Giken DST', short:"Déshydrateur à adsorption portable en acier inoxydable fonctionnant selon le principe Consorb, particulièrement adapté lorsque l’écart de teneur en humidité entre l’air de process et l’air de régénération est important.", advantages:['Roue déshydratante lavable','Batterie autorégulante','Panneau de contrôle protégé','Construction portable en acier inoxydable'], specs:[['Capacité de déshumidification (20 °C / 60 % HR)','1,1–1,5 kg/h (gamme DC-20/30)'],['Débit d’air sec','310–400 m³/h (gamme DC-20/30)'],['Technologie','Adsorption · principe Consorb']], applications:['Entrepôts et locaux techniques','Séchage d’air humide','Applications nécessitant une solution portable à adsorption'], sourceUrl:'https://www.dst-sg.com/consorb-dc-20-30-t10-t16/'},
 'flexisorb': {brand:'Seibu Giken DST', short:"Système industriel de déshumidification sur mesure conçu autour d’un rotor déshydratant. FLEXISORB peut intégrer pré-refroidissement, post-refroidissement et post-chauffage selon les exigences du procédé.", advantages:['Conception personnalisable pour l’industrie de process','Débits d’air jusqu’à 61 100 m³/h','Capacité de 19 à 300 kg/h à 20 °C / 60 % HR','Châssis en aluminium anodisé conçu pour faciliter l’hygiène'], specs:[['Capacité nominale','19–300 kg/h'],['Débit d’air sec','900–61 100 m³/h'],['Principe','Adsorption · configuration selon application']], applications:['Industrie agroalimentaire','Pharmaceutique et procédés industriels','Contrôle climatique sur mesure'], sourceUrl:'https://www.dst-sg.com/flexisorb/'},
 'frigosorb-f31': {brand:'Seibu Giken DST', short:"Déshydrateur FRIGOSORB F-31 associant adsorption et pompe à chaleur, conçu pour les applications où l’évacuation d’un flux d’air humide est difficile.", advantages:['Technologie FRIGOSORB à haute efficacité énergétique','Pas de rejet d’air humide à évacuer selon la configuration','Format compact','Adapté aux applications techniques exigeantes'], specs:[['Capacité nominale (20 °C / 60 % HR)','1,1 kg/h'],['Débit d’air sec','400 m³/h'],['Puissance compresseur','710 W'],['Consommation électrique maximale','970 W'],['Alimentation','230 V / 50 Hz'],['Poids','45 kg']], applications:['Locaux où l’évacuation d’air humide est difficile','Séchage technique','Contrôle d’humidité professionnel'], sourceUrl:'https://www.dst-sg.com/'},
 'consorb-cz-series': {brand:'Seibu Giken DST', short:"Gamme industrielle à adsorption pour les installations présentant une forte différence de teneur en humidité entre l’air de process et l’air de régénération. Les versions ICE augmentent le débit d’air sec pour les installations en recirculation.", advantages:['Excellente capacité de séchage en profondeur','Versions STD et ICE','Régénération électrique, eau chaude, vapeur ou gaz selon configuration','Conçue pour les grandes installations industrielles'], specs:[['Capacité nominale STD','22–65 kg/h'],['Capacité nominale ICE','23–69 kg/h'],['Débit d’air sec STD','3 200–8 000 m³/h'],['Débit d’air sec ICE','8 000–12 000 m³/h'],['Construction','Aluzinc']], applications:['Industrie chimique et pharmaceutique','Agroalimentaire et entrepôts','Chambres froides et patinoires'], sourceUrl:'https://www.dst-sg.com/consorb-cz-series-std-ice/'},
 'consorb-dc-50r': {brand:'Seibu Giken DST', short:"Déshydrateur à adsorption triphasé avec deux ventilateurs, destiné notamment aux installations en recirculation où l’humidité intérieure diffère fortement de celle de l’air extérieur.", advantages:['Capacité nominale 3,0 kg/h','Débit d’air sec 550 m³/h','Roue déshydratante et chauffage résistif','Pilotage de capacité 0–10 V disponible en option'], specs:[['Capacité nominale (20 °C / 60 % HR)','3,0 kg/h'],['Débit d’air sec','550 m³/h'],['Débit d’air humide','150 m³/h'],['Puissance chauffage','5,0 kW'],['Puissance totale','5,5 kW'],['Alimentation / protection','3 × 400 V / 50 Hz · 16 A'],['Poids','63 kg']], applications:['Recirculation d’air','Entrepôts et archives','Locaux techniques et industriels'], sourceUrl:'https://www.dst-sg.com/consorb-dc-50r/'},
 'kroll-tk-30': {brand:'Kroll', short:"Déshumidificateur mobile de chantier avec hygrostat intégré, dégivrage automatique par gaz chaud et réservoir de condensats.", advantages:['30 l/24 h de capacité maximale','Hygrostat intégré','Dégivrage automatique par gaz chaud','Roues et poignées pour le transport'], specs:[['Capacité maximale','30 l/24 h'],['Débit d’air','580 m³/h'],['Plage température','5–32 °C'],['Plage humidité','50–90 % HR'],['Réfrigérant','R290'],['Puissance absorbée','0,57 kW'],['Réservoir','6 l'],['Niveau sonore','52 dB(A)'],['Dimensions (L × H × P)','430 × 800 × 500 mm'],['Poids','34 kg']], applications:['Séchage de chantier','Dégâts des eaux','Rénovation et maintien au sec'], sourceUrl:'https://www.kroll.de/en/produkte/luftentfeuchter-bautrockner-t/'},
 'kroll-tk-60': {brand:'Kroll', short:"Déshumidificateur mobile semi-industriel pour le séchage de chantier, la rénovation et les dégâts des eaux, avec hygrostat intégré.", advantages:['60 l/24 h de capacité maximale','Débit d’air 1 000 m³/h','Hygrostat intégré','Fonctionnement mobile et robuste'], specs:[['Capacité maximale','60 l/24 h'],['Débit d’air','1 000 m³/h'],['Plage température','5–32 °C'],['Plage humidité','50–90 % HR'],['Réfrigérant','R454C'],['Puissance absorbée','1,40 kW'],['Réservoir','6 l'],['Niveau sonore','56 dB(A)'],['Dimensions (L × H × P)','520 × 980 × 560 mm'],['Poids','40 kg']], applications:['Séchage de chantier','Dégâts des eaux','Industrie et bâtiment'], sourceUrl:'https://www.kroll.de/en/produkte/luftentfeuchter-bautrockner-t/'},
 'kroll-te-80': {brand:'Kroll', short:"Déshumidificateur professionnel mobile de la série TE, avec chauffage auxiliaire et connexion pour hygrostat, destiné aux applications de séchage intensif.", advantages:['80 l/24 h de capacité maximale','Débit d’air 1 000 m³/h','Chauffage auxiliaire sur gamme TE','Dégivrage automatique par gaz chaud'], specs:[['Capacité maximale','80 l/24 h'],['Débit d’air','1 000 m³/h'],['Plage température','5–32 °C'],['Plage humidité','50–90 % HR'],['Réfrigérant','R454C'],['Puissance absorbée','1,35 / 3,35 kW'],['Niveau sonore','57 dB(A)'],['Dimensions (L × l × H)','615 × 620 × 860 mm'],['Poids','52 kg'],['Protection','IP23']], applications:['Construction et rénovation','Séchage après dégâts des eaux','Industrie et location'], sourceUrl:'https://www.kroll.de/en/produkte/luftentfeuchter-bautrockner-t/'},
 'kroll-te-120': {brand:'Kroll', short:"Déshumidificateur haute capacité de la série TE pour les grands besoins de séchage professionnel et industriel.", advantages:['120 l/24 h de capacité maximale','Débit d’air 1 160 m³/h','Chauffage auxiliaire sur gamme TE','Conçu pour le fonctionnement professionnel continu'], specs:[['Capacité maximale','120 l/24 h'],['Débit d’air','1 160 m³/h'],['Plage température','5–32 °C'],['Plage humidité','50–90 % HR'],['Réfrigérant','R454C'],['Puissance absorbée','1,93 / 3,53 kW'],['Niveau sonore','59 dB(A)'],['Dimensions (L × l × H)','580 × 620 × 1 070 mm'],['Poids','58 kg'],['Protection','IP23']], applications:['Grands chantiers','Dégâts des eaux','Industrie et bâtiment'], sourceUrl:'https://www.kroll.de/en/produkte/luftentfeuchter-bautrockner-t/'},
 'master-dh-752': {brand:'Master', short:"Déshumidificateur professionnel à condensation robuste et mobile, conçu pour l’industrie, la construction, la restauration et le traitement des dégâts des eaux.", advantages:['48 l/24 h à 30 °C / 80 % HR','Dégivrage automatique rapide par gaz chaud','Hygrostat et compteur horaire intégrés','Évacuation continue des condensats possible'], specs:[['Capacité (30 °C / 80 % HR)','48 l/24 h'],['Capacité (20 °C / 60 % HR)','21 l/24 h'],['Débit d’air','350 m³/h'],['Plage température','5–35 °C'],['Plage humidité','20–90 % HR'],['Réfrigérant','R290'],['Consommation','700 / 485 W'],['Niveau sonore','52 dB(A)'],['Réservoir','5,7 l'],['Dimensions','580 × 422 × 820 mm'],['Poids net','30 kg']], applications:['Construction et rénovation','Industrie et production','Traitement des dégâts des eaux'], sourceUrl:'https://www.danthermgroup.com/fr/produits/master-dh-752'},
 'master-dh-792': {brand:'Master', short:"Déshumidificateur professionnel à condensation haute capacité pour les grands volumes, la construction, la restauration et le traitement des dégâts des eaux.", advantages:['100 l/24 h à 30 °C / 80 % HR','Convient à des espaces d’environ 1 500 m³','Hygrostat et compteur horaire intégrés','Fonctionnement continu et évacuation par tuyau possibles'], specs:[['Capacité (30 °C / 80 % HR)','100 l/24 h'],['Capacité (20 °C / 60 % HR)','44,6 l/24 h'],['Débit d’air','1 000 m³/h'],['Plage température','5–35 °C'],['Plage humidité','35–90 % HR'],['Réfrigérant','R454C'],['Consommation','1 840 W'],['Niveau sonore','69 dB(A)'],['Réservoir','15 l'],['Dimensions','620 × 540 × 1 095 mm'],['Poids net','64 kg']], applications:['Grands espaces industriels','Construction','Traitement des dégâts des eaux'], sourceUrl:'https://www.danthermgroup.com/fr/produits/master-dh-792'},
 'master-dh-712': {brand:'Master', short:"Déshumidificateur compact destiné aux applications domestiques et aux petits locaux, avec hygrostat intégré et commandes électroniques.", advantages:['Capacité 10 l/24 h','Débit d’air 100 m³/h','Hygrostat intégré','Format compact et fonctionnement silencieux'], specs:[['Capacité (30 °C / 80 % HR)','10 l/24 h'],['Débit d’air','100 m³/h'],['Plage température','5–32 °C'],['Plage humidité','35–90 % HR'],['Poids','10,5 kg']], applications:['Salles de bains et buanderies','Bureaux et petits locaux','Petites caves et vestiaires']},
 'master-dh-720': {brand:'Master', short:"Déshumidificateur à condensation compact pour éliminer l’humidité des pièces et limiter le développement des moisissures et bactéries.", advantages:['20 l/24 h à 30 °C / 80 % HR','Pour des pièces d’environ 50 m³','Hygrostat intégré et panneau numérique','Léger et silencieux'], specs:[['Capacité (30 °C / 80 % HR)','20 l/24 h'],['Capacité (20 °C / 60 % HR)','6,7 l/24 h'],['Débit d’air','150 m³/h'],['Plage température','5–32 °C'],['Plage humidité','35–95 % HR'],['Réfrigérant','R290'],['Consommation','390 W'],['Niveau sonore','48 dB(A)'],['Réservoir','5 l'],['Dimensions','410 × 210 × 550 mm'],['Poids net','11 kg']], applications:['Logements et bureaux','Caves, garages et bibliothèques','Buanderies et salles de bains'], sourceUrl:'https://www.danthermgroup.com/fr/produits/master-dh-720'},
 'master-dh-721': {brand:'Master', short:"Déshumidificateur professionnel à condensation, robuste et économique, adapté aux travaux de rénovation, à la construction et au traitement des dégâts des eaux.", advantages:['20 l/24 h à 30 °C / 80 % HR','Commande numérique et hygrostat intégré','Fonctionnement continu possible','Évacuation des condensats par tuyau possible'], specs:[['Capacité (30 °C / 80 % HR)','20 l/24 h'],['Capacité (20 °C / 60 % HR)','7 l/24 h'],['Débit d’air','200 m³/h'],['Plage température','5–35 °C'],['Plage humidité','35–90 % HR'],['Réfrigérant','R290'],['Consommation','490 W'],['Niveau sonore','42 dB(A)'],['Réservoir','4,7 l'],['Dimensions','335 × 305 × 640 mm'],['Poids net','19 kg']], applications:['Rénovation et construction','Bâtiments commerciaux','Traitement des dégâts des eaux'], sourceUrl:'https://www.danthermgroup.com/fr/produits/master-dh-721'}
};

const laboratoryProducts=[
 {folder:'laboratoire',ref:'90201',img:'/mn/90201.png',slug:'90201'},
 {folder:'laboratoire',ref:'90203',img:'/mn/90203.png',slug:'90203'},
 {folder:'laboratoire',ref:'90204',img:'/mn/90204.png',slug:'90204'},
 {folder:'laboratoire',ref:'90205',img:'/mn/90205.png',slug:'90205'},
 {folder:'laboratoire',ref:'90206',img:'/mn/90206.png',slug:'90206'},
 {folder:'laboratoire',ref:'90207',img:'/mn/90207.png',slug:'90207'},
 {folder:'laboratoire',ref:'90208',img:'/mn/90208.png',slug:'90208'},
 {folder:'laboratoire',ref:'90209',img:'/mn/90209.png',slug:'90209'},
 {folder:'laboratoire',ref:'90210',img:'/mn/90210.png',slug:'90210'},
 {folder:'laboratoire',ref:'90211',img:'/mn/90211.png',slug:'90211'},
 {folder:'laboratoire',ref:'90212',img:'/mn/90212.png',slug:'90212'},
 {folder:'laboratoire',ref:'90213',img:'/mn/90213.png',slug:'90213'},
 {folder:'laboratoire',ref:'90214',img:'/mn/90214.png',slug:'90214'},
 {folder:'laboratoire',ref:'90301',img:'/mn/90301.png',slug:'90301'},
 {folder:'laboratoire',ref:'90302',img:'/mn/90302.png',slug:'90302'},
 {folder:'laboratoire',ref:'90303',img:'/mn/90303.png',slug:'90303'},
 {folder:'laboratoire',ref:'90304',img:'/mn/90304.png',slug:'90304'},
 {folder:'laboratoire',ref:'90305',img:'/mn/90305.png',slug:'90305'},
 {folder:'laboratoire',ref:'90306',img:'/mn/90306.png',slug:'90306'},
 {folder:'laboratoire',ref:'90401',img:'/mn/90401.png',slug:'90401'},
 {folder:'laboratoire',ref:'90411',img:'/mn/90411.png',slug:'90411'},
 {folder:'laboratoire',ref:'90412',img:'/mn/90412.png',slug:'90412'},
 {folder:'laboratoire',ref:'90413',img:'/mn/90413.png',slug:'90413'},
 {folder:'laboratoire',ref:'90414',img:'/mn/90414.png',slug:'90414'},
 {folder:'laboratoire',ref:'90415',img:'/mn/90415.png',slug:'90415'},
 {folder:'laboratoire',ref:'90416',img:'/mn/90416.png',slug:'90416'},
 {folder:'laboratoire',ref:'90417',img:'/mn/90417.png',slug:'90417'},
 {folder:'laboratoire',ref:'90419',img:'/mn/90419.png',slug:'90419'},
 {folder:'laboratoire',ref:'90420',img:'/mn/90420.png',slug:'90420'},
 {folder:'laboratoire',ref:'90421',img:'/mn/90421.png',slug:'90421'},
 {folder:'laboratoire',ref:'90422',img:'/mn/90422.png',slug:'90422'},
 {folder:'laboratoire',ref:'90423',img:'/mn/90423.png',slug:'90423'},
 {folder:'laboratoire',ref:'90424',img:'/mn/90424.png',slug:'90424'},
 {folder:'laboratoire',ref:'90501',img:'/mn/90501.png',slug:'90501'},
 {folder:'laboratoire',ref:'90510',img:'/mn/90510.png',slug:'90510'},
 {folder:'laboratoire',ref:'90601',img:'/mn/90601.png',slug:'90601'},
 {folder:'laboratoire',ref:'90602',img:'/mn/90602.png',slug:'90602'},
 {folder:'laboratoire',ref:'90603',img:'/mn/90603.png',slug:'90603'},
 {folder:'laboratoire',ref:'90604',img:'/mn/90604.png',slug:'90604'},
 {folder:'laboratoire',ref:'90605',img:'/mn/90605.png',slug:'90605'},
 {folder:'laboratoire',ref:'90606',img:'/mn/90606.png',slug:'90606'},
 {folder:'laboratoire',ref:'90607',img:'/mn/90607.png',slug:'90607'},
 {folder:'laboratoire',ref:'90608',img:'/mn/90608.png',slug:'90608'},
 {folder:'laboratoire',ref:'90609',img:'/mn/90609.png',slug:'90609'},
 {folder:'laboratoire',ref:'90610',img:'/mn/90610.png',slug:'90610'},
 {folder:'laboratoire',ref:'90611',img:'/mn/90611.png',slug:'90611'},
 {folder:'laboratoire',ref:'90612',img:'/mn/90612.png',slug:'90612'},
 {folder:'laboratoire',ref:'90627',img:'/mn/90627.png',slug:'90627'},
 {folder:'laboratoire',ref:'90630',img:'/mn/90630.png',slug:'90630'},
 {folder:'laboratoire',ref:'90701',img:'/mn/90701.png',slug:'90701'},
 {folder:'laboratoire',ref:'90702',img:'/mn/90702.png',slug:'90702'},
 {folder:'laboratoire',ref:'90704',img:'/mn/90704.png',slug:'90704'},
 {folder:'laboratoire',ref:'90705',img:'/mn/90705.png',slug:'90705'},
 {folder:'laboratoire',ref:'90709',img:'/mn/90709.png',slug:'90709'},
 {folder:'laboratoire',ref:'90710',img:'/mn/90710.png',slug:'90710'},
 {folder:'laboratoire',ref:'90711',img:'/mn/90711.png',slug:'90711'},
 {folder:'laboratoire',ref:'90712',img:'/mn/90712.png',slug:'90712'},
 {folder:'laboratoire',ref:'90714',img:'/mn/90714.png',slug:'90714'},
 {folder:'laboratoire',ref:'90721',img:'/mn/90721.png',slug:'90721'},
 {folder:'laboratoire',ref:'90722',img:'/mn/90722.png',slug:'90722'},
 {folder:'laboratoire',ref:'90723',img:'/mn/90723.png',slug:'90723'},
 {folder:'laboratoire',ref:'90724',img:'/mn/90724.png',slug:'90724'},
 {folder:'laboratoire',ref:'90725',img:'/mn/90725.png',slug:'90725'},
 {folder:'laboratoire',ref:'90726',img:'/mn/90726.png',slug:'90726'},
 {folder:'laboratoire',ref:'90727',img:'/mn/90727.png',slug:'90727'},
 {folder:'laboratoire',ref:'90728',img:'/mn/90728.png',slug:'90728'},
 {folder:'laboratoire',ref:'90729',img:'/mn/90729.png',slug:'90729'},
 {folder:'laboratoire',ref:'90730',img:'/mn/90730.png',slug:'90730'},
 {folder:'laboratoire',ref:'90732',img:'/mn/90732.png',slug:'90732'},
 {folder:'laboratoire',ref:'90733',img:'/mn/90733.png',slug:'90733'},
 {folder:'laboratoire',ref:'90734',img:'/mn/90734.png',slug:'90734'},
 {folder:'laboratoire',ref:'90736',img:'/mn/90736.png',slug:'90736'},
 {folder:'laboratoire',ref:'90741',img:'/mn/90741.png',slug:'90741'},
 {folder:'laboratoire',ref:'90742',img:'/mn/90742.png',slug:'90742'},
 {folder:'laboratoire',ref:'90744',img:'/mn/90744.png',slug:'90744'},
 {folder:'laboratoire',ref:'90745',img:'/mn/90745.png',slug:'90745'},
 {folder:'laboratoire',ref:'90747',img:'/mn/90747.png',slug:'90747'},
 {folder:'laboratoire',ref:'90748',img:'/mn/90748.png',slug:'90748'},
 {folder:'laboratoire',ref:'90750',img:'/mn/90750.png',slug:'90750'},
 {folder:'laboratoire',ref:'90751',img:'/mn/90751.png',slug:'90751'},
 {folder:'laboratoire',ref:'90752',img:'/mn/90752.png',slug:'90752'},
 {folder:'laboratoire',ref:'90753',img:'/mn/90753.png',slug:'90753'},
 {folder:'laboratoire',ref:'90754',img:'/mn/90754.png',slug:'90754'},
 {folder:'laboratoire',ref:'90755',img:'/mn/90755.png',slug:'90755'},
 {folder:'laboratoire',ref:'90756',img:'/mn/90756.png',slug:'90756'},
 {folder:'laboratoire',ref:'90758',img:'/mn/90758.png',slug:'90758'},
 {folder:'laboratoire',ref:'90759',img:'/mn/90759.png',slug:'90759'},
 {folder:'laboratoire',ref:'90760',img:'/mn/90760.png',slug:'90760'},
 {folder:'laboratoire',ref:'90761',img:'/mn/90761.png',slug:'90761'},
 {folder:'laboratoire',ref:'90762',img:'/mn/90762.png',slug:'90762'},
 {folder:'laboratoire',ref:'90763',img:'/mn/90763.png',slug:'90763'},
 {folder:'laboratoire',ref:'90765',img:'/mn/90765.png',slug:'90765'},
 {folder:'laboratoire',ref:'908805',img:'/mn/908805.png',slug:'908805'},
 {folder:'laboratoire',ref:'908808',img:'/mn/908808.png',slug:'908808'},
 {folder:'laboratoire',ref:'91002',img:'/mn/91002.png',slug:'91002'},
 {folder:'laboratoire',ref:'91031',img:'/mn/91031.png',slug:'91031'},
 {folder:'laboratoire',ref:'91039',img:'/mn/91039.png',slug:'91039'},
 {folder:'laboratoire',ref:'91106',img:'/mn/91106.png',slug:'91106'},
 {folder:'laboratoire',ref:'91107',img:'/mn/91107.png',slug:'91107'},
 {folder:'laboratoire',ref:'91108',img:'/mn/91108.png',slug:'91108'},
 {folder:'laboratoire',ref:'91126',img:'/mn/91126.png',slug:'91126'},
 {folder:'laboratoire',ref:'91127',img:'/mn/91127.png',slug:'91127'},
 {folder:'laboratoire',ref:'91128',img:'/mn/91128.png',slug:'91128'},
 {folder:'laboratoire',ref:'91201',img:'/mn/91201.png',slug:'91201'},
 {folder:'laboratoire',ref:'91210',img:'/mn/91210.png',slug:'91210'},
 {folder:'laboratoire',ref:'91220',img:'/mn/91220.png',slug:'91220'},
 {folder:'laboratoire',ref:'91221',img:'/mn/91221.png',slug:'91221'},
 {folder:'laboratoire',ref:'91222',img:'/mn/91222.png',slug:'91222'},
 {folder:'laboratoire',ref:'91223',img:'/mn/91223.png',slug:'91223'},
 {folder:'laboratoire',ref:'91224',img:'/mn/91224.png',slug:'91224'},
 {folder:'laboratoire',ref:'91239',img:'/mn/91239.png',slug:'91239'},
 {folder:'laboratoire',ref:'91240',img:'/mn/91240.png',slug:'91240'},
 {folder:'laboratoire',ref:'912902',img:'/mn/912902.png',slug:'912902'},
 {folder:'laboratoire',ref:'91301',img:'/mn/91301.png',slug:'91301'},
 {folder:'laboratoire',ref:'91303',img:'/mn/91303.png',slug:'91303'},
 {folder:'laboratoire',ref:'91304',img:'/mn/91304.png',slug:'91304'},
 {folder:'laboratoire',ref:'91305',img:'/mn/91305.png',slug:'91305'},
 {folder:'laboratoire',ref:'91306',img:'/mn/91306.png',slug:'91306'},
 {folder:'laboratoire',ref:'91307',img:'/mn/91307.png',slug:'91307'},
 {folder:'laboratoire',ref:'91309',img:'/mn/91309.png',slug:'91309'},
 {folder:'laboratoire',ref:'91310',img:'/mn/91310.png',slug:'91310'},
 {folder:'laboratoire',ref:'91311',img:'/mn/91311.png',slug:'91311'},
 {folder:'laboratoire',ref:'91312',img:'/mn/91312.png',slug:'91312'},
 {folder:'laboratoire',ref:'91313',img:'/mn/91313.png',slug:'91313'},
 {folder:'laboratoire',ref:'91314',img:'/mn/91314.png',slug:'91314'},
 {folder:'laboratoire',ref:'91315',img:'/mn/91315.png',slug:'91315'},
 {folder:'laboratoire',ref:'91316',img:'/mn/91316.png',slug:'91316'},
 {folder:'laboratoire',ref:'91317',img:'/mn/91317.png',slug:'91317'},
 {folder:'laboratoire',ref:'91318',img:'/mn/91318.png',slug:'91318'},
 {folder:'laboratoire',ref:'91319',img:'/mn/91319.png',slug:'91319'},
 {folder:'laboratoire',ref:'91320',img:'/mn/91320.png',slug:'91320'},
 {folder:'laboratoire',ref:'91321',img:'/mn/91321.png',slug:'91321'},
 {folder:'laboratoire',ref:'91322',img:'/mn/91322.png',slug:'91322'},
 {folder:'laboratoire',ref:'91323',img:'/mn/91323.png',slug:'91323'},
 {folder:'laboratoire',ref:'91324',img:'/mn/91324.png',slug:'91324'},
 {folder:'laboratoire',ref:'91325',img:'/mn/91325.png',slug:'91325'},
 {folder:'laboratoire',ref:'91326',img:'/mn/91326.png',slug:'91326'},
 {folder:'laboratoire',ref:'91327',img:'/mn/91327.png',slug:'91327'},
 {folder:'laboratoire',ref:'91328',img:'/mn/91328.png',slug:'91328'},
 {folder:'laboratoire',ref:'91329',img:'/mn/91329.png',slug:'91329'},
 {folder:'laboratoire',ref:'91330',img:'/mn/91330.png',slug:'91330'},
 {folder:'laboratoire',ref:'91332',img:'/mn/91332.png',slug:'91332'},
 {folder:'laboratoire',ref:'91333',img:'/mn/91333.png',slug:'91333'},
 {folder:'laboratoire',ref:'91334',img:'/mn/91334.png',slug:'91334'},
 {folder:'laboratoire',ref:'91335',img:'/mn/91335.png',slug:'91335'},
 {folder:'laboratoire',ref:'91336',img:'/mn/91336.png',slug:'91336'},
 {folder:'laboratoire',ref:'91337',img:'/mn/91337.png',slug:'91337'},
 {folder:'laboratoire',ref:'91338',img:'/mn/91338.png',slug:'91338'},
 {folder:'laboratoire',ref:'91340',img:'/mn/91340.png',slug:'91340'},
 {folder:'laboratoire',ref:'91341',img:'/mn/91341.png',slug:'91341'},
 {folder:'laboratoire',ref:'91342',img:'/mn/91342.png',slug:'91342'},
 {folder:'laboratoire',ref:'91343',img:'/mn/91343.png',slug:'91343'},
 {folder:'laboratoire',ref:'91344',img:'/mn/91344.png',slug:'91344'},
 {folder:'laboratoire',ref:'91345',img:'/mn/91345.png',slug:'91345'},
 {folder:'laboratoire',ref:'91345.2',img:'/mn/91345.2.png',slug:'91345-2'},
 {folder:'laboratoire',ref:'91348',img:'/mn/91348.png',slug:'91348'},
 {folder:'laboratoire',ref:'91349',img:'/mn/91349.png',slug:'91349'},
 {folder:'laboratoire',ref:'91350',img:'/mn/91350.png',slug:'91350'},
 {folder:'laboratoire',ref:'91351',img:'/mn/91351.png',slug:'91351'},
 {folder:'laboratoire',ref:'91352',img:'/mn/91352.png',slug:'91352'},
 {folder:'laboratoire',ref:'91354',img:'/mn/91354.png',slug:'91354'},
 {folder:'laboratoire',ref:'91355',img:'/mn/91355.png',slug:'91355'},
 {folder:'laboratoire',ref:'91356',img:'/mn/91356.png',slug:'91356'},
 {folder:'laboratoire',ref:'91357',img:'/mn/91357.png',slug:'91357'},
 {folder:'laboratoire',ref:'91358',img:'/mn/91358.png',slug:'91358'},
 {folder:'laboratoire',ref:'91359',img:'/mn/91359.png',slug:'91359'},
 {folder:'laboratoire',ref:'91360',img:'/mn/91360.png',slug:'91360'},
 {folder:'laboratoire',ref:'913918',img:'/mn/913918.png',slug:'913918'},
 {folder:'laboratoire',ref:'915002',img:'/mn/915002.png',slug:'915002'},
 {folder:'laboratoire',ref:'915003',img:'/mn/915003.png',slug:'915003'},
 {folder:'laboratoire',ref:'9150044',img:'/mn/9150044.png',slug:'9150044'},
 {folder:'laboratoire',ref:'915005',img:'/mn/915005.png',slug:'915005'},
 {folder:'laboratoire',ref:'915006',img:'/mn/915006.png',slug:'915006'},
 {folder:'laboratoire',ref:'915007',img:'/mn/915007.png',slug:'915007'},
 {folder:'laboratoire',ref:'915008',img:'/mn/915008.png',slug:'915008'},
 {folder:'laboratoire',ref:'915009',img:'/mn/915009.png',slug:'915009'},
 {folder:'laboratoire',ref:'915010',img:'/mn/915010.png',slug:'915010'},
 {folder:'laboratoire',ref:'91802',img:'/mn/91802.png',slug:'91802'},
 {folder:'laboratoire',ref:'91805',img:'/mn/91805.png',slug:'91805'},
 {folder:'laboratoire',ref:'918101',img:'/mn/918101.png',slug:'918101'},
 {folder:'laboratoire',ref:'918126',img:'/mn/918126.png',slug:'918126'},
 {folder:'laboratoire',ref:'918128',img:'/mn/918128.png',slug:'918128'},
 {folder:'laboratoire',ref:'918131',img:'/mn/918131.png',slug:'918131'},
 {folder:'laboratoire',ref:'918142',img:'/mn/918142.png',slug:'918142'},
 {folder:'laboratoire',ref:'91816',img:'/mn/91816.png',slug:'91816'},
 {folder:'laboratoire',ref:'918163',img:'/mn/918163.png',slug:'918163'},
 {folder:'laboratoire',ref:'91820',img:'/mn/91820.png',slug:'91820'},
 {folder:'laboratoire',ref:'91825',img:'/mn/91825.png',slug:'91825'},
 {folder:'laboratoire',ref:'91830',img:'/mn/91830.png',slug:'91830'},
 {folder:'laboratoire',ref:'91832',img:'/mn/91832.png',slug:'91832'},
 {folder:'laboratoire',ref:'91834',img:'/mn/91834.png',slug:'91834'},
 {folder:'laboratoire',ref:'91836',img:'/mn/91836.png',slug:'91836'},
 {folder:'laboratoire',ref:'91844',img:'/mn/91844.png',slug:'91844'},
 {folder:'laboratoire',ref:'91848',img:'/mn/91848.png',slug:'91848'},
 {folder:'laboratoire',ref:'91851',img:'/mn/91851.png',slug:'91851'},
 {folder:'laboratoire',ref:'91853',img:'/mn/91853.png',slug:'91853'},
 {folder:'laboratoire',ref:'91860',img:'/mn/91860.png',slug:'91860'},
 {folder:'laboratoire',ref:'91862',img:'/mn/91862.png',slug:'91862'},
 {folder:'laboratoire',ref:'91863',img:'/mn/91863.png',slug:'91863'},
 {folder:'laboratoire',ref:'91865',img:'/mn/91865.png',slug:'91865'},
 {folder:'laboratoire',ref:'91867',img:'/mn/91867.png',slug:'91867'},
 {folder:'laboratoire',ref:'91872',img:'/mn/91872.png',slug:'91872'},
 {folder:'laboratoire',ref:'91875',img:'/mn/91875.png',slug:'91875'},
 {folder:'laboratoire',ref:'91877',img:'/mn/91877.png',slug:'91877'},
 {folder:'laboratoire',ref:'91878',img:'/mn/91878.png',slug:'91878'},
 {folder:'laboratoire',ref:'91885',img:'/mn/91885.png',slug:'91885'},
 {folder:'laboratoire',ref:'91888',img:'/mn/91888.png',slug:'91888'},
 {folder:'laboratoire',ref:'91895',img:'/mn/91895.png',slug:'91895'},
 {folder:'laboratoire',ref:'920006',img:'/mn/920006.png',slug:'920006'},
 {folder:'laboratoire',ref:'920015',img:'/mn/920015.png',slug:'920015'},
 {folder:'laboratoire',ref:'920028',img:'/mn/920028.png',slug:'920028'},
 {folder:'laboratoire',ref:'920040',img:'/mn/920040.png',slug:'920040'},
 {folder:'laboratoire',ref:'920050',img:'/mn/920050.png',slug:'920050'},
 {folder:'laboratoire',ref:'920055',img:'/mn/920055.png',slug:'920055'},
 {folder:'laboratoire',ref:'920063',img:'/mn/920063.png',slug:'920063'},
 {folder:'laboratoire',ref:'920074',img:'/mn/920074.png',slug:'920074'},
 {folder:'laboratoire',ref:'920078',img:'/mn/920078.png',slug:'920078'},
 {folder:'laboratoire',ref:'920080',img:'/mn/920080.png',slug:'920080'},
 {folder:'laboratoire',ref:'920082',img:'/mn/920082.png',slug:'920082'},
 {folder:'laboratoire',ref:'92110',img:'/mn/92110.png',slug:'92110'},
 {folder:'laboratoire',ref:'92111',img:'/mn/92111.png',slug:'92111'},
 {folder:'laboratoire',ref:'92115',img:'/mn/92115.png',slug:'92115'},
 {folder:'laboratoire',ref:'92118',img:'/mn/92118.png',slug:'92118'},
 {folder:'laboratoire',ref:'92120',img:'/mn/92120.png',slug:'92120'},
 {folder:'laboratoire',ref:'92121',img:'/mn/92121.png',slug:'92121'},
 {folder:'laboratoire',ref:'92122',img:'/mn/92122.png',slug:'92122'},
 {folder:'laboratoire',ref:'92125',img:'/mn/92125.png',slug:'92125'},
 {folder:'laboratoire',ref:'92130',img:'/mn/92130.png',slug:'92130'},
 {folder:'laboratoire',ref:'92135',img:'/mn/92135.png',slug:'92135'},
 {folder:'laboratoire',ref:'92137',img:'/mn/92137.png',slug:'92137'},
 {folder:'laboratoire',ref:'92140',img:'/mn/92140.png',slug:'92140'},
 {folder:'laboratoire',ref:'92150',img:'/mn/92150.png',slug:'92150'},
 {folder:'laboratoire',ref:'92160',img:'/mn/92160.png',slug:'92160'},
 {folder:'laboratoire',ref:'92170',img:'/mn/92170.png',slug:'92170'},
 {folder:'laboratoire',ref:'92180',img:'/mn/92180.png',slug:'92180'},
 {folder:'laboratoire',ref:'92190',img:'/mn/92190.png',slug:'92190'},
 {folder:'laboratoire',ref:'931006',img:'/mn/931006.png',slug:'931006'},
 {folder:'laboratoire',ref:'931008',img:'/mn/931008.png',slug:'931008'},
 {folder:'laboratoire',ref:'931010',img:'/mn/931010.png',slug:'931010'},
 {folder:'laboratoire',ref:'931012',img:'/mn/931012.png',slug:'931012'},
 {folder:'laboratoire',ref:'931014',img:'/mn/931014.png',slug:'931014'},
 {folder:'laboratoire',ref:'931015',img:'/mn/931015.png',slug:'931015'},
 {folder:'laboratoire',ref:'931016',img:'/mn/931016.png',slug:'931016'},
 {folder:'laboratoire',ref:'931018',img:'/mn/931018.png',slug:'931018'},
 {folder:'laboratoire',ref:'931020',img:'/mn/931020.png',slug:'931020'},
 {folder:'laboratoire',ref:'931022',img:'/mn/931022.png',slug:'931022'},
 {folder:'laboratoire',ref:'931023',img:'/mn/931023.png',slug:'931023'},
 {folder:'laboratoire',ref:'931024',img:'/mn/931024.png',slug:'931024'},
 {folder:'laboratoire',ref:'931025',img:'/mn/931025.png',slug:'931025'},
 {folder:'laboratoire',ref:'931026',img:'/mn/931026.png',slug:'931026'},
 {folder:'laboratoire',ref:'931029',img:'/mn/931029.png',slug:'931029'},
 {folder:'laboratoire',ref:'931030',img:'/mn/931030.png',slug:'931030'},
 {folder:'laboratoire',ref:'931032',img:'/mn/931032.png',slug:'931032'},
 {folder:'laboratoire',ref:'931033',img:'/mn/931033.png',slug:'931033'},
 {folder:'laboratoire',ref:'931035',img:'/mn/931035.png',slug:'931035'},
 {folder:'laboratoire',ref:'931037',img:'/mn/931037.png',slug:'931037'},
 {folder:'laboratoire',ref:'931038',img:'/mn/931038.png',slug:'931038'},
 {folder:'laboratoire',ref:'931040',img:'/mn/931040.png',slug:'931040'},
 {folder:'laboratoire',ref:'931041',img:'/mn/931041.png',slug:'931041'},
 {folder:'laboratoire',ref:'931044',img:'/mn/931044.png',slug:'931044'},
 {folder:'laboratoire',ref:'931050',img:'/mn/931050.png',slug:'931050'},
 {folder:'laboratoire',ref:'931051',img:'/mn/931051.png',slug:'931051'},
 {folder:'laboratoire',ref:'931066',img:'/mn/931066.png',slug:'931066'},
 {folder:'laboratoire',ref:'931084',img:'/mn/931084.png',slug:'931084'},
 {folder:'laboratoire',ref:'931088',img:'/mn/931088.png',slug:'931088'},
 {folder:'laboratoire',ref:'931090',img:'/mn/931090.png',slug:'931090'},
 {folder:'laboratoire',ref:'931092',img:'/mn/931092.png',slug:'931092'},
 {folder:'laboratoire',ref:'931094',img:'/mn/931094.png',slug:'931094'},
 {folder:'laboratoire',ref:'931095',img:'/mn/931095.png',slug:'931095'},
 {folder:'laboratoire',ref:'931098',img:'/mn/931098.png',slug:'931098'},
 {folder:'laboratoire',ref:'935012',img:'/mn/935012.png',slug:'935012'},
 {folder:'laboratoire',ref:'935016',img:'/mn/935016.png',slug:'935016'},
 {folder:'laboratoire',ref:'935019',img:'/mn/935019.png',slug:'935019'},
 {folder:'laboratoire',ref:'935065',img:'/mn/935065.png',slug:'935065'},
 {folder:'laboratoire',ref:'935066',img:'/mn/935066.png',slug:'935066'},
 {folder:'laboratoire',ref:'935075',img:'/mn/935075.png',slug:'935075'},
 {folder:'laboratoire',ref:'935079',img:'/mn/935079.png',slug:'935079'},
 {folder:'laboratoire',ref:'935080',img:'/mn/935080.png',slug:'935080'},
 {folder:'laboratoire',ref:'936220',img:'/mn/936220.png',slug:'936220'},
 {folder:'laboratoire',ref:'936220.1',img:'/mn/936220.1.png',slug:'936220-1'},
 {folder:'laboratoire',ref:'936221',img:'/mn/936221.png',slug:'936221'},
 {folder:'laboratoire',ref:'936222',img:'/mn/936222.png',slug:'936222'},
 {folder:'laboratoire',ref:'936223',img:'/mn/936223.png',slug:'936223'},
 {folder:'laboratoire',ref:'936224',img:'/mn/936224.png',slug:'936224'},
 {folder:'laboratoire',ref:'936225',img:'/mn/936225.png',slug:'936225'},
 {folder:'laboratoire',ref:'936226',img:'/mn/936226.png',slug:'936226'},
 {folder:'laboratoire',ref:'936227',img:'/mn/936227.png',slug:'936227'},
 {folder:'laboratoire',ref:'936228',img:'/mn/936228.png',slug:'936228'},
 {folder:'laboratoire',ref:'936229',img:'/mn/936229.png',slug:'936229'},
 {folder:'laboratoire',ref:'936230',img:'/mn/936230.png',slug:'936230'},
 {folder:'laboratoire',ref:'963026',img:'/mn/963026.png',slug:'963026'},
 {folder:'laboratoire',ref:'976003',img:'/mn/976003.png',slug:'976003'},
 {folder:'laboratoire',ref:'985001',img:'/mn/985001.png',slug:'985001'},
 {folder:'laboratoire',ref:'985002',img:'/mn/985002.png',slug:'985002'},
 {folder:'laboratoire',ref:'985003',img:'/mn/985003.png',slug:'985003'},
 {folder:'laboratoire',ref:'985004',img:'/mn/985004.png',slug:'985004'},
 {folder:'laboratoire',ref:'985005',img:'/mn/985005.png',slug:'985005'},
 {folder:'laboratoire',ref:'985006',img:'/mn/985006.png',slug:'985006'},
 {folder:'laboratoire',ref:'985007',img:'/mn/985007.png',slug:'985007'},
 {folder:'laboratoire',ref:'985008',img:'/mn/985008.png',slug:'985008'},
 {folder:'laboratoire',ref:'985009',img:'/mn/985009.png',slug:'985009'},
 {folder:'laboratoire',ref:'985011',img:'/mn/985011.png',slug:'985011'},
 {folder:'laboratoire',ref:'985012',img:'/mn/985012.png',slug:'985012'},
 {folder:'laboratoire',ref:'985014',img:'/mn/985014.png',slug:'985014'},
 {folder:'laboratoire',ref:'985015',img:'/mn/985015.png',slug:'985015'},
 {folder:'laboratoire',ref:'985017',img:'/mn/985017.png',slug:'985017'},
 {folder:'laboratoire',ref:'985018',img:'/mn/985018.png',slug:'985018'},
 {folder:'laboratoire',ref:'985019',img:'/mn/985019.png',slug:'985019'},
 {folder:'laboratoire',ref:'985020',img:'/mn/985020.png',slug:'985020'},
 {folder:'laboratoire',ref:'985021',img:'/mn/985021.png',slug:'985021'},
 {folder:'laboratoire',ref:'985022',img:'/mn/985022.png',slug:'985022'},
 {folder:'laboratoire',ref:'985023',img:'/mn/985023.png',slug:'985023'},
 {folder:'laboratoire',ref:'985024',img:'/mn/985024.png',slug:'985024'},
 {folder:'laboratoire',ref:'985025',img:'/mn/985025.png',slug:'985025'},
 {folder:'laboratoire',ref:'985026',img:'/mn/985026.png',slug:'985026'},
 {folder:'laboratoire',ref:'985027',img:'/mn/985027.png',slug:'985027'},
 {folder:'laboratoire',ref:'985028',img:'/mn/985028.png',slug:'985028'},
 {folder:'laboratoire',ref:'985029',img:'/mn/985029.png',slug:'985029'},
 {folder:'laboratoire',ref:'985030',img:'/mn/985030.png',slug:'985030'},
 {folder:'laboratoire',ref:'985031',img:'/mn/985031.png',slug:'985031'},
 {folder:'laboratoire',ref:'985032',img:'/mn/985032.png',slug:'985032'},
 {folder:'laboratoire',ref:'985033',img:'/mn/985033.png',slug:'985033'},
 {folder:'laboratoire',ref:'985034',img:'/mn/985034.png',slug:'985034'},
 {folder:'laboratoire',ref:'985035',img:'/mn/985035.png',slug:'985035'},
 {folder:'laboratoire',ref:'985036',img:'/mn/985036.png',slug:'985036'},
 {folder:'laboratoire',ref:'985037',img:'/mn/985037.png',slug:'985037'},
 {folder:'laboratoire',ref:'985038',img:'/mn/985038.png',slug:'985038'},
 {folder:'laboratoire',ref:'985040',img:'/mn/985040.png',slug:'985040'},
 {folder:'laboratoire',ref:'985042',img:'/mn/985042.png',slug:'985042'},
 {folder:'laboratoire',ref:'985043',img:'/mn/985043.png',slug:'985043'},
 {folder:'laboratoire',ref:'985044',img:'/mn/985044.png',slug:'985044'},
 {folder:'laboratoire',ref:'985045',img:'/mn/985045.png',slug:'985045'},
 {folder:'laboratoire',ref:'985046',img:'/mn/985046.png',slug:'985046'},
 {folder:'laboratoire',ref:'985047',img:'/mn/985047.png',slug:'985047'},
 {folder:'laboratoire',ref:'985049',img:'/mn/985049.png',slug:'985049'},
 {folder:'laboratoire',ref:'985050',img:'/mn/985050.png',slug:'985050'},
 {folder:'laboratoire',ref:'985052',img:'/mn/985052.png',slug:'985052'},
 {folder:'laboratoire',ref:'985053',img:'/mn/985053.png',slug:'985053'},
 {folder:'laboratoire',ref:'985055',img:'/mn/985055.png',slug:'985055'},
 {folder:'laboratoire',ref:'985056',img:'/mn/985056.png',slug:'985056'},
 {folder:'laboratoire',ref:'985057',img:'/mn/985057.png',slug:'985057'},
 {folder:'laboratoire',ref:'985058',img:'/mn/985058.png',slug:'985058'},
 {folder:'laboratoire',ref:'985059',img:'/mn/985059.png',slug:'985059'},
 {folder:'laboratoire',ref:'985060',img:'/mn/985060.png',slug:'985060'},
 {folder:'laboratoire',ref:'985062',img:'/mn/985062.png',slug:'985062'},
 {folder:'laboratoire',ref:'985063',img:'/mn/985063.png',slug:'985063'},
 {folder:'laboratoire',ref:'985064',img:'/mn/985064.png',slug:'985064'},
 {folder:'laboratoire',ref:'985065',img:'/mn/985065.png',slug:'985065'},
 {folder:'laboratoire',ref:'985066',img:'/mn/985066.png',slug:'985066'},
 {folder:'laboratoire',ref:'985068',img:'/mn/985068.png',slug:'985068'},
 {folder:'laboratoire',ref:'985069',img:'/mn/985069.png',slug:'985069'},
 {folder:'laboratoire',ref:'985070',img:'/mn/985070.png',slug:'985070'},
 {folder:'laboratoire',ref:'985071',img:'/mn/985071.png',slug:'985071'},
 {folder:'laboratoire',ref:'985073',img:'/mn/985073.png',slug:'985073'},
 {folder:'laboratoire',ref:'985074',img:'/mn/985074.png',slug:'985074'},
 {folder:'laboratoire',ref:'985075',img:'/mn/985075.png',slug:'985075'},
 {folder:'laboratoire',ref:'985076',img:'/mn/985076.png',slug:'985076'},
 {folder:'laboratoire',ref:'985078',img:'/mn/985078.png',slug:'985078'},
 {folder:'laboratoire',ref:'985079',img:'/mn/985079.png',slug:'985079'},
 {folder:'laboratoire',ref:'985080',img:'/mn/985080.png',slug:'985080'},
 {folder:'laboratoire',ref:'985081',img:'/mn/985081.png',slug:'985081'},
 {folder:'laboratoire',ref:'985082',img:'/mn/985082.png',slug:'985082'},
 {folder:'laboratoire',ref:'985083',img:'/mn/985083.png',slug:'985083'},
 {folder:'laboratoire',ref:'985084',img:'/mn/985084.png',slug:'985084'},
 {folder:'laboratoire',ref:'985085',img:'/mn/985085.png',slug:'985085'},
 {folder:'laboratoire',ref:'985087',img:'/mn/985087.png',slug:'985087'},
 {folder:'laboratoire',ref:'985088',img:'/mn/985088.png',slug:'985088'},
 {folder:'laboratoire',ref:'985089',img:'/mn/985089.png',slug:'985089'},
 {folder:'laboratoire',ref:'985090',img:'/mn/985090.png',slug:'985090'},
 {folder:'laboratoire',ref:'985091',img:'/mn/985091.png',slug:'985091'},
 {folder:'laboratoire',ref:'985092',img:'/mn/985092.png',slug:'985092'},
 {folder:'laboratoire',ref:'985095',img:'/mn/985095.png',slug:'985095'},
 {folder:'laboratoire',ref:'985096',img:'/mn/985096.png',slug:'985096'},
 {folder:'laboratoire',ref:'985097',img:'/mn/985097.png',slug:'985097'},
 {folder:'laboratoire',ref:'985098',img:'/mn/985098.png',slug:'985098'},
 {folder:'laboratoire',ref:'985603',img:'/mn/985603.png',slug:'985603'},
 {folder:'laboratoire',ref:'985605',img:'/mn/985605.png',slug:'985605'},
 {folder:'laboratoire',ref:'985607',img:'/mn/985607.png',slug:'985607'},
 {folder:'laboratoire',ref:'985619',img:'/mn/985619.png',slug:'985619'},
 {folder:'laboratoire',ref:'985621',img:'/mn/985621.png',slug:'985621'},
 {folder:'laboratoire',ref:'985622',img:'/mn/985622.png',slug:'985622'},
 {folder:'laboratoire',ref:'985626',img:'/mn/985626.png',slug:'985626'},
 {folder:'laboratoire',ref:'985628',img:'/mn/985628.png',slug:'985628'},
 {folder:'laboratoire',ref:'985629',img:'/mn/985629.png',slug:'985629'},
 {folder:'laboratoire',ref:'985630',img:'/mn/985630.png',slug:'985630'},
 {folder:'laboratoire',ref:'985636',img:'/mn/985636.png',slug:'985636'},
 {folder:'laboratoire',ref:'985638',img:'/mn/985638.png',slug:'985638'},
 {folder:'laboratoire',ref:'985650',img:'/mn/985650.png',slug:'985650'},
 {folder:'laboratoire',ref:'985657',img:'/mn/985657.png',slug:'985657'},
 {folder:'laboratoire',ref:'985664',img:'/mn/985664.png',slug:'985664'},
 {folder:'laboratoire',ref:'985665',img:'/mn/985665.png',slug:'985665'},
 {folder:'laboratoire',ref:'985668',img:'/mn/985668.png',slug:'985668'},
 {folder:'laboratoire',ref:'985669',img:'/mn/985669.png',slug:'985669'},
 {folder:'laboratoire',ref:'985673',img:'/mn/985673.png',slug:'985673'},
 {folder:'laboratoire',ref:'985674',img:'/mn/985674.png',slug:'985674'},
 {folder:'laboratoire',ref:'985676',img:'/mn/985676.png',slug:'985676'},
 {folder:'laboratoire',ref:'985680',img:'/mn/985680.png',slug:'985680'},
 {folder:'laboratoire',ref:'985681',img:'/mn/985681.png',slug:'985681'},
 {folder:'laboratoire',ref:'985683',img:'/mn/985683.png',slug:'985683'},
 {folder:'laboratoire',ref:'985688',img:'/mn/985688.png',slug:'985688'},
 {folder:'laboratoire',ref:'985822',img:'/mn/985822.png',slug:'985822'},
 {folder:'laboratoire',ref:'985825',img:'/mn/985825.png',slug:'985825'},
 {folder:'laboratoire',ref:'985838',img:'/mn/985838.png',slug:'985838'},
 {folder:'laboratoire',ref:'985859',img:'/mn/985859.png',slug:'985859'},
 {folder:'laboratoire',ref:'985871',img:'/mn/985871.png',slug:'985871'},
 {folder:'laboratoire',ref:'985890',img:'/mn/985890.png',slug:'985890'},
];

const defs=Object.fromEntries(productCategories.map(c=>[c.key,c]));
const aliases=Object.fromEntries(productCategories.map(c=>[c.slug,c.key]));
const products=catalogProducts.map(p=>({...p,folder:p.category,ref:p.name}));
const categories=productCategories.map(c=>({...c,count:products.filter(p=>p.category===c.key).length,cover:c.key==='Temperature Data Loggers'?products.find(p=>p.slug==='testo-174-t-temperature-data-logger')?.img:products.find(p=>p.category===c.key)?.img}));
const featuredCategoryKeys=['Temperature Measurement','Thermal Imaging','Electrical Measurement','Humidity & Climate','Pressure Measurement','Combustion & Flue Gas Analysis'];
const slides=[
 {k:'OPTIMAL MÉTRIE',title:'La mesure au service de vos projets.',desc:'Instrumentation, analyse de laboratoire et solutions techniques pour accompagner les professionnels avec précision, fiabilité et expertise.',img:heroGeneralLaboratory,to:'/produits',baked:false,cta:'Découvrir nos solutions'},
 {k:'MACHEREY-NAGEL',title:'Analyse & laboratoire.',desc:'Tests, réactifs et solutions MACHEREY-NAGEL pour le contrôle et l’analyse de l’eau.',img:heroLaboratory,to:'/produits/macherey-nagel',baked:true,cta:'Découvrir MACHEREY-NAGEL'},
 {k:'TESTO',title:'Mesure & contrôle.',desc:'Instruments TESTO pour la température, l’humidité, la pression, la vitesse d’air et bien plus.',img:heroMeasure,to:'/produits/testo',baked:true,cta:'Découvrir TESTO'},
 {k:'DÉSHUMIDIFICATEUR',title:'Maîtrisez l’humidité.',desc:'Des solutions professionnelles de déshumidification pour protéger vos espaces et vos équipements.',img:heroDehumidification,to:'/deshumidification',baked:true,cta:'Voir les déshumidificateurs'}
];
function Header(){
 const[open,setOpen]=React.useState(false),[mega,setMega]=React.useState(false),[scrolled,setScrolled]=React.useState(false),[hidden,setHidden]=React.useState(false),[searchOpen,setSearchOpen]=React.useState(false),[query,setQuery]=React.useState('');
 const lastY=React.useRef(0);
 React.useEffect(()=>{
  const onScroll=()=>{
   const y=window.scrollY;
   const delta=y-lastY.current;
   setScrolled(y>18);
   if(y<90){setHidden(false)}
   else if(Math.abs(delta)>7){
    if(delta>0&&y>150){setHidden(true);setMega(false)}
    else if(delta<0){setHidden(false)}
   }
   lastY.current=y;
  };
  lastY.current=window.scrollY;onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)
 },[]);
 React.useEffect(()=>{if(open)setHidden(false)},[open]);
 const close=()=>{setOpen(false);setMega(false)};
 const normalized=query.trim().toLowerCase();
 const searchResults=normalized.length<2?[]:products.filter(p=>{const c=defs[p.category];return [p.name,p.ref,p.brand,c?.title,c?.eyebrow].filter(Boolean).join(' ').toLowerCase().includes(normalized)}).slice(0,8);
 React.useEffect(()=>{const esc=e=>{if(e.key==='Escape')setSearchOpen(false)};window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc)},[]);
 const openSearch=()=>{setSearchOpen(true);setOpen(false);setMega(false);setHidden(false);setTimeout(()=>document.querySelector('.globalSearchInput')?.focus(),50)};
 return <><header className={`siteHeader ${scrolled?'scrolled':''} ${hidden&&!open?'headerHidden':''}`}>
  <Link className="brand brandNew" to="/" onClick={close}><img src={brandLogo} alt="Optimal Métrie"/><div><b>OPTIMAL MÉTRIE</b><small>INSTRUMENTATION & MESURE</small></div></Link>
  <nav className={`premiumNav ${open?'open':''}`}>
   <NavLink className="navHomeIcon" to="/" onClick={close} aria-label="Accueil" title="Accueil"><HomeIcon size={20}/><span className="navHomeLabel">Accueil</span></NavLink>
   <span className="navProducts" onMouseEnter={()=>setMega(true)} onMouseLeave={()=>setMega(false)}>
    <NavLink to="/produits" onClick={()=>setOpen(false)}><span>Produits</span><ChevronDown size={13}/></NavLink>
    {mega&&<div className="mega megaNew brandMega"><Link className="megaBrandChoice" onClick={close} to="/produits/testo"><img src={testoLogo} alt="Testo"/><div><small>INSTRUMENTATION TESTO</small><b>Instruments de mesure professionnels</b><span>Découvrir →</span></div></Link><Link className="megaBrandChoice" onClick={close} to="/produits/macherey-nagel"><img src={mnLogo} alt="MACHEREY-NAGEL"/><div><small>LABORATOIRE & ANALYSE</small><b>Tests, réactifs & analyse laboratoire</b><span>Découvrir →</span></div></Link></div>}
   </span>
   <NavLink to="/deshumidification" onClick={close}><span>Déshumidificateur</span></NavLink>
   <NavLink to="/secteurs" onClick={close}><span>Secteurs</span></NavLink>
   <NavLink to="/a-propos" onClick={close}><span>À propos</span></NavLink>
   <NavLink to="/contact" onClick={close}><span>Contact</span></NavLink>
  </nav>
  <button className="searchTrigger" aria-label="Rechercher un produit" title="Rechercher" onClick={openSearch}><Search size={20}/><span>Rechercher</span></button>
  <Link className="quote" to="/contact">Demander un devis <ArrowRight size={16}/></Link>
  <button className="hamb" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </header>
 {searchOpen&&<div className="searchOverlay" role="dialog" aria-modal="true" aria-label="Recherche produits" onMouseDown={e=>{if(e.target===e.currentTarget)setSearchOpen(false)}}><div className="searchPanel"><div className="searchPanelTop"><div><small>CATALOGUE OPTIMAL MÉTRIE</small><h2>Que recherchez-vous ?</h2></div><button onClick={()=>setSearchOpen(false)} aria-label="Fermer la recherche"><X size={23}/></button></div><div className="searchInputWrap"><Search size={21}/><input className="globalSearchInput" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Produit, référence, marque…"/><span>{normalized.length>=2?`${searchResults.length}${searchResults.length===8?'+':''} résultat${searchResults.length!==1?'s':''}`:'Saisissez au moins 2 caractères'}</span></div><div className="searchResults">{normalized.length<2?<div className="searchHint"><b>Recherche rapide</b><p>Essayez « PF-12 », « Testo 750 », « pH », « photomètre » ou une référence produit.</p></div>:searchResults.length?searchResults.map(p=>{const c=defs[p.category];return <Link key={`${p.category}-${p.slug}`} className="searchResult" to={`/produits/${c.slug}/${p.slug}`} onClick={()=>{setSearchOpen(false);setQuery('')}}><div className="searchThumb"><img src={p.img} alt=""/></div><div><small>{p.brand} · {c.title}</small><strong>{p.name || p.ref}</strong><span>Réf. {p.ref}</span></div><ArrowRight size={18}/></Link>}):<div className="searchHint noResult"><b>Aucun produit trouvé</b><p>Essayez un nom plus court, une référence ou une catégorie.</p></div>}</div></div></div>}
 </>
}
function Hero(){const[slide,setSlide]=React.useState(0);React.useEffect(()=>{const t=setInterval(()=>setSlide(s=>(s+1)%slides.length),6000);return()=>clearInterval(t)},[]);const s=slides[slide],go=n=>setSlide((n+slides.length)%slides.length);return <section className="hero heroCampaign"><div className="campaignMedia">{slides.map((item,i)=><img className={`campaignImage ${i===slide?'active':''}`} key={i} src={item.img} alt={item.k} aria-hidden={i!==slide}/>)}</div>{!s.baked&&<div className="campaignShade"/>}<div className="campaignContent" key={`content-${slide}`}>{!s.baked?<div className="campaignCopy"><span>{s.k}</span><h1>{s.title}</h1><p>{s.desc}</p><Link to={s.to}>{s.cta || 'Découvrir nos solutions'} <ArrowRight size={18}/></Link></div>:<Link className="bakedHeroCta" to={s.to}>{s.cta} <ArrowRight size={18}/></Link>}</div><div className="heroIndex">{String(slide+1).padStart(2,'0')} <i/> {String(slides.length).padStart(2,'0')}</div><div className="sliderNav"><button onClick={()=>go(slide-1)}><ChevronLeft/></button>{slides.map((x,i)=><button aria-label={x.k} key={i} className={`bar ${i===slide?'active':''}`} onClick={()=>setSlide(i)}><span/></button>)}<button onClick={()=>go(slide+1)}><ChevronRight/></button></div></section>}
function Home(){let featured=featuredCategoryKeys;return <main><Hero/><section className="statement"><span>OPTIMAL MÉTRIE / TUNISIE</span><h2>Mesurer avec confiance.<br/><em>Décider avec précision.</em></h2><p>Instrumentation, laboratoire et process : des solutions techniques sélectionnées pour les exigences du terrain.</p></section><section className="products"><div className="sectionTop"><span>01 / UNIVERS PRODUITS</span><h2>Nos instruments</h2><p>Explorez nos principales familles d’instruments.</p></div>{featured.map((k,i)=>{let c=categories.find(x=>x.key===k), slug=c.slug;return <article className={`productRow ${i%2?'reverse':''}`} key={k}><div className="productText"><span>{String(i+1).padStart(2,'0')} / {c.unit}</span><h3>{c.eyebrow}</h3><p>{c.desc}</p><Link to={`/produits/${slug}`}>Explorer la gamme <ArrowRight size={18}/></Link></div><div className="productImage"><b>{c.unit}</b><img src={c.cover} alt={c.title}/><span className="cross">+</span></div></article>})}<div className="catalogueMore"><Link to="/produits">VOIR TOUT LE CATALOGUE <ArrowRight/></Link></div></section><section className="humidity"><div className="humidityVisual humidityPhoto"><img src={humidityIndustrial} alt="Déshumidificateurs industriels professionnels"/></div><div className="humidityCopy"><span>02 / CONTRÔLE DE L’HUMIDITÉ</span><h2>L’humidité est un problème récurrent en Tunisie.</h2><p>Des solutions de déshumidification adaptées aux logements comme aux environnements professionnels.</p><Link className="lightBtn" to="/deshumidification">Découvrir les solutions <ArrowRight/></Link></div></section><MNAnalysis/><References/><ContactBlock/></main>}
function MNAnalysis(){
  const mnKeys=['02_Test_Papers_and_Reagent_Papers','04_QUANTOFIX_Test_Strips','09_VISOCOLOR_ECO','12_NANOCOLOR_Tube_Tests'];
  const items=mnKeys.map(key=>{
    const category=productCategories.find(c=>c.key===key);
    const product=catalogProducts.find(p=>p.category===key && p.brand==='Macherey-Nagel');
    return {category,product};
  }).filter(x=>x.category&&x.product);
  return <section className="mnAnalysis">
    <div className="mnAnalysisIntro">
      <div><span>03 / ANALYSE & TESTS</span><strong>MACHEREY-NAGEL</strong></div>
      <div><h2>L’analyse simple,<br/><em>rapide et fiable.</em></h2><p>Optimal Métrie propose aussi une gamme complète de solutions MACHEREY-NAGEL pour l’analyse rapide, le contrôle de l’eau et le laboratoire : papiers tests, bandelettes, réactifs et tests colorimétriques.</p><Link to="/produits">Découvrir l’univers analyse <ArrowRight size={18}/></Link></div>
    </div>
    <div className="mnCategoryShowcase">
      {items.map(({category,product},i)=><Link className="mnShowcaseCard" to={`/produits/${category.slug}`} key={category.key}>
        <div className="mnCardTop"><span>{String(i+1).padStart(2,'0')}</span><b>{category.unit}</b></div>
        <div className="mnProductVisual"><img src={product.img} alt={category.title}/><i>MN</i></div>
        <small>{category.eyebrow}</small><h3>{category.title}</h3><p>{category.desc}</p><strong>Explorer <ArrowRight size={17}/></strong>
      </Link>)}
    </div>
  </section>
}

function References(){const refs=[{logo:delice,name:"Délice"},{logo:gipa,name:"GIPA"},{logo:poulina,name:"Poulina Group Holding"},{logo:thera,name:"THERA Laboratoires"},{logo:dick,name:"Dick"},{logo:saiph,name:"SAIPH"}];return <section className="references"><div className="referencesHead"><span>04 / NOS RÉFÉRENCES</span><h2>Ils nous font confiance.</h2><p>Des entreprises et institutions de référence choisissent Optimal Métrie pour leurs besoins en instrumentation et mesure.</p></div><div className="referenceGrid">{refs.map((ref,i)=><div className="referenceCard" key={i}><div className="referenceLogo"><img src={ref.logo} alt={ref.name}/></div><span>{ref.name}</span></div>)}</div></section>}
function ContactBlock(){return <section className="contact"><span>VOTRE PROJET</span><h2>Vous avez trouvé le bon produit ?</h2><p>Contactez Optimal Métrie pour connaître la disponibilité, obtenir des informations ou demander un devis.</p><Link to="/contact">NOUS CONTACTER <ArrowRight/></Link></section>}
function Catalogue(){return <main><section className="productUniverseHero"><span>CATALOGUE / OPTIMAL MÉTRIE</span><h1>Choisissez votre<br/><em>univers produits.</em></h1><p>Accédez directement à la gamme correspondant à votre besoin.</p></section><section className="brandUniverseGrid"><Link className="brandUniverse testoUniverse" to="/produits/testo"><div className="brandLogoStage"><div className="measurementField" aria-hidden="true"><div className="scanBeam"></div><svg className="signalScope" viewBox="0 0 700 250" preserveAspectRatio="none"><path className="signalGrid" d="M0 50H700 M0 100H700 M0 150H700 M0 200H700 M100 0V250 M200 0V250 M300 0V250 M400 0V250 M500 0V250 M600 0V250"/><path className="signalLine signalLineOne" d="M0 132 C45 132 48 132 66 132 C83 132 86 72 104 72 C122 72 124 174 145 174 C165 174 168 111 188 111 C208 111 211 132 232 132 L282 132 C300 132 304 92 321 92 C340 92 343 156 361 156 C380 156 384 119 402 119 C421 119 425 132 448 132 L700 132"/><path className="signalLine signalLineTwo" d="M0 181 C60 181 72 181 92 181 C112 181 116 155 137 155 C158 155 163 202 185 202 C206 202 211 170 234 170 C256 170 263 181 288 181 L700 181"/></svg><div className="dataDot dotOne"></div><div className="dataDot dotTwo"></div><span className="metric metricTemp">23.6 °C</span><span className="metric metricRh">48 %RH</span><span className="metric metricPa">1013 hPa</span><span className="metric metricFlow">2.4 m/s</span></div><img src={testoLogo} alt="Testo"/></div><div className="brandUniverseCopy"><span>01 / TESTO</span><h2>Instrumentation<br/>Testo</h2><p>Instruments professionnels pour la mesure, le contrôle, le diagnostic et la maintenance.</p><strong>DÉCOUVRIR L’INSTRUMENTATION <ArrowRight size={18}/></strong></div></Link><Link className="brandUniverse mnUniverse" to="/produits/macherey-nagel"><div className="brandLogoStage"><div className="bubbleField" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><img src={mnLogo} alt="MACHEREY-NAGEL"/></div><div className="brandUniverseCopy"><span>02 / MACHEREY-NAGEL</span><h2>Laboratoire<br/>& analyse</h2><p>Papiers tests, bandelettes, réactifs, analyses de l’eau et solutions de laboratoire.</p><strong>DÉCOUVRIR L’ANALYSE <ArrowRight size={18}/></strong></div></Link></section></main>}
function BrandCatalogue({brand}){const isTesto=brand==='Testo';const brandProducts=products.filter(p=>p.brand===brand);const brandCats=categories.filter(c=>brandProducts.some(p=>p.category===c.key));return <main><section className="brandCatalogueHero"><img src={isTesto?testoLogo:mnLogo} alt={isTesto?'Testo':'MACHEREY-NAGEL'}/><div><span>{isTesto?'TESTO / INSTRUMENTATION':'MACHEREY-NAGEL / LABORATOIRE & ANALYSE'}</span><h1>{isTesto?'Instrumentation Testo':'Laboratoire & analyse'}</h1><p>{brandProducts.length} produits répartis dans {brandCats.length} catégories.</p></div></section>{isTesto&&<div className="testoStockNotice" role="status"><strong>Disponibilité des produits TESTO</strong><p>Notre stock TESTO est actuellement en cours de mise à jour. Pour connaître la disponibilité d’un produit, veuillez nous contacter directement.</p></div>}<section className="categoryGrid">{brandCats.map((c,i)=><Link className="categoryCard" to={`/produits/${c.slug}`} key={c.key}><div><span>{String(i+1).padStart(2,'0')} / {c.unit}</span><b>{brandProducts.filter(p=>p.category===c.key).length} PRODUITS</b></div><img src={brandProducts.find(p=>p.category===c.key)?.img||c.cover} alt={c.title}/><h2>{c.title}</h2><p>{c.desc}</p><strong>EXPLORER <ArrowRight size={17}/></strong></Link>)}</section></main>}
function Category(){let{slug}=useParams(),key=aliases[slug],d=defs[key];let list=products.filter(p=>p.category===key);if(!d)return <NotFound/>;return <main><section className="catHero"><div><span>CATALOGUE / {d.eyebrow}</span><h1>{d.title}</h1><p>{d.desc}</p><small>{list.length} solutions disponibles</small></div><div className="catHeroVisual"><b>{d.unit}</b>{list[0]&&<img src={list[0].img}/>}</div></section><section className="catalogueBar"><div><b>{d.title}</b><span>{list.length} produits</span></div><Link to="/produits">← Toutes les catégories</Link></section><section className="productGrid">{list.map(p=><Link to={`/produits/${slug}/${p.slug}`} className="catalogCard" key={p.img}><div><img src={p.img} alt={p.ref}/><span>{d.unit}</span></div><small>{d.eyebrow}</small><h3>{p.name || p.ref}</h3><p className="catalogRef">Réf. {p.ref}</p><b>VOIR LE PRODUIT <ArrowRight size={15}/></b></Link>)}</section><ContactBlock/></main>}
function Product(){
 let{slug,productSlug}=useParams(),key=aliases[slug],d=defs[key],p=products.find(x=>x.category===key&&x.slug===productSlug);if(!p)return <NotFound/>;
 const info=productDetails[p.slug];
 const description=info?.short||`Découvrez ${p.ref}, une solution ${p.brand} proposée par Optimal Métrie. Pour garantir l’exactitude des informations, les caractéristiques détaillées sont publiées uniquement après vérification de la documentation fabricant.`;
 const advantages=info?.advantages||['Produit professionnel sélectionné par Optimal Métrie','Conseil et accompagnement pour votre application','Disponibilité et configuration sur demande'];
 const applications=info?.applications||[d.desc];
 return <main className="productPage">
  <nav className="productBreadcrumb"><Link to="/produits">Produits</Link><span>/</span><Link to={p.brand==='Testo'?'/produits/testo':'/produits/macherey-nagel'}>{p.brand}</Link><span>/</span><Link to={`/produits/${slug}`}>{d.title}</Link><span>/</span><b>{p.name || p.ref}</b></nav>
  <section className="productDetail productDetailPro">
   <div className="productPhotoPro"><div className="productBrandPill">{p.brand}</div><div className={`productImageGallery ${p.images?.length>1?'hasMultiple':''}`}>{(p.images||[p.img]).map((image,i)=><img key={image} src={image} alt={`${p.name || p.ref}${i?' – vue 2':''}`}/>)}</div><span className="productUnit">{d.unit}</span></div>
   <div className="productInfoPro"><small>{d.eyebrow}{info?.reference?` · RÉF. ${info.reference}`:''}</small><h1>{p.name || p.ref}</h1><p className="productLead">{description}</p><div className="advantageBox"><h2>Vos avantages</h2><ul>{advantages.map((x,i)=><li key={i}><i>✓</i><span>{x}</span></li>)}</ul></div><div className="productActions"><Link className="detailQuote" to={`/contact?produit=${encodeURIComponent(p.name || p.ref)}`}>DEMANDER UN DEVIS <ArrowRight/></Link><a className="productContactLink" href="tel:+21655018672"><Phone size={17}/> +216 55 018 672</a></div></div>
  </section>
  <section className="productBody">
   <div className="productBodyMain"><span className="sectionKicker">DESCRIPTION</span><h2>À propos du produit</h2><p>{description}</p><h3>Applications</h3><div className="applicationGrid">{applications.map((x,i)=><div key={i}><b>{String(i+1).padStart(2,'0')}</b><span>{x}</span></div>)}</div></div>
   <aside className="productSideCard"><span>OPTIMAL MÉTRIE</span><h3>Besoin d’un conseil ?</h3><p>Notre équipe vous aide à identifier la configuration adaptée à votre application et à obtenir un devis.</p><Link to={`/contact?produit=${encodeURIComponent(p.name || p.ref)}`}>NOUS CONTACTER <ArrowRight size={17}/></Link></aside>
  </section>
  <section className="technicalSection"><div className="technicalHeading"><span>DONNÉES PRODUIT</span><h2>Caractéristiques techniques</h2></div>{info?.specs?<div className="specTable">{info.specs.map(([a,b],i)=><div className="specRow" key={i}><span>{a}</span><b>{b}</b></div>)}</div>:<div className="specPending"><b>Documentation technique en cours de vérification</b><p>Nous ajoutons les données uniquement à partir des documents officiels du fabricant afin d’éviter toute information technique approximative.</p></div>}
   {info?.sourceUrl&&<p className="manufacturerSource">Données vérifiées à partir de la documentation officielle du fabricant. <a href={info.sourceUrl} target="_blank" rel="noreferrer">Consulter la source fabricant ↗</a></p>}
  </section>
  <ContactBlock/>
 </main>
}
function DehumidifierProduct(){
 const {productSlug}=useParams(); const p=dehumidifiers.find(x=>x.slug===productSlug); if(!p)return <NotFound/>;
 const info=dehumidifierDetails[p.slug]; const brand=info?.brand||'Optimal Métrie';
 const description=info?.short||p.desc;
 const advantages=info?.advantages||['Solution de déshumidification sélectionnée par Optimal Métrie','Configuration et disponibilité sur demande','Accompagnement pour identifier la solution adaptée'];
 const applications=info?.applications||['Contrôle de l’humidité','Séchage et protection des locaux','Applications professionnelles selon configuration'];
 return <main className="productPage dehumidifierProductPage">
  <nav className="productBreadcrumb"><Link to="/">Accueil</Link><span>/</span><Link to="/deshumidification">Déshumidificateurs</Link><span>/</span><b>{p.name}</b></nav>
  <section className="productDetail productDetailPro">
   <div className="productPhotoPro"><div className="productBrandPill">{brand}</div><img src={p.img} alt={p.name}/><span className="productUnit">{p.model}</span></div>
   <div className="productInfoPro"><small>DÉSHUMIDIFICATION · {p.group.toUpperCase()}</small><h1>{p.name}</h1><p className="productLead">{description}</p><div className="advantageBox"><h2>Vos avantages</h2><ul>{advantages.map((x,i)=><li key={i}><i>✓</i><span>{x}</span></li>)}</ul></div><div className="productActions"><Link className="detailQuote" to={`/contact?produit=${encodeURIComponent(p.name)}`}>DEMANDER UN DEVIS <ArrowRight/></Link><a className="productContactLink" href="tel:+21655018672"><Phone size={17}/> +216 55 018 672</a></div></div>
  </section>
  <section className="productBody"><div className="productBodyMain"><span className="sectionKicker">DESCRIPTION</span><h2>À propos du produit</h2><p>{description}</p><h3>Applications</h3><div className="applicationGrid">{applications.map((x,i)=><div key={i}><b>{String(i+1).padStart(2,'0')}</b><span>{x}</span></div>)}</div></div><aside className="productSideCard"><span>OPTIMAL MÉTRIE</span><h3>Quel modèle pour votre besoin ?</h3><p>Notre équipe vous accompagne selon le volume du local, la température, le taux d’humidité et l’application.</p><Link to={`/contact?produit=${encodeURIComponent(p.name)}`}>DEMANDER UN DEVIS <ArrowRight size={17}/></Link></aside></section>
  <section className="technicalSection"><div className="technicalHeading"><span>DONNÉES PRODUIT</span><h2>Caractéristiques techniques</h2></div>{info?.specs?<div className="specTable">{info.specs.map(([a,b],i)=><div className="specRow" key={i}><span>{a}</span><b>{b}</b></div>)}</div>:<div className="specPending"><b>Caractéristiques détaillées sur demande</b><p>Les données non vérifiées ne sont pas publiées. Optimal Métrie peut confirmer la configuration et la fiche technique correspondant à ce modèle.</p></div>}{info?.sourceUrl&&<p className="manufacturerSource">Données techniques vérifiées à partir de la documentation fabricant. <a href={info.sourceUrl} target="_blank" rel="noreferrer">Consulter la source fabricant ↗</a></p>}</section>
  <ContactBlock/>
 </main>
}

function Dehumidification(){const [filter,setFilter]=React.useState('Tous'); const groups=['Tous','Domestique','Portable & chantier','Professionnel','Industriel']; const shown=filter==='Tous'?dehumidifiers:dehumidifiers.filter(p=>p.group===filter); return <main><section className="pageHero dehum visualHero" style={{'--hero-image':`url(${pageDehumidification})`}}><div className="pageHeroCopy"><span>SOLUTION / HUMIDITÉ</span><h1>Maîtrisez<br/><em>l’humidité.</em></h1><p>Solutions domestiques, portables et professionnelles pour maintenir les conditions d’humidité souhaitées.</p></div></section><section className="dehumCatalogue"><div className="dehumIntro"><div><span>GAMME / DÉSHUMIDIFICATION</span><h2>Une solution pour chaque environnement.</h2></div><p>Du confort domestique aux installations industrielles, découvrez notre sélection de solutions de déshumidification.</p></div><div className="dehumFilters">{groups.map(g=><button key={g} className={filter===g?'active':''} onClick={()=>setFilter(g)}>{g}<small>{g==='Tous'?dehumidifiers.length:dehumidifiers.filter(p=>p.group===g).length}</small></button>)}</div><div className="dehumGrid">{shown.map((p,i)=><article className="dehumCard" key={p.model}><div className="dehumPhoto"><span>{String(i+1).padStart(2,'0')}</span><img src={p.img} alt={p.name}/></div><div className="dehumBody"><small>{p.group.toUpperCase()} / {p.model}</small><h3>{p.name}</h3><p>{p.desc}</p><Link to={`/deshumidification/${p.slug}`}>Voir le produit <ArrowRight size={17}/></Link></div></article>)}</div></section><ContactBlock/></main>}
function Contact(){
 const params=new URLSearchParams(window.location.search), produit=params.get('produit')||'';
 return <main><section className="pageHero contactHero visualHero" style={{'--hero-image':`url(${pageContact})`}}><div className="pageHeroCopy"><span>CONTACT / OPTIMAL MÉTRIE</span><h1>Parlons de<br/><em>votre besoin.</em></h1><p>Pour un achat, une disponibilité ou un devis, contactez-nous directement.</p></div></section>
 <section className="contactHub"><div className="contactDetails"><span>CONTACT DIRECT</span><h2>Notre équipe vous répond.</h2><p>Précisez le produit ou l’application qui vous intéresse.</p><a href="mailto:optimalmetrie@gmail.com"><Mail/> <div><small>E-MAIL</small><b>optimalmetrie@gmail.com</b></div></a><a href="tel:+21655018672"><Phone/><div><small>TÉLÉPHONE</small><b>+216 55 018 672</b></div></a><a href="tel:+21652120134"><Phone/><div><small>TÉLÉPHONE</small><b>+216 52 120 134</b></div></a><a href="tel:+21656099585"><Phone/><div><small>TÉLÉPHONE</small><b>+216 56 099 585</b></div></a></div>
 <div className="quickQuote"><span>DEMANDE DE DEVIS</span><h2>{produit?produit:'Un produit vous intéresse ?'}</h2><p>Envoyez votre demande directement par e-mail. Le nom du produit sera inclus dans le message.</p><a className="orangeBtn" href={`mailto:optimalmetrie@gmail.com?subject=${encodeURIComponent('Demande de devis Optimal Métrie'+(produit?' — '+produit:''))}&body=${encodeURIComponent((produit?'Produit : '+produit+'\n\n':'')+'Bonjour, je souhaite recevoir des informations et un devis.\n\nNom / Société :\nTéléphone :\nBesoin :')}`}>ÉCRIRE UN E-MAIL <ArrowRight/></a></div></section>
 <section className="mapSection"><div className="mapCopy"><span>NOUS TROUVER</span><h2>Optimal Métrie<br/>en Tunisie.</h2><p className="addressLine"><MapPin size={18}/><span><strong>Route de Bizerte</strong><br/>El Mnihla, Rue Ali Sandid 2094<br/>Tunisie</span></p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=36.864791166619526,10.116403811314557">VOIR L’ITINÉRAIRE <ArrowRight size={16}/></a></div><iframe title="Localisation Optimal Métrie" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=36.864791166619526,10.116403811314557&z=16&output=embed"></iframe></section></main>
}
function About(){return <main><section className="pageHero visualHero" style={{'--hero-image':`url(${pageAbout})`}}><div className="pageHeroCopy"><span>OPTIMAL MÉTRIE / TUNISIE</span><h1>La mesure au service<br/><em>de vos projets.</em></h1><p>Optimal Métrie présente une sélection d’instruments, d’équipements techniques et de solutions de déshumidification pour les professionnels.</p></div></section><section className="simplePage"><h2>Un catalogue technique, un contact humain.</h2><p>Ce site vous permet d’explorer nos gammes. Pour toute disponibilité, information technique ou demande d’achat, notre équipe vous accompagne directement.</p><Link className="orangeBtn" to="/contact">CONTACTER OPTIMAL MÉTRIE <ArrowRight/></Link></section></main>}
function Sectors(){return <main><section className="pageHero visualHero" style={{'--hero-image':`url(${pageSectors})`}}><div className="pageHeroCopy"><span>SECTEURS / APPLICATIONS</span><h1>Des solutions pour<br/><em>le terrain.</em></h1><p>Instrumentation et contrôle pour l’industrie, le bâtiment, les laboratoires et la maintenance.</p></div></section><section className="sectorPage"><div><Microscope/><h3>Laboratoire</h3><p>Mesure, analyse et contrôle qualité.</p></div><div><Thermometer/><h3>Industrie</h3><p>Instrumentation pour process et maintenance.</p></div><div><Wind/><h3>HVAC & bâtiment</h3><p>Air, humidité, température et climatisation.</p></div><div><ShieldCheck/><h3>Maintenance</h3><p>Diagnostic, contrôle et prévention.</p></div></section><ContactBlock/></main>}
function NotFound(){return <main><section className="pageHero"><span>404</span><h1>Page introuvable.</h1><Link to="/produits">Retour au catalogue →</Link></section></main>}
function ScrollToTop(){
 const {pathname}=useLocation();
 React.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});},[pathname]);
 return null;
}
function SEO(){
 const {pathname}=useLocation();
 React.useEffect(()=>{
  const base='https://optimal-metrie.web.app';
  const clean=pathname==='/'?'/':pathname.replace(/\/$/,'');
  let title='Optimal Métrie | Instruments de mesure en Tunisie';
  let description='Optimal Métrie propose des instruments de mesure professionnels, solutions de laboratoire, analyse, HVAC, thermographie et déshumidification en Tunisie.';
  let image=base+'/optimal-metrie-logo-blue.png';
  let robots='index, follow, max-image-preview:large';
  const parts=clean.split('/').filter(Boolean);
  if(clean==='/produits'){title='Instruments de mesure professionnels | Optimal Métrie Tunisie';description='Découvrez le catalogue Optimal Métrie : instruments Testo, solutions MACHEREY-NAGEL, mesure de température, humidité, pression, HVAC, analyse et contrôle.';}
  else if(clean==='/produits/testo'){title='Instruments Testo en Tunisie | Optimal Métrie';description='Découvrez les instruments de mesure Testo proposés par Optimal Métrie en Tunisie : température, humidité, pression, débit d’air, thermographie, HVAC et maintenance.';}
  else if(clean==='/produits/macherey-nagel'){title='MACHEREY-NAGEL en Tunisie | Optimal Métrie';description='Solutions MACHEREY-NAGEL pour laboratoire et analyse en Tunisie : papiers tests, bandelettes, réactifs, analyses de l’eau et tests colorimétriques.';}
  else if(parts[0]==='produits'&&parts.length===2){const key=aliases[parts[1]],c=defs[key];if(c){title=`${c.title} | Optimal Métrie Tunisie`;description=`${c.desc} Découvrez la gamme professionnelle proposée par Optimal Métrie en Tunisie.`;}}
  else if(parts[0]==='produits'&&parts.length===3){const key=aliases[parts[1]],p=products.find(x=>x.category===key&&x.slug===parts[2]);if(p){const info=productDetails[p.slug];title=`${p.name||p.ref} | Optimal Métrie Tunisie`;description=(info?.short||`Découvrez ${p.name||p.ref}, ${p.brand}, disponible sur demande auprès d’Optimal Métrie en Tunisie.`).slice(0,160);}}
  else if(clean==='/deshumidification'){title='Déshumidificateurs en Tunisie | Optimal Métrie';description='Déshumidificateurs domestiques, professionnels et industriels en Tunisie. Découvrez les solutions Optimal Métrie pour maîtriser l’humidité.';}
  else if(parts[0]==='deshumidification'&&parts.length===2){const p=dehumidifiers.find(x=>x.slug===parts[1]);if(p){title=`${p.name} | Optimal Métrie Tunisie`;description=(dehumidifierDetails[p.slug]?.short||p.desc).slice(0,160);}}
  else if(clean==='/secteurs'){title='Solutions de mesure pour professionnels | Optimal Métrie';description='Solutions d’instrumentation et de contrôle pour l’industrie, le bâtiment, les laboratoires, HVAC et la maintenance en Tunisie.';}
  else if(clean==='/a-propos'){title='À propos d’Optimal Métrie | Tunisie';description='Optimal Métrie accompagne les professionnels en Tunisie avec des instruments de mesure, équipements techniques et solutions de déshumidification.';}
  else if(clean==='/contact'){title='Contact & devis | Optimal Métrie Tunisie';description='Contactez Optimal Métrie en Tunisie pour la disponibilité des produits, les informations techniques et vos demandes de devis.';}
  const setMeta=(name,content,property=false)=>{let el=document.head.querySelector(`meta[${property?'property':'name'}="${name}"]`);if(!el){el=document.createElement('meta');el.setAttribute(property?'property':'name',name);document.head.appendChild(el)}el.setAttribute('content',content)};
  document.title=title;setMeta('description',description);setMeta('robots',robots);setMeta('og:title',title,true);setMeta('og:description',description,true);setMeta('og:type','website',true);setMeta('og:url',base+clean,true);setMeta('og:image',image,true);setMeta('twitter:card','summary_large_image');setMeta('twitter:title',title);setMeta('twitter:description',description);
  let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=base+clean;
  let ld=document.getElementById('optimal-metrie-schema');if(ld)ld.remove();ld=document.createElement('script');ld.id='optimal-metrie-schema';ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'Optimal Métrie',url:base+'/',logo:base+'/optimal-metrie-logo-blue.png',email:'optimalmetrie@gmail.com',telephone:['+21655018672','+21652120134','+21656099585'],address:{'@type':'PostalAddress',streetAddress:'Route de Bizerte, El Mnihla, Rue Ali Sandid',postalCode:'2094',addressCountry:'TN'},contactPoint:[{'@type':'ContactPoint',telephone:'+21655018672',contactType:'sales',areaServed:'TN',availableLanguage:['fr','ar']}]});document.head.appendChild(ld);
 },[pathname]);return null;
}

function App(){return <><SEO/><ScrollToTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/produits" element={<Catalogue/>}/><Route path="/produits/testo" element={<BrandCatalogue brand="Testo"/>}/><Route path="/produits/macherey-nagel" element={<BrandCatalogue brand="Macherey-Nagel"/>}/><Route path="/produits/:slug" element={<Category/>}/><Route path="/produits/:slug/:productSlug" element={<Product/>}/><Route path="/deshumidification" element={<Dehumidification/>}/><Route path="/deshumidification/:productSlug" element={<DehumidifierProduct/>}/><Route path="/contact" element={<Contact/>}/><Route path="/a-propos" element={<About/>}/><Route path="/secteurs" element={<Sectors/>}/><Route path="*" element={<NotFound/>}/></Routes><footer><Link className="brand footerBrand" to="/"><img src={brandLogo} alt="Optimal Métrie"/><div>OPTIMAL <b>MÉTRIE</b></div></Link><p><a href="mailto:optimalmetrie@gmail.com">optimalmetrie@gmail.com</a> · <a href="tel:+21655018672">+216 55 018 672</a> · <a href="tel:+21652120134">+216 52 120 134</a> · <a href="tel:+21656099585">+216 56 099 585</a></p><small>© 2024 Optimal Métrie</small></footer></>}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
