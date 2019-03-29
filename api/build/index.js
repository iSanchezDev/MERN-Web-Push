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
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const config_1 = __importDefault(require("./environment/config"));
let mongoURI = config_1.default.mongodb.uri;
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
 * HTML build
 * */
if (process.env.NODE_ENV === 'production') {
    mongoURI = config_1.default.mongodb.uriExternal;
    app.use(express_1.default.static(staticDir));
    app.get('*', (req, res) => {
        res.sendFile(path.join(staticDir, 'index.html'));
    });
}
console.log(mongoURI)
/**
 * Mongodb database and server connection
 */
mongoose_1.default.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
    console.log(`🐵 Mongodb at ${config_1.default.mongodb.uri}`);
    app.listen(port, () => {
        console.log(`🚀️ Server ready at http://localhost:${port}`);
    });
}, () => {
    throw new Error('Mongodb is not running yet');
});
//# sourceMappingURL=index.js.map