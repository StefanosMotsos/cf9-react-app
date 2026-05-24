import {useEffect, useState} from "react";
//import {useNavigate} from "react-router";

const AutoRedirectAdvanced = () => {

    //const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((prev) => prev -1);
        }, 1000)




        const timer = setTimeout(() => {
            // navigate('https://www.google.com');
            document.location = "https://google.com/";
        }, 5000)

        return () => {
            clearTimeout(timer);
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <h1 className="text-center text-xl font-semibold-mb-4">
                Redirecting in {secondsLeft} second{secondsLeft !== 1 && "s"}...
            </h1>
        </>
    )
}

export default AutoRedirectAdvanced