import { App, Gtk } from "astal/gtk3"

const icon = " "

export default function AppLauncherButton() {
    return  <button
            className="distro"
            halign={Gtk.Align.CENTER}
            onClicked={() => App.toggle_window("app-launcher")}
            >
            {icon}
        </button>
}