import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/dbConnection.js'
import User from './models/User.js'
import Chat from './models/Chat.js'
import Message from './models/Message.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello World! Welcome to InstantBuzz API.')
})

app.post('/users', async (req, res) => {
	const user = new User(req.body)

	try {
		await user.save()
		res.status(201).send(user)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.post('/chats', async (req, res) => {
	const chat = new Chat(req.body)

	try {
		await chat.save()
		res.status(201).send(chat)
	} catch (error) {
		res.status(500).send(error)
	}
})

app.post('/messages', async (req, res) => {
	const message = new Message(req.body)

	try {
		await message.save()
		res.status(201).send(message)
	} catch (error) {
		res.status(500).send(error)
	}
})

connectDB()

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
