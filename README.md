# Fin-Quest

## I. Project Setup and Structure

1. **Initialize Project:**
   - Clone the  project directory: 
     ```
     git clone https://github.com/Clusters-Config/Fin-Quest
     ```
   - Navigate into it: 
     ```
     cd Fin-Quest
     ```
     ```
     cd frontend
     ```
     
2. **Backend (Node.js/Express.js):**
   - Install dependencies:
     ```
     npm install 
     ```
     - **express:** Web framework.
     - **mongoose:** MongoDB object modeling.
     - **cors:** Enable Cross-Origin Resource Sharing.
     - **body-parser:** Parse request bodies.
     - **dotenv:** Load environment variables.
     - **jsonwebtoken:** For authentication (JWT).
     - **bcryptjs:** For password hashing.
     - **node** For the runtime

3. **Frontend (React):**
   - Create React app: 
     ```
     npx create-react-app client
     ```
   - Navigate into the client directory: 
     ```
     cd client
     ```
   - Install dependencies:
     ```
     npm install axios react-router-dom
     ```
     - **axios:** For making HTTP requests.
     - **react-router-dom:** For routing.

4. **Project Structure:**

   ``` bash
   Fin-quest/
   ├── client/ # React frontend
   │ ├── public/
   │ └── src/
   │ ├── components/
   │ ├── App.js
   │ └── ...
   ├── server/ # Node.js/Express backend
   │ ├── models/
   │ ├── routes/
   │ ├── config/
   │ ├── index.js
   │ └── ...
   └── .env # Environment variables
   ```

## II. Backend Development (server)

1. **Database (MongoDB):**
- Set up a MongoDB database (MongoDB Atlas is a good option).
- Create a `.env` file in the server directory and add your MongoDB connection URI:
  ```
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
  PORT=5000
  JWT_SECRET=your_jwt_secret
  ```

2. **Models (models/):**
- Create Mongoose models for users data and details

 ```
 // models/User.js
 const mongoose = require('mongoose');
 const userSchema = new mongoose.Schema({
     userType: { type: String, enum: ['SMB', 'Freelancer'], required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     // ... other fields (name, skills, profile, etc.)
     skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
 });

 // models/Skill.js
 const skillSchema = new mongoose.Schema({
     name: { type: String, required: true, unique: true },
 });

 // models/Module.js
 const moduleSchema = new mongoose.Schema({
     name: {type: String, required: true},
     description: {type: String},
     content: {type: String} // could store video links, text content, etc.
 });

 module.exports = mongoose.model('Module', moduleSchema);
 module.exports = mongoose.model('User', userSchema);
 module.exports = mongoose.model('Skill', skillSchema);
 ```

3. **Routes (routes/):**
- Create routes for user authentication (register, login), profile management, skill management, matching, and training modules.
- Use JWT for authentication.
- Example (routes/auth.js):

 ```
 const express = require('express');
 const router = express.Router();
 // ... imports

 router.post('/register', async (req, res) => { /* ... registration logic (hashing password, saving user) */ });
 router.post('/login', async (req, res) => { /* ... login logic (comparing passwords, generating JWT) */ });
 // ... other routes

 module.exports = router;
 ```

4. **Server Setup (index.js):**

 ```
 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 require('dotenv').config();
 
 const authRoutes = require('./routes/auth'); // Import routes

 const app = express();
 app.use(cors());
 app.use(express.json());

 mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => console.log("Connected to DB")).catch(console.error);

 app.use('/api/auth', authRoutes); // Use routes

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 ```

## III. Frontend Development (client)

1. **Components (components/):**
- Create React components for:
   * Login/Registration forms.
   * User profiles (displaying user info).
   * Personalized Learning Path
   * Gamification Adventure
   * Real World Simulation
   * AI - Driven Insights
   * Community Engagement
   * Facilitator


2. **Routing:**
- Use `react-router-dom` to handle navigation between different pages.

3. **API Calls:**
- Use `axios` to make API requests to the backend.
- Example:

 ```
 import axios from 'axios';

 const loginUser = async (userData) => {
     try {
         const response = await axios.post('/api/auth/login', userData);
         // ... handle response (store token, redirect)
     } catch (error) {
         // ... handle error
     }
 };
 ```

4. **State Management:**
- Use React's `useState` and `useEffect` hooks, or a state management library like Redux or Context API for more complex applications.

## IV. Key Features Implementation

- **Gamified Modules:** Interactive games and quizzes to teach budgeting, saving, and investments.
- **Real-World Simulations:** Virtual bank accounts, loan calculators, and market simulators.
- **AI Personalization:** Tailored learning paths and an AI mentor for guidance.
- **Social Features:** Leaderboards, group challenges, and community forums for collaborative learning.
- **Multimedia Tools:** Videos, infographics, and animations for engaging financial concepts.

## V. Deployment

- **Backend:** Deploy your Node.js/Express.js backend to a platform like Heroku, AWS, or Google Cloud.
- **Frontend:** Build the React app (`npm run build` in the client directory) and deploy the static files to a platform like Netlify, Vercel, or AWS S3.

This detailed breakdown should give you a solid foundation for building your talent matching and training platform. Remember to break down the project into smaller, manageable tasks and test your code thoroughly throughout the development process.

