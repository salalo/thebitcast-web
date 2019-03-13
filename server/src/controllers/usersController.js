import usersModel from '../models/user.js'

export default {

	async findOne(req, res, next) {
		const USER = await usersModel.findOne({ _id: req.params._id })
		if (!user) return next()
		return res.status(200).send({ data: USER })  // Response to postman
	},

	async findAll(req, res) {
		const USERS = await usersModel.find().sort({ createdAt: 'desc' })  // Response to postman
		return res.status(200).send({ data: USERS })
	},

	async update(req, res, next) {
		const USER = await usersModel.find({ _id: req.params._id })
		if (!USER) return next()

		USER._id = req.body._id
		await USER.save()

		return res.status(200).send({ data: USER, message: `User was updated` })  // Response to postman
	},

	async remove(req, res, next) {
		const USER = await usersModel.findOne({ _id: req.params._id })
		if (!USER) return next()
		await USER.remove()

		return res.status(200).send({ message: `User was removed` })  // Response to postman
	}
}
