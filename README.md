# Sito Estetica Colfelice

Sito ufficiale di **Estetica Colfelice**, Via Colfelice 20, Roma (Colli Albani)
Indirizzo: **https://esteticacolfeliceroma.it**

---

## In breve, per Marianna

**Cosa è tuo:** il codice del sito, i testi, le foto, il logo e il dominio `esteticacolfeliceroma.it`.

**Dove sta il sito:**

| Cosa | Dove | Costo |
|---|---|---|
| Pagine e foto del sito | GitHub Pages, repository `estetica-colfelice` nel tuo account GitHub | Gratuito |
| Dominio `esteticacolfeliceroma.it` | Aruba | Rinnovo annuale, **scadenza 1 febbraio 2027** |

**Cosa devi ricordare:**

1. **Rinnova il dominio su Aruba prima del 1 febbraio di ogni anno.** Se scade, il sito si spegne e qualcun altro può registrare quel nome.
2. Tieni al sicuro le credenziali di **GitHub** e **Aruba** e attiva la verifica in due passaggi su entrambi.
3. Le richieste dei clienti arrivano **solo su WhatsApp e per telefono** (+39 348 550 5465). Sul sito non ci sono moduli né indirizzi email.

**Quando affidi il sito a una nuova persona:**

- Non dare mai le tue password. Su GitHub aggiungi il suo account come collaboratore del repository (*Settings → Collaborators → Add people*). Su Aruba, se deve modificare il dominio, usa le funzioni di delega del pannello oppure fai tu le modifiche seguendo le sue indicazioni.
- Dagli questo file: contiene tutto quello che serve per rimettere mano al sito.
- A fine lavoro rimuovi il suo accesso.

---

## Per chi riprende il sito

### Com'è fatto

Sito **statico**: HTML, CSS e JavaScript scritti a mano. Non ci sono framework, build, CMS, database né backend. Ogni pagina è autonoma e ha il proprio CSS in un blocco `<style>` nell'`<head>`.

```
index.html                 Home: hero, trattamenti (accordion), galleria, chi siamo, prenota, recensioni
chi-siamo.html             Chi siamo
contatti.html              Contatti + mappa
prodotti.html              Prodotti (linea Methodist Skincare)
mani-piedi.html            ┐
estetica-avanzata.html     │
viso-sguardo.html          │ Una pagina per categoria di trattamento
dermopigmentazione.html    │
epilazione.html            │
massaggi.html              ┘
privacy-policy.html        Privacy e Cookie Policy
cookie-banner.js           Banner cookie (incluso in tutte le pagine)
FotoMarianna/              Tutte le foto del sito
logo.svg, favicon.svg      Logo e icona
Logo/                      Varianti del logo (chiaro, scuro, solo icona)
sitemap.xml, robots.txt    SEO
CNAME                      Dominio usato da GitHub Pages (non cancellarlo)
```

**Risorse esterne** (CDN pubblici, nessun account necessario):
- Google Fonts: *Playfair Display* (titoli) e *Lato* (testi)
- Font Awesome 6.4.0 da cdnjs (icone, comprese quelle di WhatsApp e dei social)
- Google Maps in embed nella pagina contatti

### Pubblicare una modifica

L'hosting è **GitHub Pages**: *Settings → Pages → Deploy from a branch → `main` / `(root)`*, dominio personalizzato `esteticacolfeliceroma.it`, *Enforce HTTPS* attivo.

Ogni commit su `main` va online da solo in 1-2 minuti.

- **Senza installare niente:** su github.com apri il file, clicca la matita (*Edit*), modifica e premi *Commit changes*.
- **In locale:**
  ```bash
  git clone https://github.com/<account>/estetica-colfelice.git
  cd estetica-colfelice
  python -m http.server 8000      # anteprima su http://localhost:8000
  # ...modifiche...
  git add -A && git commit -m "Descrizione modifica" && git push
  ```

Usa sempre percorsi **relativi** per foto e link interni (`FotoMarianna/foto.jpg`, `contatti.html`). Gli unici URL assoluti con il dominio sono nei metadati SEO e social (`og:image`, JSON-LD, `sitemap.xml`).

### Dominio e DNS (Aruba)

