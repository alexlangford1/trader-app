require("dotenv").config()
const express = require("express")
const massive = require("massive")
const authCtrl = require("./authCtrl.tsx")

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set("db", db)
    console.log("DB Set")
})

// **********************************

app.post("/auth/register", authCtrl.regi)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))


// app.post("/auth/login", authCtrl.login)
// app.get("/auth/user-data", authCtrl.userData)

// // post get
// app.get("/api/posts", authCtrl.getPosts)

// // post create
// app.post("/api/posts", authCtrl.createPost)

// // post delete
// app.delete("/api/posts/:id", authCtrl.deletePost)

// // get all posts for a specific user, will use this list to delete
// app.get("/api/user/posts", authCtrl.getPostsByUser)

// //marking a post as taken
// app.put("/api/posts/:id", authCtrl.markTaken)

// // get post by id
// app.get("/api/post/:id", authCtrl.getPostById)

// // accept a post
// app.put("/api/post/:id", authCtrl.accPost)

// // get intersted people
// app.get("/api/interested/:id", authCtrl.interested)

// // get history of posts i've applied for
// app.get("/api/applied-for", authCtrl.appliedHistory)

// // route to a specific post in my applied history
// app.get("/api/applied-post/:id", authCtrl.appliedPost)

// app.put("/api/archive/:id", authCtrl.archive)

// // get filtered data
// app.post("/api/filtered", authCtrl.getFiltered)

