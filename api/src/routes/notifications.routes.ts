import express from 'express';
import {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification
} from '../controllers/notifications/notifications.controller';

const router = express.Router();


router.get('/', getNotifications);

router.post('/', createNotification);

router.get('/:id', getNotificationById);

router.put('/:id', updateNotification);

router.delete('/:id', deleteNotification);

export default router;
