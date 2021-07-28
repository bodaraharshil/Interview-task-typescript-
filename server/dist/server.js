"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = __importDefault(require("./config/db"));
const cors = require('cors');
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
mongoose_1.default.connect(db_1.default.MONGOURI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose_1.default.connection.on("connected", () => {
    console.log("mongodb to connect successfuly");
});
mongoose_1.default.connection.on("error", (error) => {
    console.log("error", error);
});
app.use(cors());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//models
const User = require('./models/user');
//api
const user = require('./routes/user');
app.use(user);
app.listen(5000, () => {
    console.log(chalk_1.default.bgMagenta("server runing:"), PORT);
});
