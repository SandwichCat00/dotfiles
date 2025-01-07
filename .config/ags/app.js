import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar/Bar"
import Applauncher from "./widget/AppLauncher/AppLauncher"
import AudioWidget from "./widget/audio/AudioWidget"
import NotificationPopups from "./widget/Notification/NotificationPopups"

const widgets = [
    Bar,
    Applauncher,
    // AudioWidget
    NotificationPopups
]

App.start({
    css: style,
    requestHandler(request, res) {
        if (request == "app-menu") {
            App.toggle_window("app-launcher")
            return res("true")
        }
        res("unknown command")
    },
    main() {
        widgets.map((win) => App.get_monitors().map(win));
        App.get_window("app-launcher").hide()
    }
})
