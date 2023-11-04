import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CustomerList from "./CustomerList";
import TrainingList from "./TrainingList";

function TabApp() {
    const [value, setValue] = useState('customers');

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="customers" label="Customers" />
                <Tab value="trainings" label="Trainings" />
            </Tabs>
            {value === 'customers' && <CustomerList />}
            {value === 'trainings' && <TrainingList />}
        </div>
    );
}

export default TabApp;