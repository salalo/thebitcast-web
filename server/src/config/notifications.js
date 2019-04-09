module.exports = {
	dbError: {
		message: 'Connection error, try again later',
		type: 'negative'
	},
	
	updateNotifsOptions: {
		message: 'Notifications options changed succesfully',
    type: 'positive'
	},
	
	updatePassword: {
		message: 'Password changed succesfully.',
    type: 'positive'
	},

	updateEmail: {
		message: 'Email changed succesfully.',
    type: 'positive'
	},

	emailTaken: {
		message: 'Email already taken',
    type: 'negative'
	},

	wrongPassword: {
		message: 'Wrong password',
    type: 'negative'
	},

	usernameTaken: {
		message: 'Username already taken',
    type: 'negative'
	},

	updateUsername: {
		message: 'Username updated succesfully',
    type: 'positive'
	},

	updateLocationAndLanguage: {
		message: 'Location and language options updated succesfully',
      type: 'positive'
	}
}