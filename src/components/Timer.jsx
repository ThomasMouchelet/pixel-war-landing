import { useEffect, useState } from "react";

const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const deadline = '13 Jan 2023 12:00:00 GMT' // GMT = notre heure - 1 heure

    const parseTime = (result) => {
        if(result < 10) {
            result = '0' + result
        }
        return result
    }

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()

        let hoursResult = Math.floor((time / (1000 * 60 * 60)))
        

        let minutesResult = Math.floor((time / 1000 / 60) % 60)
        

        let secondsResult = Math.floor((time / 1000) % 60)
        
        
        setHours(parseTime(hoursResult));
        setMinutes(parseTime(minutesResult));
        setSeconds(parseTime(secondsResult));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, [])
    return ( 
        <div id="timer">
            <span>{hours} : {minutes} : {seconds}</span>
        </div>
    );
}
 
export default Timer;