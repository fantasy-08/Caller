import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [id,setId]=React.useState();
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    history.push(`/rooms/${id}`)
    setOpen(false);
  };

  function handleChange(e)
  {
    setId(e.target.value)
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Join Room
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Join Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Meeting Code
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID"
            type="text"
            name="id"
            value={id}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
