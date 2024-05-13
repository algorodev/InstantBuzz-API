import { model, Schema } from 'mongoose'

const chatSchema = new Schema({
	participants: {
		type: [Schema.Types.ObjectId],
		ref: 'User',
		required: true,
	},
}, {
	timestamps: true,
})

const Chat = model('Chat', chatSchema)

export default Chat
