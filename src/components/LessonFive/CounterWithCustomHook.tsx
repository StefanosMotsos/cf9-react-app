import CounterButton from "../LessonFour/CounterButton";
import {useCounter} from "../../hooks/useCounter.ts";


const CounterWithCustomHook = () => {

    const {count, lastAction, time, increase, decrease, reset} = useCounter();

    return (
        <>
            <h1 className="text-center font-bold">Count is {count}</h1>
            <div className="text-center pt-12 space-x-4 font-bold">
                <CounterButton
                    addClasses='bg-black'
                    onClick={increase}
                    label="Increase"
                />
                <CounterButton
                    addClasses='bg-black'
                    onClick={decrease}
                    label="Decrease"
                    disabled={count === 0}
                />
                <CounterButton
                    addClasses="bg-cf-dark-red"
                    onClick={reset}
                    label="Reset"
                    disabled={count === 0}
                />
            </div>
            {
                lastAction && (

            <p className="text-center pt-8">
                Last Change: <strong>{lastAction || "-"}</strong> at{" "}
                <strong>{time || "-"}</strong>
            </p>
                )
            }

        </>
    )
}

export default CounterWithCustomHook;