import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import dayjs from 'dayjs';
import DeleteAlert from "./DeleteTrainingAlert";


function TrainingList() {
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    const deleteTraining = href => {
        const options = {
            method: 'delete'
        }
        fetch(href, options)
        .then(response => fetchData())
        .catch(error => console.error(error))
    }

    const dateFormatter = params => {
        return(dayjs(params.data.date).format('DD.MM.YYYY HH:mm'))
    }

    const nameFormatter = params => {
        const name = params.data.customer.firstname + " " + params.data.customer.lastname
        return(name)
    }

    const columns = [
        { field: "date",
          valueFormatter: dateFormatter },
        { field: "duration" },
        { field: "activity" },
        { field: "customer",
          valueFormatter: nameFormatter },
        {
            field: "links[1].href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 120,
            cellRenderer: params => {
                return(
                    <DeleteAlert training={params.data} deleteTraining={deleteTraining} />
                )
            }
        }
    ]

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