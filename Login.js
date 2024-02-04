// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router";
import { setCurrectUsers } from "./Action/userAction";
import ListToDo from "./ListToDo";
import NavBar from './NavBar'
import Users from './Users'
import { setAllUsers } from "./Action/userAction";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Protected from './protected'


const Login = () => {
    let dis = useDispatch()
    let nav = useNavigate()
    let user = {
        userName: "",
        password: ""
    }
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        goToServer()
    }, [])

    const goToServer = () => {
        let url = 'https://dummyjson.com/users'
        fetch(url).then(response => response.json())
            .then(json => {
                dis(setAllUsers(json.users));
            }
            )
    }
    const checkLogin = (e) => {
        debugger
        e.preventDefault()
        if (user.userName == 'admin' && user.password == 'ad12min34') {
            dis(setCurrectUsers(user))
            setFlag(true)
        }
        else {
            dis(setCurrectUsers(user))
            nav('/listToDo')
        }
    }
    return (
        <>
            <form>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="userName" variant="outlined" onChange={(e) => user.userName = e.target.value}></TextField>
                    <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => user.password = e.target.value}></TextField>
                    <Button  onClick={checkLogin} variant="outlined">enter</Button>
                </Box>
            </form>
            {flag == true && <><NavBar></NavBar>
                <Routes>
                    <Route path="users" element={<Protected user={user}> <Users></Users></Protected>}></Route>
                    <Route path="listToDo" element={<ListToDo></ListToDo>}></Route>
                </Routes>
            </>}
        </>);
}

export default Login;