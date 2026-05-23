import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increasedCount = () => {
        setCounter(counter => counter + 1);
    }
    const decreasedCount = () => {
        if (counter > 0) {
            setCounter(counter => counter - 1);
        }
    }
    const resetCount = () => {
        setCounter(0);
    }
    return (
        <>
            <h1 className="text-center font-bold">Count is {counter}</h1>
            <div className="text-center pt-12 space-x-4 font-bold">
                <CounterButton
                    addClasses='bg-black'
                    onClick={increasedCount}
                    label="Increase"
                    />
                <CounterButton
                    addClasses='bg-black'
                    onClick={decreasedCount}
                    label="Decrease"
                    disabled={counter === 0}
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={resetCount}
                    label="Reset"
                    disabled={counter === 0}
                />
            </div>
        </>
    );
}

export default Counter