import { bind } from "astal";
import AstalWp from "gi://AstalWp"

//        

const audio = AstalWp.get_default().audio.default_speaker;

export default function AudioButton() {
    return (
      <button
      className="audio">
        <box spacing={4}>
        <icon
            icon={bind(audio, "volume-icon")}
        className="icon"
   />
          <label
            label={bind(audio, "volume").as((p) => `${Math.floor(p * 100)}%`)}
          />
        </box>
      </button>
    );
  }