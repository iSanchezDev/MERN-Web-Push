"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const notificationSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    lan: {
        type: String,
        default: 'en-US'
    },
    countries: {
        type: Array,
        default: []
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false });
exports.default = mongoose_1.default.model('Notifications', notificationSchema);
//# sourceMappingURL=notifications.model.js.map