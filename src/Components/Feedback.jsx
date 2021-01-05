import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert from '@material-ui/lab/Alert';
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function Feedback() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen2(true);
    setOpen(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
        setOpen2(false);
    };
    function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
  return (
    <div>
    <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose2} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose2} severity="success">
            Feedback submitted successfully
        </Alert>
    </Snackbar>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen} style={{textTransform: 'none',borderRadius:'1.5rem'}} startIcon={<FeedbackIcon />}>
        Submit Feedback
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          If there was a problem with your call, संभव needs information to understand what went wrong. Please let us know your feedback
          </DialogContentText>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvnrY8odaeia2KJpm7apiPKbqmuGH-GGKHkSbeGC1BbdiGdg/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
