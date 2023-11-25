import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CustomerList from './components/CustomerList.jsx'
import TrainingList from './components/TrainingList.jsx'
import CalendarPage from './components/CalendarPage.jsx'
import ChartPage from './components/ChartPage.jsx'
import Error from './components/Error.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/PersonalTrainerApp/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <CustomerList />,
        index: true
      },
      {
        path: "trainings",
        element: <TrainingList />
      },
      {
        path: "calendar",
        element: <CalendarPage />
      },
      {
        path: "chart",
        element: <ChartPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
