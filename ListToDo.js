import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTask, setAlltasks } from "./Action/taskAction";
import { deleteTask } from "./Action/taskAction"
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'

const ListToDo = () => {
    let dis = useDispatch()
    let allTasks = useSelector(s => s.task.allTask)
    let allUsers = useSelector(x => x.user.allUser)
    let user = useSelector(s => s.user.currentUser)
    let oneUser = allUsers.filter(i => i.username == user.userName && i.password == user.password)

    useEffect(() => {
        goToServer()
    }, [])
    const goToServer = () => {
        let url = 'https://dummyjson.com/todos'
        fetch(url).then(response => response.json())
            .then(json => {
                dis(setAlltasks(json.todos));
            }
            )
    }
    const del = (id) => {
        axios.delete('https://dummyjson.com/todos/' + id)
            .then(res => {
                dis(deleteTask(id))
            })
    }
    const complete = (id) => {
        dis(changeTask(id))
    }
    return (<>
    <ul className="flex-container">{allTasks.length > 0 && allTasks.map(task => {
            return <>{(user.userName == "admin" || task.userId == oneUser[0]?.id) && 
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        completed: {task.completed ? <span>true</span> : <span>false</span>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => del(task.id)}>delete task</Button>
        <Button size="small" onClick={() => complete(task.id)}>i complete the task</Button>
      </CardActions>
    </Card>
    }</>
        })}</ul>
    </>);
}

export default ListToDo;