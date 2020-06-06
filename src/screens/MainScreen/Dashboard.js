import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Typography,
  Chip,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import TeacherManagement from "../../components/Manage/TeacherManage/TeacherManagement";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  topicWindown: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindown: {
    width: "70%",
    height: "300px",
    padding: "20px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  const [textValue, changeTextValue] = React.useState("");

  return (
    <div>
      <Paper className={classes.root}>
        <Typography>Class Room</Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindown}>
            <List>
              {["CLass T01"].map((topic) => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindown}>
            {[
              {
                from: "Son Tung",
                msg1: "hello",
                to: "teacher",
                msg2: "hi, how are you?",
                msg3:"I need some infor about this topic. Can you help me?",
                msg4:"Of course"
              },
            ].map((chat, i) => (
              <>
                <div className={classes.flex} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography>{chat.msg1}</Typography>
                </div>
                <div className={classes.flex} key={i}>
                  <Chip label={chat.to} className={classes.chip} />
                  <Typography>{chat.msg2}</Typography>
                </div>
                <div className={classes.flex} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography>{chat.msg3}</Typography>
                </div>
                <div className={classes.flex} key={i}>
                  <Chip label={chat.to} className={classes.chip} />
                  <Typography>{chat.msg4}</Typography>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            className={classes.chatBox}
            label="Text Here"
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
            variant="outlined"
          />
          <Button>
            <input type="file" />
          </Button>
          <SendIcon color="secondary" />
        </div>
      </Paper>
      <TeacherManagement />
    </div>
  );
};

export default Dashboard;
