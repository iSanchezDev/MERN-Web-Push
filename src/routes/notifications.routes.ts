import express from 'express';
import {
  getNotifications,
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
} from '../controllers/notifications/notifications.controller';

const router = express.Router();


router.get('/', getNotifications);

router.get('/:id', getNotification);

router.post('/', createNotification);

router.put('/', updateNotification);

router.delete('/', deleteNotification);

export default router;
