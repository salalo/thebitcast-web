import User from '../models/user.js'

export default {
	async findOne(req, res, next) {
		const user = await User.findOne({ _id: req.params._id })
		if (!user) return next()
		return res.status(200).send({ data: user })
	},

	async findAll(req, res) {
		const users = await User.find().sort({ createdAt: 'desc' })
		return res.status(200).send({ data: users })
	},

	async update(req, res, next) {
		const user = await User.find({ _id: req.params._id })
		if (!user) return next()

		user.id = req.body.id
		await user.save()

		return res.status(200).send({ data: user, message: `User was updated` })
	},

	async remove(req, res, next) {
		const user = await User.findOne({ _id: req.params._id })
		if (!user) return next()
		await user.remove()

		return res.status(200).send({ message: `User was removed` })
	}
}
