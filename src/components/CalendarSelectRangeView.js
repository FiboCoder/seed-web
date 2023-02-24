import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";

import "./CalendarSelectRangeStyle.css";

const CalendarSelectRangeView = (props) =>{

    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);

    return(

        <div className="calendar-select-range-container">
            <div className="calendar-select-range-sub-container">
                <div className="calendar-select-range-main-container">
                    <div className="calendar-select-range-left-container">
                        <span className="calendar-select-range-container-title">Data inicial</span>
                        <div className="calendar-select-range-select-button" onClick={()=>{setOpenStart(!openStart)}}>
                            <ReactDatePicker open={openStart}  className="calendar-select-range-react-date-picker" onSelect={(date)=>{{props.setStartDate(date); setOpenStart(false);}}} selected={props.startDate}></ReactDatePicker>
                            <AiOutlineCalendar className="calendar-select-range-select-icon"/>
                        </div>  
                    </div>
                    <div className="calendar-select-range-right-container">
                        <span className="calendar-select-range-container-title">Data final</span>
                        <div className="calendar-select-range-select-button"  onClick={()=>{setOpenEnd(!openEnd)}}>
                            <ReactDatePicker open={openEnd}  className="calendar-select-range-react-date-picker" onSelect={(date)=>{{props.setEndDate(date); setOpenEnd(false);}}} selected={props.endDate}></ReactDatePicker>
                            <AiOutlineCalendar className="calendar-select-range-select-icon"/>
                        </div>
                    </div>
                </div>
                <div className="calendar-select-range-bottom-container">
                    <button onClick={()=>{props.setCalendarSelectRangeVisibility(false)}} className="calendar-select-range-cancel-button">Cancelar</button>
                    <button onClick={()=>{props.getCalendarSelectedRange(props.startDate, props.endDate)}} className="calendar-select-range-continue-button">Continuar</button>
                </div>
            </div>
            
        </div>
    );
}

export default CalendarSelectRangeView;