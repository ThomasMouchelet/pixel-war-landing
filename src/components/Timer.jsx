import { useEffect } from "react";

const Timer = ({hours, minutes, seconds, setHours, setMinutes, setSeconds}) => {

    const deadline = '18 Jan 2023 9:30:00 GMT' // GMT = notre heure - 1 heure

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
            {hours < '00' && minutes < '00' && seconds < '00' ? <span>00 : 00 : 00</span> : <span>{hours} : {minutes} : {seconds}</span>}
        </div>
    );
}
 
export default Timer;