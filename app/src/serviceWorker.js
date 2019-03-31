
// Source : https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
// Here is used the simplest way to show a notification


Notification.requestPermission((status) => {
  console.log('Notification permission status:', status);
});

export function displayNotification(title, options) {
  if (Notification.permission === 'granted') {
      const _options = {
        ...options,
        data: {
          date: Date.now(),
        }
      };

      new Notification(title, _options);
  } else if (Notification.permission === "denied") {
    console.warn('The user has previously denied push. Can\'t reprompt.')
  }
}
