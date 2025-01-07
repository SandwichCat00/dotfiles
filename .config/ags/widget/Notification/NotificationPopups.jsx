import { Astal, Gtk, Gdk } from "astal/gtk3"
import Notifd from "gi://AstalNotifd"
import Notification from "./Notification"
import { Variable, bind, timeout } from "astal"

// see comment below in constructor
const TIMEOUT_DELAY = 5000


class NotifiationMap {

    map = new Map()


    var = Variable([])


    notifiy() {
        this.var.set([...this.map.values()].reverse())
    }

    constructor() {
        const notifd = Notifd.get_default()

        // notifd.ignoreTimeout = true

        notifd.connect("notified", (_, id) => {
            if(!notifd.dont_disturb)
            this.set(id, Notification({
                notification: notifd.get_notification(id),

                onHoverLost: () => this.delete(id),

                setup: () => timeout(TIMEOUT_DELAY, () => {
                    this.delete(id)
                })
            }))
        })

        notifd.connect("resolved", (_, id) => {
            this.delete(id)
        })
    }

    set(key, value) {
        this.map.get(key)?.destroy()
        this.map.set(key, value)
        this.notifiy()
    }

    delete(key) {
        this.map.get(key)?.destroy()
        this.map.delete(key)
        this.notifiy()
    }


    get() {
        return this.var.get()
    }

    subscribe(callback) {
        return this.var.subscribe(callback)
    }
}

export default function NotificationPopups(gdkmonitor) {
    const { TOP, RIGHT } = Astal.WindowAnchor
    const notifs = new NotifiationMap()

    return <window
        className="NotificationPopups"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | RIGHT}>
        <box vertical>
            {bind(notifs)}
        </box>
    </window>
}