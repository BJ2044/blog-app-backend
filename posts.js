import { posts } from "./mongoConnect.js"

export const addPost = async (req, res) => {
  await posts.insertOne(req.body)
  res.send('Post was added')
}
