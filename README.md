# Estetica Colfelice

Sito: https://esteticacolfeliceroma.it

## Servizi

- **Sito:** GitHub Pages, repository `EsteticaColfelice/estetica-colfelice`.
- **Dominio e posta:** Aruba, https://my.aruba.it/.
- **Webmail:** https://webmail.aruba.it/ — `info@esteticacolfeliceroma.it`.
- **Rinnovo dominio:** scadenza 1 febbraio 2027. Verificare metodo di pagamento e rinnovo automatico nel pannello Aruba.

Password e codici di recupero devono essere conservati separatamente, mai nel repository.

## Modificare e pubblicare

Il sito è statico: HTML, CSS e JavaScript, senza database o compilazione.

- `index.html`: pagina iniziale.
- Gli altri file `.html`: pagine del sito e dei trattamenti.
- `FotoMarianna/`: fotografie.
- `logo.svg`, `favicon.svg`, `Logo/`: logo e icone.
- `privacy-policy.html`, `cookie-banner.js`: informativa e banner cookie.
- `sitemap.xml`, `robots.txt`: indicazioni per i motori di ricerca.
- `CNAME`: dominio personalizzato di GitHub Pages.

Per una modifica dal browser, aprire il file su GitHub, scegliere **Edit** e salvare con **Commit changes**. GitHub Pages pubblica dal branch `main`, cartella `/`.

Per lavorare in locale:

```sh
git clone https://github.com/EsteticaColfelice/estetica-colfelice.git
cd estetica-colfelice
python -m http.server 8000
```

L'anteprima è disponibile su http://localhost:8000. Dopo aver controllato le modifiche, eseguire commit e push su `main`. Usare percorsi relativi per immagini e collegamenti interni; aggiornare `sitemap.xml` quando si aggiungono o rimuovono pagine.

## Dominio e DNS

In **Settings > Pages** mantenere il dominio `esteticacolfeliceroma.it` e **Enforce HTTPS** attivo.

Record per GitHub Pages:

| Tipo | Nome | Valore |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | esteticacolfelice.github.io |

Conservare il TXT `_github-pages-challenge-esteticacolfelice` per la verifica GitHub, i record necessari alla posta e DNSSEC. Non modificare il DNS senza conoscere il servizio a cui appartiene ogni record.

## Accesso per chi segue il sito

La titolare può invitare l'account GitHub dell'incaricato da **Settings > Collaborators > Add people**, senza condividere la password. Rimuovere l'accesso quando non serve più.

Per dominio e posta, la titolare può operare dal proprio account Aruba oppure usare una delega, se disponibile. Gli accessi al Profilo dell'attività Google si gestiscono separatamente da **Impostazioni del profilo dell'attività > Persone e accesso**.

Prima di pubblicare, verificare collegamenti, immagini, contatti e visualizzazione da telefono. Tenere aggiornati dati aziendali, informative e gestione del consenso.
