# Website Vereniging Open Nederland

Welkom in de repository van [www.opennederland.nl](https://www.opennederland.nl), de website van Vereniging Open Nederland.

Deze website is statisch gegenereerd met [Jekyll](https://jekyllrb.com/).

## Help je mee?

Iedereen kan bijdragen, ook als je geen programmeur bent.
* Wil je een **foutje verbeteren**?
* Wil je een **lidmaatschapsprofiel** aanpassen?
* Wil je een **initiatief** of **platform** toevoegen?

👉 **[Lees onze Contribution Guidelines](CONTRIBUTING.md)** voor stap-voor-stap instructies.

---

## 🛠 Lokaal ontwikkelen

Ben je een ontwikkelaar en wil je wijzigingen lokaal testen of aan de layout werken? Volg dan deze stappen:

### Vereisten
* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (check je versie met `ruby -v`)
* [Bundler](https://bundler.io/) (`gem install bundler`)

### Installatie

1. Clone de repository:
   ```bash
   git clone [https://github.com/opennederland/www.opennederland.nl.git](https://github.com/opennederland/www.opennederland.nl.git)
   cd www.opennederland.nl
   ```

2.   Installeer de afhankelijkheden (Gems):
   ```Bash
   bundle install
   ```

3. De website draaien

Start de lokale server:
   ```Bash
   bundle exec jekyll serve
   ```

Je kunt de website nu bekijken op http://localhost:4000. Herlaadt de site als je wijzigingen aanbrengt in de bestanden.
## ⚖️ Licenties

Dit project hanteert twee verschillende licenties voor code en content.

### Broncode (Source Code)

Tenzij anders aangegeven is alle broncode in deze repository beschikbaar onder de EUPL V1.2 licentie.

   [Lees de volledige EUPL V1.2 tekst](https://eupl.eu/1.2/nl/)

### Inhoud (Content)

Tenzij anders aangegeven is alle content (tekst, afbeeldingen, data) in deze repository beschikbaar onder de CC BY-SA 4.0 licentie.

   [Lees de CC BY-SA 4.0 akte](https://creativecommons.org/licenses/by-sa/4.0/deed.nl)

Let op, op de website worden ook rss feeds van derden ingeladen, bekijk de bron van deze feeds om de licentie te bepalen.