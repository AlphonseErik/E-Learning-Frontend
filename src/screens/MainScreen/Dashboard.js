import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Chip, TextField, Button, List, ListItem, ListItemText } from '@material-ui/core';
import TeacherManagement from '../../components/Manage/TeacherManage/TeacherManagement'



const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicWindown: {
        width: '30%',
        height: '300px',
        borderRight:'1px solid grey'

    },
    chatWindown: {
        width: '70%',
        height: '300px',
        padding: '20px'
        
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
}));

const Dashboard = props => {

    const classes = useStyles();

    const [textValue, changeTextValue] = React.useState('');

        return (
            <div >
            <Paper className={classes.root} >
                <Typography variant ="h4" component="h3">
                    Class Room
                </Typography>
                <div className = {classes.flex}>
                    <div className={classes.topicWindown}>
                        <List>
                            {
                                ['CLass T01'].map(topic => (
                                    <ListItem key={topic} button>                                   
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindown}>
                        {
                            [{from: 'user', msg:'hello' }].map((chat, i)  => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip}/>
                                    <Typography variant ="p">
                                        {chat.msg}
                                    </Typography>
                                </div>
                            ))                            
                        }
                    </div>
                </div>
                <div className = {classes.flex}>
                    <TextField className={classes.chatBox}
                     label="type here"
                     value={textValue}
                     onChange={ e =>changeTextValue(e.target.value)}
                      variant="outlined" />           
                     <Button size="large" variant="contained" color="primary">
                        SEND
                    </Button>
                </div>
            </Paper>
            <TeacherManagement/>
            </div>
        )
    
}

export default Dashboard