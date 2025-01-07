import { bind } from "astal"
import AstalNetwork from "gi://AstalNetwork"

const network = AstalNetwork.get_default()

export default function NetowrkButton() {
    
    return <button
        className="network">
          <box>
        <box visible={bind(network, "primary").as(
            (p) => p != AstalNetwork.Primary.WIRED,
          )}>
        <icon
          icon={bind(network.wifi, "icon-name")}
          className="icon"
        />
        <label
          visible={bind(network, "primary").as(
            (p) => p == AstalNetwork.Primary.WIFI,
          )}
          label={bind(network.wifi, "ssid")}
        />
        
      </box>
      <box visible={bind(network, "primary").as(
            (p) => p == AstalNetwork.Primary.WIRED,
          )}>
        <icon
          icon={bind(network.wired, "icon-name")}
          className="icon"
        />
        <label
          label={"wired"}
        />
        
      </box>
      </box>
    </button>
}