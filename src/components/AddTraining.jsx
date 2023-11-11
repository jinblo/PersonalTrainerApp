import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import dayjs, { Dayjs } from 'dayjs';

export default function AddTraining(props) {
    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer: props.customer.links[1].href
    });

    const handleDate = value => {
      setTraining({...training, date: value.toISOString() })
    }

    const handleChange = event => {
      setTraining({...training, [event.target.name]: event.target.value })
    }

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        props.saveTraining(training);
        setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add training
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New training</DialogTitle>
          <DialogContent>
            <DateTimeField
              autoFocus
              margin="dense"
              name="date"
              label="Date and time"
              fullWidth
              variant="standard"
              format="DD-MM-YYYY HH-mm"
              onChange={ value => handleDate(value) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="duration"
              label="Duration"
              type="number"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="activity"
              label="Activity"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }