import _ from 'lodash';
import NotificationsModel from '../../models/notifications/notifications.model';


export async function getNotifications(req, res) {

  NotificationsModel.find({}, (err, data) => {
    if (err) {
      return res.status(404).json({status: 'error', message: err});
    }
    res.status(200).json({status: 'ok', data});
  });
}


// ----------------------- CRUD -----------------------

export async function getNotificationById(req, res) {

  const {id} = req.params;

  NotificationsModel.findById(id, (err, data) => {
    if (err) {
      return res.status(404).json({status: 'error', message: err});
    }
    res.status(200).json({status: 'ok', data});
  });
}

export async function createNotification(req, res) {

  const {title, body, icon, image, countries} = req.body;

  if (!_.isEmpty(title)) {

    const notification = new NotificationsModel({title, body, icon, image, countries});

    notification.save((err, data) => {
      if (err) {
        return res.status(404).json({status: 'error', message: err});
      }
      res.status(201).json({status: 'ok', data});
    });
  } else {
    res.status(400).json({status: 'error', message: 'Malformed POST body, title param required!'})
  }
}

export async function updateNotification(req, res) {

  const {id} = req.params;
  const {title} = req.body;

  if (!_.isEmpty(title)) {

    // Avoid null data
    const updateObj: any = _.pickBy(req.body, o => !_.isNil(o));
    const updateQuery = {$set: {...updateObj, timestamp: new Date() }};

    await NotificationsModel.updateOne({_id: id}, updateQuery, (err, doc) => {
      if (err) {
        return res.status(404).json({status: 'error', message: err});
      }
      res.status(200).json({status: 'ok', data: doc});
    })
  } else {
    res.status(400).json({status: 'error', message: 'Malformed POST body, title param required!'})
  }
}

export async function deleteNotification(req, res) {

  const {id} = req.params;

  NotificationsModel.deleteOne({_id: id}, (err) => {
    if (err) {
      return res.status(404).json({status: 'error', message: err});
    }
    res.status(200).json({status: 'ok', data: {message: 'deleted'}});
  })
}
