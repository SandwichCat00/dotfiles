import { bind } from "astal"
import Hyprland from "gi://AstalHyprland"

export default function WorkspacesButton() {
    const hypr = Hyprland.get_default()

    return <box className="workspaces">
        {bind(hypr, "workspaces").as(wss => wss
            .filter(ws => !(ws.id >= -99 && ws.id <= -2))
            .sort((a, b) => a.id - b.id)
            .map(ws => (
                <button
                    className={bind(hypr, "focusedWorkspace").as(fw =>
                        ws === fw ? "active workspace" : "workspace")}
                    onClicked={() => ws.focus()}>
                    
                </button>
            ))
        )}
    </box>
}