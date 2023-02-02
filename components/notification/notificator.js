export default function Notificator() {
    const handleNotification = (username) => {
        let PushNotification;
        //sends the notification
        //ToDo: Give more information to the notificator
        PushNotification.localNotification({
            title: "New Recommendation received",
            message: {username}+" sent you a game recommendation over bluetooth"
        });
    }
}