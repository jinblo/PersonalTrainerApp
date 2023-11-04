import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import dayjs from 'dayjs';


function TrainingList() {
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    const columns = [
        { field: "date",
          valueFormatter: dateFormatter },
        { field: "duration" },
        { field: "activity" },
        { field: "customer",
          valueFormatter: nameFormatter }
    ]

    function dateFormatter(params) {
        return(dayjs(params.data.date).format('DD.MM.YYYY HH:mm'))
    }

    function nameFormatter(params) {
        const name = params.data.customer.firstname + " " + params.data.customer.lastname
        return(name)
    }

    return (
        <div>
            <div className="ag-theme-material"
                style={{ height: '700px', minWidth: '800px', padding: '1rem' }}> 
                <AgGridReact
                    columnDefs={columns}
                    rowData={trainings}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true
                    }}>
                </AgGridReact>
            </div>
        </div>
    )
}

export default TrainingList;