# Security 2: Encrypt-R-Us

Voor de laatste opdracht van Security2 Encryptie is een webaplicatie ontwikkeld met behulp van Node JS. De applicatie kan een username, wachtwoord en geheime tekst opslaan.
De tekst wordt geencrypt opgeslagen en kan alleen met een overeenkomende username en password worden opgehaald/ gedecrypt.

De gebruikte technieken zijn onder andere:
- Express
- Mongoose (databse)
- Handlebars (view engine)
- jQuery 
- Crypto library (encrypten/ decrypten d.m.v. aes-256-cbc)

# Encryptieproces

1. Gebruiker van de webapp vult de velden naam, geheime tekst en wachtwoord in en drukt op verstuur
2. De naam wordt geencrypt door een default password (opgeslagen in de webapp)
3. Het wachtwoord wordt geencrypt met de zojuist geencrypte naam.
4. De geheime tekst wordt geencrypt met het zojuist geencrypte wachtwoord
5. De velden worden met een mongoose model (secret.js) opgeslagen in de database

# Decryptieproces

1. Gebruiker van de webapp vult de velden naam en wachtwoord in en drukt op verstuur
2. De naam wordt geencrypt door een default password (opgeslagen in de webapp)
3. Het wachtwoord wordt geencrypt met de zojuist geencrypte naam
4. In de database wordt een record (secret model) gezocht met de corresponderende naam en wachtwoord
5. Als er een model wordt gevonden wordt de geheime tekst gedecrypt met het geencrypte wachtwoord
6. De geheime tekst wordt getoond
