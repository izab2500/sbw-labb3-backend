# ☄️ API DOCS 

Nedan följer information om hur du installerar och använder API:et för att utföra CRUD-operationer.

## 📃 Installation

1. Klona repositoryt

- git clone https://github.com/izab2500/sbw-labb3-backend.git

2. Installera beroenden (npm packet)

- npm install 

3. Skapa och konfigurera (MongodDB och Mongoose)

- Gå till www.mongodb.com:
- Ladda ner "Community Edition" för ditt operativ-system.
- Se `.env.example` hur KEY=VALUE ska defineras.
- Starta express-server och anslut till databas.
- Kör `scripts/initDb.js` om du vill fylla databasen med testdata

 Detta skapar databasen **cv** om din MongoDb-URI (för lokal anslutning) slutar på /cv och collection **workexperiences** enligt schemat i config/db.js.


## 🌐 API-endpoints

| Metod | Endpoint                   | Beskrivning
--------|----------------------------|-------------------------------
|GET    | /api/v1/workexperiences    | Hämtar alla arbetserfarnheter |
|POST   | /api/v1/workexperiences    | Skapar en ny arbetserfarenhet |
|PUT    | /api/v1/workexperiences/:id| Uppdaterar en arbetserfarenhet|
|DELETE |/api/v1/workexperiences/:id | Raderar en arbetserfarenhet   |

## 🧩 JSON-format

API:et returnerar svar i JSON-format:

```json
{
  "success":true,
  "message": "beskrivande meddelande",
  "data": "objekt med värden"
}

{
  "success":false,
  "message":"beskrivande meddelande",
  "data": "objekt med tomt värde"
}
```

Förklaring:

- success: booelsk-värde som representerar om respons innehåller fel eller inte.

- message: innehåller någon form av information (t.ex. "Hämntning av arbetserfarenhet lyckades")

- data: innehåller resursdata eller inte. 


## 👀 Videodemostration

[Gå till video](https://youtu.be/Ro6Yrb1-Q1Q)

