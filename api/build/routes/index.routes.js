"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_routes_1 = __importDefault(require("./notifications.routes"));
/**
 * @description - This file gathers all routing modules
 * */
const Routing = express_1.default.Router();
/**
 * @description Custom routing under API Prefix
 * */
Routing.use('/notifications', notifications_routes_1.default);
exports.default = Routing;
//# sourceMappingURL=index.routes.js.map