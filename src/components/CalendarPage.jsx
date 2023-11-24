import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css';


function CalendarPage() {
    const localizer = dayjsLocalizer(dayjs)
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    const events = trainings.map((item) => {
        return { 
            id: item.id,
            title: item.activity,
            start: new Date(item.date),
            end: dayjs(item.date).add(item.duration, 'm').toDate()
        }
    })

    const MyCalendar = () => (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )

    return(
        <MyCalendar />
    )
}

export default CalendarPage;