"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const port = process.env.PORT || 3001;
const staticDir = path.join(__dirname, '../../app/dist/');
/*
 * Express config
 */
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use('/api/v1', index_routes_1.default);
/**
 * Mongodb database and server connection
 */
mongoose_1.default.connect(config_1.default.mongodb.uri, { useNewUrlParser: true })
    .then(() => {
    console.log(`🐵 Mongodb at ${config_1.default.mongodb.uri}`);
    app.listen(port, () => {
        console.log(`🚀️ Server ready at http://localhost:${port}`);
    });
}, () => {
    throw new Error('Mongodb is not running yet');
});
/**
 * HTML build
 * */
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(staticDir));
    app.get('*', (req, res) => {
        res.sendFile(path.join(staticDir, 'index.html'));
    });
}
//# sourceMappingURL=index.js.map