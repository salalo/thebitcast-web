module.exports = {
  dbError: {
    message: "Connection error, try again later",
    type: "negative",
    status: "500"
  },

  updateNotifsOptions: {
    message: "Notifications options changed succesfully",
    type: "positive",
    status: "200"
  },

  updatePassword: {
    message: "Password changed succesfully.",
    type: "positive",
    status: "200"
  },

  updateEmail: {
    message: "Email changed succesfully.",
    type: "positive",
    status: "200"
  },

  emailTaken: {
    message: "Email already taken",
    type: "negative",
    status: "500"
  },

  wrongPassword: {
    message: "Wrong password",
    type: "negative",
    status: "500"
  },

  usernameTaken: {
    message: "Username already taken",
    type: "negative",
    status: "500"
  },

  updateUsername: {
    message: "Username updated succesfully",
    type: "positive",
    status: "200"
  },

  updateLocationAndLanguage: {
    message: "Location and language options updated succesfully",
    type: "positive",
    status: "200"
  },

  sameEmail: {
    message: "Cannot change email to the same value",
    type: "negative",
    status: "500"
  },

  incorrectData: {
    message: "Inserted data are incorrect",
    type: "negative",
    status: "500"
  },

  invalidLanguage: {
    message: "Selected language is invalid",
    type: "negative",
    status: "400"
  },

  invalidRegion: {
    message: "Selected region is invalid",
    type: "negative",
    status: "400"
	},
	
	userAlreadyRegistered: {
    message: "User already registered",
    type: "negative",
    status: "500"
	},
	
	userRegister: {
    message: "User registered succesfully",
    type: "positive",
    status: "200"
	},
	
	captchaError: {
    message: "Captcha error",
    type: "negative",
    status: "500"
	},
	
	userRegister: {
    message: "User registered succesfully",
    type: "positive",
    status: "200"
	},
	
	userRegister: {
    message: "User registered succesfully",
    type: "positive",
    status: "200"
  },

  updateDescription: {
    message: "Description succesfully updated",
    type: "positive",
    status: "200"
  }
};
