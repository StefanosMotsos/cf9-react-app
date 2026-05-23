type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    addClasses?: string;
}

const CounterButton = (
    {label, onClick, disabled=false, addClasses} : ButtonProps) => {
    return (
        <>
            <button
                className={`disabled:bg-cd-gray text-white py-2 px-4 ${addClasses}`}
                onClick={onClick}
                disabled={disabled}>
                {label}
            </button>
        </>
    )
}

export default CounterButton;