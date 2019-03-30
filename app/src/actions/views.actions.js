

const showAddNotification = (state) => ({
  type: 'SHOW_ADD_NOTIFICATION_VIEW',
  state
});


export const showAddNotificationView = (state) => async dispatch => {
    dispatch(showAddNotification(state));
};
