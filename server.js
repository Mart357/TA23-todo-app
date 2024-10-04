import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3006
const animals = ['koer', 'inimene', 'jõehobu']

const app = express()

app.get('/animals', (request, response) => {
    response.status(200).json(animals)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${ PORT }`)
})