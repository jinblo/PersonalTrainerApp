import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCustomer(props) {
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        phone: ''
    });

    const { editCustomer } = props;

    const handleChange = event => {
        setCustomer({...customer, [event.target.name]: event.target.value })
    }

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setCustomer(props.customer)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        props.updateCustomer(customer.links[0].href, customer);
        setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={customer.firstname}
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
              value={customer.lastname}
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
              value={customer.streetaddress}
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
              value={customer.postcode}
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
              value={customer.city}
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
              value={customer.phone}
              label="Phone"
              type="text"
              fullWidth
              variant="standard"
              onChange={ event => handleChange(event) }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }