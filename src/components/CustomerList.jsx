import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


function CustomerList() {
    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(error => console.error(error))
    };

    useEffect(fetchData, []);

    const columns = [
        { field: "firstname" },
        { field: "lastname" },
        { field: "streetaddress" },
        { field: "postcode" },
        { field: "city" },
        { field: "phone" }
    ]

    return (
        <div>
            <div className="ag-theme-material"
                style={{ height: '700px', minWidth: '800px', padding: '1rem' }}> 
                <AgGridReact
                    columnDefs={columns}
                    rowData={customers}
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

export default CustomerList;