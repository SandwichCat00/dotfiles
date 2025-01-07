import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"
import Apps from "gi://AstalApps"

const MAX_ITEMS = 8
const text = Variable("")

const searchEntry = <entry
    placeholderText="Search"
    text={text()}
    onChanged={self => text.set(self.text)}
    onActivate={() => {
        apps.fuzzy_query(text.get())?.[0].launch()
        hide()
    }}
/>

function hide() {
    searchEntry.grab_focus_without_selecting()
    App.get_window("app-launcher").hide()
}


function AppButton({ app }) {
    return <button
        className="AppButton"
        onKeyPressEvent={function (self, event) {
            if (event.get_keyval()[1] === Gdk.KEY_q){
            searchEntry.grab_focus_without_selecting()
        
            print('q')}
            print('p')
        }}
        onClicked={() => { hide(); app.launch() }}>
        <box>
            <icon icon={app.iconName} />
            <box valign={Gtk.Align.CENTER} vertical>
                <label
                    className="name"
                    truncate
                    xalign={0}
                    label={app.name}
                />
                {app.description && <label
                    className="description"
                    wrap
                    xalign={0}
                    label={app.description}
                />}
            </box>
        </box>
    </button>
}


export default function AppLauncher(gdkmonitor) {
    const { TOP, LEFT, RIGHT, BOTTOM, CENTER } = Astal.WindowAnchor
    const apps = new Apps.Apps()

    const list = text(text => apps.fuzzy_query(text).slice(0, MAX_ITEMS))


    return <window
        className="app-launcher"
        name="app-launcher"
        gdkmonitor={gdkmonitor}
        animation={"popin 80%"}
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
            className="Applauncher"
            vertical
            vexpand={false}
        >
            {searchEntry}
            <box spacing={6} vertical>
                {list.as(list => list.map(app => (
                    <AppButton app={app} />
                )))}
            </box>
            <box
                halign={CENTER}
                className="not-found"
                vertical
                visible={list.as(l => l.length === 0)}>
                <icon icon="system-search-symbolic" />
                <label label="No match found" />
            </box>
        </box>

    </window>
}