Il dominio è registrato presso **Aruba**, con DNS gestiti dal pannello Aruba e DNSSEC attivo. Record necessari per GitHub Pages:

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<account-github>.github.io` |
| TXT | `@` | `google-site-verification=…` (verifica Google Search Console, non toccare) |

Esiste anche un record MX di Aruba (`mx.esteticacolfeliceroma.it`), che il sito non usa.

Se cambi hosting (Netlify, Cloudflare Pages, hosting Aruba…), sostituisci i record A e CNAME con quelli indicati dal nuovo provider. Il `www` deve puntare all'account GitHub che ospita il repository: se il repository cambia proprietario, va aggiornato.

### Dove si cambiano i contenuti

| Cosa | Dove |
|---|---|
| **Numero di telefono / WhatsApp** | Compare in tutte le pagine in due forme: `393485505465` nei link `wa.me/…` e `tel:` e `+39 348 550 5465` nel testo. Per cambiarlo usa trova-e-sostituisci su tutti i file, compreso il JSON-LD di `index.html` (`"telephone"`). |
| Messaggio precompilato di WhatsApp | Parametro `?text=` dei link `wa.me`, codificato per URL (spazio = `%20`, virgola = `%2C`). |
| Orari di apertura | `index.html` (sezione prenota + JSON-LD `openingHoursSpecification`) e `contatti.html`. |
| Indirizzo | Footer e testi di quasi tutte le pagine, JSON-LD di ogni pagina trattamento, `privacy-policy.html`: cerca `Via Colfelice` in tutti i file. |
| Social | Instagram `@esteticacolfelice`, Facebook `esteticacolfeliceroma`: link nel footer. |
| Foto | Cartella `FotoMarianna/`. Se sostituisci un file tenendo lo stesso nome, la foto cambia ovunque. Hero: `hero-new.jpg` (desktop) e `hero-manicure.jpg` (mobile). Galleria: `gallery-1…10.jpg`. Prodotti: `prodotti-1…8.jpg`. Chi siamo: `about.jpg`, `marianna-1.jpg`, `marianna-2.jpg`. |
| Trattamenti | Descrizioni brevi nell'accordion di `index.html`, descrizioni complete nella pagina della categoria. |
| Logo | `logo.svg`, `favicon.svg`, varianti in `Logo/`. |

**Colori del brand** (variabili CSS `:root` in ogni pagina):

| Variabile | Colore | Uso |
|---|---|---|
| `--primary` | `#8AC6D0` | Azzurro principale |
| `--primary-light` | `#DFF7F4` | Sfondi chiari |
| `--primary-medium` | `#CBEDEF` | Sfondi intermedi |
| `--accent` | `#26A69A` | Bottoni, link, icone |
| `--text` | `#727475` | Testo |
| `--text-dark` | `#4a4a4a` | Titoli |

### SEO

- Ogni pagina ha `title`, `meta description`, tag Open Graph e dati strutturati JSON-LD (Schema.org `BeautySalon` in home, `Service` nelle pagine dei trattamenti).
- `sitemap.xml`: se aggiungi una pagina inseriscila qui e aggiorna `<lastmod>`.
- La proprietà **Google Search Console** è verificata con il record TXT sul dominio.

### Privacy e cookie

- `privacy-policy.html`: informativa GDPR standard. Il titolare deve verificarne i contenuti e tenerla aggiornata.
- `cookie-banner.js`: mostra il banner e salva la scelta nel cookie `cookie_consent` (`all` o `necessary`). Non blocca né attiva script: registra solo la preferenza.

### Da sistemare (aperti alla consegna)

1. **Partita IVA assente.** Per legge il sito di un'attività deve riportarla (art. 35 DPR 633/1972), di solito nel footer di tutte le pagine insieme alla ragione sociale. Vanno aggiunte anche nel "Titolare del trattamento" di `privacy-policy.html`.
2. **Consenso cookie.** Google Maps e Google Fonts si caricano prima del consenso. Per essere in regola: caricare la mappa solo dopo il consenso, oppure sostituirla con un'immagine e un link a Google Maps, e servire i font in locale.
3. **Foto pesanti.** La cartella `FotoMarianna/` pesa circa 25 MB e diverse foto superano i 2 MB. Convertirle in WebP o JPEG compressi (200-400 KB, lato lungo 1600-2000 px) rende il sito molto più veloce da mobile.
4. **Mappa.** L'embed in `contatti.html` punta genericamente a "Via Colfelice, Roma". Meglio usare l'embed della scheda Google Business del centro, che punta al civico esatto.
5. **Copyright.** Il footer riporta "© 2025": va aggiornato.
6. **Email.** Il sito non ha un indirizzo email. Se se ne attiva uno (per esempio `info@esteticacolfeliceroma.it` sul piano Aruba), va aggiunto in `contatti.html`, nel footer di `index.html`, in `privacy-policy.html` e nel JSON-LD (`"email"`).
