"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_controller_1 = require("../controllers/notifications/notifications.controller");
const router = express_1.default.Router();
router.get('/', notifications_controller_1.getNotifications);
router.post('/', notifications_controller_1.createNotification);
router.get('/:id', notifications_controller_1.getNotificationById);
router.put('/:id', notifications_controller_1.updateNotification);
router.delete('/:id', notifications_controller_1.deleteNotification);
exports.default = router;
//# sourceMappingURL=notifications.routes.js.map