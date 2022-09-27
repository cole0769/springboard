import  React, { useState , useEffect } from 'react';
import './current.datetime.styles.scss';

export const CurrentDateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='currentDate'>
            {date.toLocaleDateString()} {date.toTimeString()}
        </div>
    )
}

export default CurrentDateTime