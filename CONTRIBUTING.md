# Bijdragen aan OpenNederland.nl

Leuk dat je wilt bijdragen! 👋 Onze website is open source en **iedereen is uitgenodigd om mee te helpen**.

Onze content bestaat uit levende documenten. Iedereen kan verbeteringen voorstellen, typo's corrigeren, nieuwe initiatieven toevoegen of bestaande informatie actualiseren via een Pull Request.

## 🚀 Snel iets aanpassen?

Weet je niet precies waar het bestand staat dat je wilt wijzigen? Geen probleem.
In de **footer** (onderaan) van de meeste pagina's op de website vind je een directe link naar het bronbestand op GitHub.

1. Klik op de link in de footer op de website.
2. Je komt direct in het juiste bestand op GitHub.
3. Klik op het potlood-icoontje ✏️ om te bewerken (zie de stap-voor-stap instructies hieronder).

---

## 📂 Soorten Content (Collections)

De website is opgebouwd uit verschillende 'collections'. Dit zijn de mappen in deze repository waar je specifieke content kunt vinden en toevoegen:

| Onderdeel | Map | Omschrijving |
| :--- | :--- | :--- |
| **Tags** | `_tags` | Deze geven een overzicht van thema's en vormen de kern van de website. |
| **Initiatives** | `_initiatives` | Een overzicht van verklaringen, manifesten en petities. |
| **Platforms** | `_platforms` | Platformen van Nederlandse bodem waar open materiaal wordt gepubliceerd. |
| **Positions** | `_positions` | Uitgebreidere standpunten en posities van Open Nederland. |
| **Members** | `_members` | Profielen van onze leden (zowel personen als organisaties). |

---

## ✏️ Hoe werkt het bewerken?

Je hoeft geen developer te zijn om tekst aan te passen. We maken gebruik van GitHub, en je kunt veel direct in de browser doen.

### Een pagina bewerken via GitHub
Zie je een foutje, wil je een initiatief toevoegen of je profiel updaten?

1. Ga naar de betreffende pagina op [OpenNederland.nl](https://www.opennederland.nl) en klik op de Github link in de footer, **of** navigeer in deze repository naar de juiste map (zie tabel hierboven) en kies het bestand.
2. Klik op het potlood-icoontje ✏️ rechtsboven in het bestand.
3. Voer je wijzigingen door.
    * *Let op:* Elk bestand begint met 'Front Matter' (metadata tussen `---` streepjes). De tekst van de pagina staat daaronder en is geschreven in **Markdown**. (Hulp nodig bij Markdown? Gebruik deze [online editor](https://stackedit.io/)).
4. Klik onderaan op de groene knop **"Commit changes..."**.
5. Selecteer **"Create a new branch for this commit and start a pull request"** en klik op **Propose changes**.

Een beheerder kijkt je wijziging na en zet het live!

### Voor ontwikkelaars
Nieuwe functionaliteit of wijzigingen aan de layout zijn ook welkom! Maak voor grotere wijzigingen eerst even een [issue](https://github.com/opennederland/www.opennederland.nl/issues) aan waarin je beschrijft wat je wilt doen.

---

## 👤 Ledenprofiel Data Model

De ledenprofielen in de map `_members` bevatten specifieke gegevens in de 'Front Matter' (het blok bovenaan het bestand).

**Tip:** Voeg bij `social` je **GitHub-handle** toe. Dit maakt het voor ons veel makkelijker om te valideren dat jij het bent als je een wijziging indient (Pull Request).

Hieronder zie je welke velden je kunt gebruiken:

```yaml
---
title: "Voornaam Achternaam"     # De naam waarmee je op onze site wilt staan
website: "https://..."           # Je eigen website
image: "https://..."             # URL naar externe afbeelding of stuur ons een foto
tags: ["Open Source"]            # Kies uit onderstaande opties:
                                 # Makers, Open Access, Open Data, Open Design, 
                                 # Open GLAM, Open Onderwijs, Open Onderzoek, 
                                 # Open Overheid, Open Source, Open Zorg

organisaties: []                 # Organisaties waar je werkt (array)

# --- Velden voor intern beheer (niet aanpassen aub) ---
type: persoon                    # Wordt door Open Nederland ingevuld
lidnummer:                       # Wordt door Open Nederland ingevuld
# ------------------------------------------------------

affiliations:                    # Voeg hier je relevante lidmaatschap toe
  - "Open Nederland"

label: "Functietitel"            # Je rol of functie

work:                            # Huidige organisatie waar je werkzaam bent
  company: "Bedrijfsnaam"
  position: "Functie"
  website: "https://..."

rss: "https://..."               # RSS feed van je eigen website (voor nieuwsberichten)

social:                          # Lijst met URLs naar je profielen
  - "https://github.com/jouwnaam" 
  - "https://linkedin.com/in/..."
  - "https://..."
---