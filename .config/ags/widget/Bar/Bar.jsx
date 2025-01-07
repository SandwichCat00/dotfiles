import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import WorkspacesButton from "./components/WorkspacesButton"
import BatteryButton from "./components/BatteryButton"
import TimeButton from "./components/TimeButton"
import NotificationsButton from "./components/NotificationsButton"
import BluetoothButton from "./components/BluetoothButton"
import NetowrkButton from "./components/NetworkButton"
import AudioButton from "./components/AudioButton"
import AppLauncherButton from "./components/AppLauncherButton"



function LeftPanel() {
    return <box
    className="panel"
    halign={Gtk.Align.START}>
        <AppLauncherButton />
        <WorkspacesButton />
    </box>
}

function RightPanel() {
    return <box
    className="panel"
    halign={Gtk.Align.END}>
        <AudioButton />
        <NetowrkButton />
        <BluetoothButton />
        <BatteryButton />
        <TimeButton />
        <NotificationsButton />
    </box>
}

export default function Bar(gdkmonitor) {
    const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

    return <window
        className="bar"
        name="bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}

        application={App}>
        <centerbox>
            <LeftPanel />
            <box />
            <RightPanel />
        </centerbox>
    </window>
}
