import { bind } from "astal"
import { Icon } from "astal/gtk3/widget"
import Bluetooth from "gi://AstalBluetooth"

const bluetooth = Bluetooth.get_default()

function getConnectedDevice() {
    for (const device of bluetooth.get_devices()) {
        if(device.connected) {
            return device.name
        }
    }
    return "Disconnected"
}

export default function BluetoothButton() {
    
    return <button
    className={"bluetooth"}>
        <box>
        <Icon icon={bind(bluetooth, "is_connected").as(
            (l) => {
                if(l) return "bluetooth-symbolic"
                return "bluetooth-disabled-symbolic"
            }
        )}
        className={"icon"} />
        <label label={bind(bluetooth, "is_connected").as(
            (l) => {
                for (const device of bluetooth.devices) {
                    if(device.connected) {
                        return device.name
                    }
                }
                return "disconnected"
            }
        )} />
        </box>
    </button>
}