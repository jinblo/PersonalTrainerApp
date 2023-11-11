import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCustomer(props) {
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        phone: ''
    });

    const { saveCustomer } = props;

    const handleChange = event => {
        setCustomer({...customer, [event.target.name]: event.target.value })
    }

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        saveCustomer(customer);
        setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add customer
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              label="Firstname"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="lastname"
              label="Lastname"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="streetaddress"
              label="Street address"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="postcode"
              label="Postcode"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="city"
              label="City"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
            <TextField
              autoFocus
              margin="dense"
              name="phone"
              label="Phone"
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