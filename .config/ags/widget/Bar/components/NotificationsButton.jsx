import { bind } from "astal"
import Notifd from "gi://AstalNotifd"
const icon = " "

export default function NotificationsButton() {
    const notifd = Notifd.get_default()
    return <button
        className="notifications"
        onClick={() => notifd.dont_disturb = !notifd.dont_disturb}
    >
        <icon icon={bind(notifd, "dont_disturb").as(
            (p) => p === true ? 'notifications-disabled' : 'notifications-symbolic'
        )} />
    </button>
    
}