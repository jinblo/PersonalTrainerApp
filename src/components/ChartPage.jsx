import { useState, useEffect } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts"

function ChartPage() {
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    console.log(trainings)

    if (trainings) {
        return (
            <div>
                <BarChart width={800} height={600} data={trainings} >
                    <Bar dataKey="duration" />
                    <XAxis dataKey="activity" />
                    <YAxis />
                </BarChart>
            </div>
        )
    }

}

export default ChartPage
