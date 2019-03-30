"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const notifications_model_1 = __importDefault(require("../../models/notifications/notifications.model"));
function getNotifications(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        notifications_model_1.default.find({}, (err, data) => {
            if (err) {
                return res.status(404).json({ status: 'error', message: err });
            }
            res.status(200).json({ status: 'ok', data });
        });
    });
}
exports.getNotifications = getNotifications;
// ----------------------- CRUD -----------------------
function getNotificationById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        notifications_model_1.default.findOne({ id }, (err, data) => {
            if (err) {
                return res.status(404).json({ status: 'error', message: err });
            }
            res.status(200).json({ status: 'ok', data });
        });
    });
}
exports.getNotificationById = getNotificationById;
function createNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, body, icon, image, countries } = req.body;
        if (!lodash_1.default.isEmpty(title)) {
            const notification = new notifications_model_1.default({ title, body, icon, image, countries });
            notification.save((err, data) => {
                if (err) {
                    return res.status(404).json({ status: 'error', message: err });
                }
                res.status(201).json({ status: 'ok', data });
            });
        }
        else {
            res.status(400).json({ status: 'error', message: 'Malformed POST body, title param required!' });
        }
    });
}
exports.createNotification = createNotification;
function updateNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { title } = req.body;
        if (!lodash_1.default.isEmpty(title)) {
            // Avoid null data
            const updateObj = lodash_1.default.pickBy(req.body, o => !lodash_1.default.isNil(o));
            notifications_model_1.default.findByIdAndUpdate(id, { $set: { updateObj, timestamp: new Date() } }, (err, data) => {
                if (err) {
                    return res.status(404).json({ status: 'error', message: err });
                }
                res.status(200).json({ status: 'ok', data });
            });
        }
        else {
            res.status(400).json({ status: 'error', message: 'Malformed POST body, title param required!' });
        }
    });
}
exports.updateNotification = updateNotification;
function deleteNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        notifications_model_1.default.findOneAndDelete(id, (err) => {
            if (err) {
                return res.status(404).json({ status: 'error', message: err });
            }
            res.status(200).json({ status: 'ok', data: 'Notification Removed' });
        });
    });
}
exports.deleteNotification = deleteNotification;
//# sourceMappingURL=notifications.controller.js.map