import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CustomerList from "./CustomerList";
import TrainingList from "./TrainingList";
import CalendarPage from "./CalendarPage";

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
                <Tab value="calendar" label="Calendar" />
            </Tabs>
            {value === 'customers' && <CustomerList />}
            {value === 'trainings' && <TrainingList />}
            {value === 'calendar' && <CalendarPage />}
        </div>
    );
}

export default TabApp;