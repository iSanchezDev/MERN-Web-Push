
import express from 'express';
import NotificationRoutes from './notifications.routes';

/**
 * @description - This file gathers all routing modules
 * */
const Routing = express.Router();


/**
 * @description Custom routing under API Prefix
 * */
Routing.use('/notifications', NotificationRoutes);


export default Routing;
