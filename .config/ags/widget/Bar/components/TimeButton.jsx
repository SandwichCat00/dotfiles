import { Variable } from "astal"

const time = Variable("").poll(60000, "date +\"%a %b %d, %I:%M %p\"")


export default function TimeButton() {
    return <button
        onClick={() => print("click")}>
        <label
            label={time()}
            className="time">
        </label>
    </button>
}