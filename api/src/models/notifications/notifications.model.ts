
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
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


export default mongoose.model('Notifications', notificationSchema);
