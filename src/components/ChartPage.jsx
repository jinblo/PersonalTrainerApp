import { useState, useEffect } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { _ } from "lodash";

function ChartPage() {
    const [trainings, setTrainings] = useState();

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    const data = _(trainings)
        .groupBy('activity')
        .map((sport, activity) => ({
            activity: activity,
            duration: _.sumBy(sport, 'duration')
        }))
        .value()

    if (trainings) {
        return (
            <div>
                <BarChart width={900} height={600} data={data} margin={{ top: 20, left: 20, right: 30, bottom: 10 }} >
                    <Bar dataKey="duration" fill="#8884d8" barSize={120} />
                    <XAxis dataKey="activity" padding={{ left: 10, right: 10 }} />
                    <YAxis
                        label={
                            <g>
                                <text x={-250} y={10} dy={16} textAnchor="middle" fill="#000" transform="rotate(-90)">
                                    Duration (min)
                                </text>
                            </g>
                        }
                        padding={{ top: 20 }}
                        ticks={[ 45, 90, 135, 180, 225 ]}/>
                </BarChart>
            </div>
        )
    }

}

export default ChartPage
