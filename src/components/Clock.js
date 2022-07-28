import {useState, useEffect} from "react";
import {cleanup} from "@testing-library/react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const birthdayText = () => {
        return 'Goodbye Teens, Hello Twenties!'
    }

    const refreshClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clockContainer">
            <span className="date">
                {date.toLocaleDateString('en-GB')}
            </span>
            <span className="time">
                {date.toLocaleTimeString('fr-FR')}
            </span>
            <p className="birthday">{date.getDate() === 29 && birthdayText()}</p>
        </div>
    )

}

export default Clock