// Tab
export default function Tab({ label = "", isActive = false, handleOnClickTab }) {
    return (
        <li
            className={`${isActive && "active-tab"} mx-4 pb-2 cursor-pointer basis-1/6`}
            onClick={() => handleOnClickTab(label)}
        >
            <span className={`${isActive && "mb-1"}`}>
                {label}
            </span>
        </li>

    )
}