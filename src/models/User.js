import { model, Schema } from 'mongoose'

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password_hash: {
		type: String,
		required: true
	},
}, {
	timestamps: true,
})

const User = model('User', userSchema)

export default User
