# Simple ToDo App

A simple and efficient ToDo application built with modern web technologies. This project features a RESTful API built using the Fiber framework (Golang), MongoDB, TypeScript React. It also includes support for dark mode and utilizes Chakra UI for styling and responsiveness. The app's state management and server-side data fetching are optimized using TanStack Query.





## Tech Stack

- **Backend**: [Fiber](https://gofiber.io/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Frontend**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching & State Management**: [TanStack Query ](https://tanstack.com/query/latest)
- **Styling**: [Chakra UI](https://chakra-ui.com/)


## Highlights

- **API Backend**: Built with Fiber (Go framework) for efficient and lightweight performance.
- **Database**: MongoDB for flexible and scalable data storage.
- **Frontend**: React with TypeScript for type safety and scalability.
- **TanStack Query**: Optimized data fetching and state management.
- **Dark Mode**: Implemented with Chakra UI for a smooth UI/UX.
- **Responsive Design**: The application is mobile-friendly and fully responsive.
- **Chakra UI**: Component-based styling solution with built-in dark mode support and responsive utilities.
## Installation

### Prerequisites
Make sure you have the following installed:

- [Go](https://golang.org/) (For the Fiber backend)
- [Node.js](https://nodejs.org/) and npm (For the frontend)
- [MongoDB](https://www.mongodb.com/) (For the database)

1. Clone the project

```bash
  git clone https://github.com/tkthinh/fiber-todo.git
  cd fiber-todo
```

2. Install dependencies on client folder:
```bash
  npm install
  or
  yarn install
```

3. Set up environment variables:
- Create a `.env` file in the ./server directory
- Add your database URI:
  ```
    PORT = 3000
    MONGODB_URI = [your_mongodb_uri]
  ```

4. Run the development on both side
- For client
```bash
  npm run dev
  or
  yarn run dev
```

- For server
```bash
  air
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) 

