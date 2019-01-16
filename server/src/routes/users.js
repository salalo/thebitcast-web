import { Router } from 'express'
import { catchAsync } from '../errors.js'
import userController from '../controllers/userController'

export default () => {
	const api = Router()

	api.get('/:slug', catchAsync(userController.findOne))

	api.get('/', catchAsync(userController.findAll))

	api.post('/', catchAsync(userController.create))

	api.put('/:slug', catchAsync(userController.update))

	api.delete('/:slug', catchAsync(userController.remove))

	return api
}
