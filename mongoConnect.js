import { MongoClient } from "mongodb" 
import 'dotenv/config'

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('Blog')
export const posts = database.collection('Posts')

client.connect()
console.group('Connected to Mongo')