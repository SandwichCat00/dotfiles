import AstalWp from "gi://AstalWp?version=0.1";
import { bind } from "astal";
import { App, Astal, Gtk, Gdk } from "astal/gtk3"


export default function AudioWidget(gdkmonitor) {
    const speaker = AstalWp.get_default()?.audio.default_speaker;
    const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor
    
    return (
        <window
            name={"audio-widget"}
            className={"audio-widget"}
            animation="slide top"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            keymode={Astal.Keymode.ON_DEMAND}
            anchor={TOP | LEFT | RIGHT | BOTTOM}
            application={App}
            onKeyPressEvent={function (self, event) {
                if (event.get_keyval()[1] === Gdk.KEY_Escape)
                    self.hide()
            }}
        >
            <box
                className={"audio-container"}
                hexpand={false}
                vertical
            >
                <box className={"volume-box"}>
                    <icon icon={bind(speaker, "volumeIcon")} />
                    <slider
                        hexpand
                        onDragged={(self) => {
                            speaker.volume = self.value;
                        }}
                        value={bind(speaker, "volume")}
                    />
                </box>
            </box>
        </window>
    );
}