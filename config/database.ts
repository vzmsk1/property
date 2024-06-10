import * as mongoose from 'mongoose'

let connected = false

const connectDb = async () => {
	mongoose.set('strictQuery', true)
	
	if (connected) {
		console.log('mongodb is already connected')
		return
	}
	
	if (process.env.MONGODB_URI) {
		try {
			await mongoose.connect(process.env.MONGODB_URI)
			connected = true
			console.log('mongodb connected')
		} catch (error) {
			console.log(error)
		}
	}
}

export default connectDb