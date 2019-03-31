import {Post, Headers, Get} from "../utils/fetch";

const modulePrefix = 'notifications';

export const getNotifications = () => {
  const url = `${process.env.BASE_URL}/${modulePrefix}`;
  return Get(url);
};

export const getNotificationById = (data) => {
  const url = `${process.env.BASE_URL}/${modulePrefix}/${data._id}`;
  return Get(url);
};

export const createNotification = (data) => {

  const headers = {
    method: 'POST',
    headers: Headers,
    body: JSON.stringify(data)
  };

  const url = `${process.env.BASE_URL}/${modulePrefix}`;
  return Post(url, headers);
};

export const updateNotification = (data) => {

  const body = {title: 'Update test', body: '', icon: ''};

  const headers = {
    method: 'PUT',
    headers: Headers,
    body: JSON.stringify(body)
  };

  const url = `${process.env.BASE_URL}/${modulePrefix}/${data._id}`;
  return Post(url, headers);
};

export const deleteNotification = (data) => {

  const body = {title: 'Update test', body: '', icon: ''};

  const headers = {
    method: 'DELETE',
    headers: Headers,
    body: JSON.stringify(body)
  };

  const url = `${process.env.BASE_URL}/${modulePrefix}/${data._id}`;
  return Post(url, headers);
};
