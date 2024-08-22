

# Full Stack Blog Application

This project is a Full Stack Blog Application built with a React frontend, Spring Boot backend, and PostgreSQL as the database. The application implements JWT (JSON Web Token) authentication to secure the API endpoints, ensuring that only authorized users can access certain resources.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely using JWT tokens.
- **Blog Management**: Authenticated users can create, edit, delete, and view blogs.
- **React Frontend**: The frontend is built with React, providing a modern and responsive user interface.
- **Spring Boot Backend**: The backend is developed with Spring Boot, offering a robust and scalable REST API.
- **PostgreSQL Database**: PostgreSQL is used as the relational database to store user and blog data.
- **JWT Security**: JWT tokens are used for user authentication, ensuring secure communication between the client and server.

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For managing routes in the React application.
- **Tailwind CSS**: For styling the application.

### Backend
- **Spring Boot**: A Java framework used to create stand-alone, production-grade Spring-based applications.
- **Spring Security**: For implementing authentication and authorization.
- **JWT**: For securing API endpoints.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Hibernate**: For ORM (Object Relational Mapping) with PostgreSQL.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- **Java 11 or higher**
- **Node.js and npm**
- **PostgreSQL**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/blog-application.git
   cd blog-application
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory.
   - Create a PostgreSQL database and configure the database properties in the `application.properties` file:
     ```properties
     server.port=8005
     spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
     spring.jpa.hibernate.ddl-auto=none
     spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
     spring.datasource.username=
     spring.datasource.password=
     jwt.secret=your-secret-key
     jwt.expiration=3600000
     ```
   - Build and run the Spring Boot application:
     ```bash
     ./mvnw clean install
     ./mvnw spring-boot:run
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` directory.
   - Install the required npm packages:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```
   - The frontend will be available at `http://localhost:3000`.

### Running the Application

- **Backend**: The Spring Boot application will run on `http://localhost:8005`.
- **Frontend**: The React application will run on `http://localhost:3000`.

You can sign up as a new user, log in, and start creating, editing, and managing your blogs.

### Project Structure

- **Frontend**:
  - `src/`: Contains all the React components, services, and pages.
  - `public/`: Public assets like the `index.html` file.

- **Backend**:
  - `src/main/java/com/example/demo/`: Contains all the Java classes for controllers, services, repositories, and entities.
  - `src/main/resources/`: Contains configuration files such as `application.properties`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:



This README file gives a comprehensive overview of your Full Stack Blog Application, guiding users through the installation, setup, and usage of the project.
