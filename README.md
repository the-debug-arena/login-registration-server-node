## Technologies Used
- Node.js
- Express.js - Fast, unopinionated, minimalist web framework for Node.js
- MongoDB with Mongoose - Elegant MongoDB object modeling for Node.js
- EJS - Embedded JavaScript templating
- bcryptjs - Password hashing
- dotenv - Load environment variables from .env file
- nodemon - Automatically restart the application when file changes are detected (dev dependency)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/RAKESH-PATEL57/project-name.git
   cd project-name
   ```

2. Install dependencies
   ```bash
   npm install express mongoose bcryptjs ejs dotenv
   npm install nodemon --save-dev
   ```
   
   Or simply:
   ```bash
   npm install
   ```

3. Set up your environment variables in a `.env` file
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
