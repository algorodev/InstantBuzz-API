import { model, Schema } from 'mongoose'

const messageSchema = new Schema({
	chat_id: {
		type: Schema.Types.ObjectId,
		ref: 'Chat',
	},
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	content: {
		type: String,
		required: true,
	},
	sent_at: {
		type: Date,
		default: Date.now,
	},
})

const Message = model('Message', messageSchema)

export default Message
