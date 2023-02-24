import { useEffect, useState } from "react";
import CalendarSelectRangeView from "./CalendarSelectRangeView";

const CalendarSelectRangeController = (props) =>{

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

        

    return(

        <CalendarSelectRangeView
        
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setCalendarSelectRangeVisibility={props.setCalendarSelectRangeVisibility}

            startDate={startDate}
            endDate={endDate}
            getCalendarSelectedRange={props.getCalendarSelectedRange}
        ></CalendarSelectRangeView>
    );
}

export default CalendarSelectRangeController;