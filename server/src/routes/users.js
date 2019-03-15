import { Router } from 'express'
import { catchAsync } from '../middlewares/errors.js'
import userController from '../controllers/usersController'

export default () => {
	const api = Router()

	// localhost:8081/users/(id)
	api.get('/:_id', catchAsync(userController.findOne))
	api.get('/', catchAsync(userController.findAll))
	api.put('/:_id', catchAsync(userController.update))
	api.delete('/:_id', catchAsync(userController.remove))
	

	return api
}

