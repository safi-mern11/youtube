type tooltip = {
    text: string
}

function Tooltip({text}: tooltip) {
    return (
        <div className="p-[8px] max-w-fit text-white rounded-[4px] text-[14px] px-3 bg-[#616161]/90">
            <p>{text}</p>
        </div>
    )
}

export default Tooltip