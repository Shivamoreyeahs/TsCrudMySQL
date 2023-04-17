"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("../src/database/db"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Well done!');
});
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to database successfully...");
//   });
db_1.default.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected to database successfully...");
    db_1.default.query("CREATE DATABASE TSCRUDMYSQL", function (err, result) {
        if (err)
            throw err;
        console.log("Database created");
    });
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
