
import Notifications from '../../schema/notifications/notifications.model';


export async function getNotifications(req, res) {

  res.status(200).json({status: 'ok', data: true})
}

export async function getNotification(req, res) {

  res.status(200).json({status: 'ok', data: true})
}

export async function createNotification(req, res) {

  res.status(201).json({status: 'ok', data: true})
}

export async function updateNotification(req, res) {

  res.status(201).json({status: 'ok', data: true})
}

export async function deleteNotification(req, res) {

  res.status(200).json({status: 'ok', data: true})
}
