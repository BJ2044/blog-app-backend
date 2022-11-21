import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`Api working on port ${process.env.PORT}`))