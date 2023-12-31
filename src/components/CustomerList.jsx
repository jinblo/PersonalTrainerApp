import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { CSVLink } from "react-csv";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import DeleteAlert from "./DeleteCustomerAlert";
import AddTraining from "./AddTraining";


function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [headers, setHeaders] = useState([
        { label: "First Name", key: "firstname" },
        { label: "Last Name", key: "lastname" },
        { label: "Street Address", key: "streetaddress" },
        { label: "Postcode", key: "postcode" },
        { label: "City", key: "city" },
        { label: "Phone Number", key: "phone" }
    ])

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(error => console.error(error))
    };


    const saveCustomer = customer => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        }
        fetch('https://traineeapp.azurewebsites.net/api/customers', options)
            .then(response => fetchData())
            .catch(error => console.error(error))
    }

    const updateCustomer = (href, customer) => {
        const options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        }
        fetch(href, options)
            .then(response => fetchData())
            .catch(error => console.error(error))
    }

    const deleteCustomer = href => {
        const options = {
            method: 'delete'
        }
        fetch(href, options)
            .then(response => fetchData())
            .catch(error => console.error(error))
    }

    const saveTraining = (training) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        }
        fetch('https://traineeapp.azurewebsites.net/api/trainings', options)
            .then(response => fetchData())
            .catch(error => console.error(error))
    }

    useEffect(fetchData, []);

    const columns = [
        {
            field: "links[1].href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            cellRenderer: params => {
                return (
                    <AddTraining customer={params.data} saveTraining={saveTraining} />
                )
            }
        },
        { field: "firstname" },
        { field: "lastname" },
        { field: "streetaddress" },
        { field: "postcode" },
        { field: "city" },
        { field: "phone" },
        {
            field: "links[1].href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 100,
            cellRenderer: params => {
                return (
                    <EditCustomer customer={params.data} updateCustomer={updateCustomer} />
                )
            }
        },
        {
            field: "links[1].href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 120,
            cellRenderer: params => {
                return (
                    <DeleteAlert customer={params.data} deleteCustomer={deleteCustomer} />
                )
            }
        }
    ]

    return (
        <div>
            <div className="ag-theme-material"
                style={{ height: '700px', minWidth: '800px', padding: '1rem' }}>
                <AddCustomer saveCustomer={saveCustomer} />
                <AgGridReact
                    columnDefs={columns}
                    rowData={customers}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true
                    }}>
                </AgGridReact>
                <CSVLink data={customers} headers={headers} filename={"pt_customers.csv"} separator={";"}>
                    Download CSV
                </CSVLink>
            </div>
        </div>
    )
}

export default CustomerList;