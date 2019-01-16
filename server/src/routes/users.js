import { Router } from 'express'
import { catchAsync } from '../errors.js'
import userController from '../controllers/userController'

export default () => {
	const api = Router()

	api.get('/:_id', catchAsync(userController.findOne))
	api.get('/', catchAsync(userController.findAll))
	api.put('/:_id', catchAsync(userController.update))
	api.delete('/:_id', catchAsync(userController.remove))

	return api
}
