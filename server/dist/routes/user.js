"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
router.post("/adduser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { first_name, last_name, email, role } = req.body;
        if (!first_name || !last_name || !email || !role) {
            return res.status(422).json({
                error: "please add all field",
            });
        }
        yield user_1.default.findOne({ email: email })
            .then((data) => {
            if (data) {
                return res.status(401).json({
                    error: "email address is alerady used",
                });
            }
            else {
                const user = new user_1.default({
                    first_name,
                    last_name,
                    email,
                    role,
                });
                user
                    .save()
                    .then((data) => {
                    return res.status(200).json({
                        message: "user add successfuly",
                        data,
                    });
                })
                    .catch((error) => {
                    console.log("error:", error);
                });
            }
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(401).json({
            error: "somethinmg went wrong",
        });
    }
}));
router.get("/alluser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.default.find()
            .then((data) => {
            return res.status(200).json({
                data,
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
router.delete("/deleteuser/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield user_1.default.findByIdAndRemove(id)
            .then((data) => {
            return res.status(200).json({
                message: "user deleted successfuly",
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
router.post("/updateuser/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { first_name, last_name, email, role } = req.body;
        if (!first_name || !last_name || !email || !role) {
            return res.status(401).json({
                error: "please add all field",
            });
        }
        const updatedata = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            role: role,
        };
        yield user_1.default.findByIdAndUpdate(id, { $set: updatedata })
            .then((data) => {
            return res.status(200).json({
                message: "data updated successfuly",
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            erorr: "something went wrong",
        });
    }
}));
router.get("/search/:first_name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const first_name = req.params.first_name;
        yield user_1.default.find({ first_name: first_name })
            .then((data) => {
            return res.status(200).json({
                data,
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
router.get("/searchrole/:role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = req.params.role;
        yield user_1.default.find({ role: role })
            .then((data) => {
            return res.status(200).json({
                data,
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
router.get("/searchdata/:first_name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const first_name = req.params.first_name;
        yield user_1.default.find({ first_name: first_name })
            .then((data) => {
            return res.status(200).json({
                data,
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
router.get("/searchroledata/:role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = req.params.role;
        yield user_1.default.find({ role: role })
            .then((data) => {
            return res.status(200).json({
                data,
            });
        })
            .catch((error) => {
            console.log("error:", error);
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "something went wrong",
        });
    }
}));
module.exports = router;
