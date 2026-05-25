import {useEffect, useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();
    })

    return (
        <>
            <div className="text-center space-x-4 my-4">
                <input
                    ref={inputRef}
                    type="text"
                    className="border px-4 py-2 focus:outline-2 focus:outline-blue-500"
                />
            </div>
            <button
                className="bg-cd-dark-gray text-white px-4 py-2"
                onClick={handleClick}>
                Focus Input
            </button>
        </>
    )
}

export default FocusInput