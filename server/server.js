const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');

    process.exit(1);
});

// config
dotenv.config({ path: "./config/config.env" });

// connect to database..
connectDatabase();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
})


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});





