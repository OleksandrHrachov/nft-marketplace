"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static("./src/public"));
app.use(express_1.default.json());
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.rootSchema,
    graphiql: true,
}));
const start = async () => {
    try {
        mongoose_1.default.set("strictQuery", false);
        await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log("MONGO_DB - connected");
        app.listen(PORT, () => console.log(`server started on => http://localhost:${PORT}`));
    }
    catch (error) {
        console.log("Error =>", error);
    }
};
start();
