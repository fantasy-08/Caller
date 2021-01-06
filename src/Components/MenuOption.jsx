import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export default function LongMenu({roomID}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handlecopy(){
    var msg=`Hello let's do Video Call with संभव.\nVisit the link:\nhttps://servercaller.herokuapp.com/Caller/ \nMeeting Code:\n${roomID}`
    navigator.clipboard.writeText(msg)
    }
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '16rem' ,
            width: '40ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
        <Card >
            <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                Joining Info
                </Typography>
                <Typography variant="h5" component="h2">
                Meeting ID:
                </Typography>
                <Typography color="textSecondary">
                copy and join 
                </Typography>
                <Typography variant="body2" component="p">
                    {roomID}
                <br />
                </Typography>
            </CardContent>
        <CardActions>
            <Button size="small" onClick={handlecopy}><FileCopyIcon/>Copy Joining info</Button>
        </CardActions>
        </Card>
        </MenuItem>
      </Menu>
    </div>
  );
}
