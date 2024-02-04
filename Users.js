import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "./Action/userAction";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import './style.css'

const Users = () => {

  let dis = useDispatch()
  let allUsers = useSelector(x => x.user.allUser)
  let gen = null
  const [gender, setGender] = useState(null);


  const age = () => {
    allUsers = [...allUsers].sort((a, b) => a.age - b.age)
    dis(setAllUsers(allUsers))
  }
  const genders = () => {
    setGender(gen)
  }

  return (
    <>
      <Button size="small" onClick={age}>סנן לפי גיל</Button>
      <Button size="small" onClick={genders}>סנן לפי זכר\נקבה</Button>
      <input type="text" onChange={(e) => gen = e.target.value}></input>
      <ul className="flex-container">{allUsers.length > 0 && allUsers.map(user => {
        return <>
          {(gender == null || gender == user.gender) && <>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    email:{user.email}<br></br>
                    pone: {user.phone}<br></br>
                    gender: {user.gender}<br></br>
                    age: {user.age}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>}
        </>
      })}</ul>
    </>);
}

export default Users;