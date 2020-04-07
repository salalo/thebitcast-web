# What's The Bitcast?

The Bitcast is a platform that tries to solve quality problem in podcasting niche. Also we tried to allow podcasters to earn fairer money for they work and let them focus on their passion by providing great platform and monetization system.

<br>

### <center>Please read this before continuing. </center>

#### I've decided to share process and our struggles on the project as a team in a nutshell so there you go.

#### We later on divided the project in different repos so the newest server part is a private repo, but you can see [mobile version](https://github.com/WojciechSala/thebitcast-mobile) which we worked on as the last.

#### The actual repository of web version is abandoned as we decided to go to the market with mobile app first. The mobile app would probably be used for bigger group of people, so until that we decided to change our priorities.

---

# Stack we used

### Front-end

- Vue.js
- Vuex for state management
- Axios and fetch for API requests
- SCSS preprocessor for readable CSS
- Vuetify for material design components and icons

### Back-end

- Node.js with express
- MongoDB at first but decided to switch to MySQL as it was a better solution for our case.
- Passport.js for auths
- Bcrypt for hashing passwords
- Joi for data validation

### Mobile

- React Native
- Redux
- Axios

### Design

- Adobe XD with Figma for design and prototyping
- Illustrator with Photoshop for graphics
- Material design style guides

### Team management

- Notion with trello for project management
- Github for developers
- Google drive for file sharing

---

# Challenges we faced

- Creating well thought design both on UI and UX side.
- The RWD was pretty hard, especially because we didn't made it "mobile first" at the beginning.
- Scalability played the first role to optimize the platform enough, choosing the right DB setup and backend stack took as a lot of learning.
- At some point we decided to use AWS to host our app which again gave us a lot of problems to face as well as knowledge that came with that.
- We had to learn a lot on JWT, authentication and authorization flows in general and different libraries.
- Managing the team and workflow to stay efficient as possible.

---

# Mistakes we made

- The biggest mistake was we didn't think everything at the beginning but started developing. We lost a lot of time changing the stack we used.
- We didn't code mobile first.
- We should have started from mobile app.
- Finally we didn't look for help outside in form of investors.

---

# Decision we determined

At some point where we lost our motivation we decided to pause the project and get a fresh start in the future with more experience.

#### Still even though we stopped we learned A LOT both technical and soft skills. We would never say that we lost our time doing this project.

---

# Installation

##### At that point the project is not hosted anywhere but you can run it locally.

1. Clone the repo `git clone https://github.com/WojciechSala/thebitcast-web.git`
2. Install all libraries in package.json directories (both client and server) `npm install`
3. Run the client and backend server by `npm run dev`
4. To see the other part of the app after login you will have to choose:
   - EASY way: go to client/src/components/Home/Desktop.vue and set v-if="true" to work around and pass the authentication.
   - HARD way: Set up MySQL db and keys.js for authentication and fully working app.

---

# Contribution

We don't expect any contributions, the project itself was meant to be commercialized and we still believe in reviving it at some point.

---

# Licensing

The license may at some point be custom made and we encourage to check it before any actions.
