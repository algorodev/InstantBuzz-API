import mongoose from 'mongoose'

export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.DB)

		console.log(`MongoDB Connected: ${connection.host}`)
	} catch (error) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}
