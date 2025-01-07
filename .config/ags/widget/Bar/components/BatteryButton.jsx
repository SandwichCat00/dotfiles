import AstalBattery from "gi://AstalBattery";
import { bind, Variable } from "astal";

const battery = AstalBattery.get_default();
var iconClass = Variable("")


export default function BatteryButton() {
    return (
        <button className={bind(iconClass)}>
            <box>

                <icon icon={
                    bind(battery, "battery-icon-name").as(
                        (p) => {
                            if (battery.charging) {
                                iconClass.set("battery-charing")
                            } else {
                                iconClass.set("battery-draining")
                            }
                            return p
                        }
                    )
                }
                    className="icon"
                />
          
                <label
                    label={bind(battery, "percentage").as(
                        (p) => `${Math.floor(p * 100)}%`,
                    )}
                />
            </box>
        </button>
    );
}