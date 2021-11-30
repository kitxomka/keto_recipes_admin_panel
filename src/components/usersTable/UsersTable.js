import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { requestUsers }  from '../../redux/action';
// import data from './data.json';
import data from './data.json';
import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './UsersTable.css';


const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'registrationDate', headerName: 'Registration Date', type: 'date', width: 250 },
    { field: 'postedRecipes', headerName: 'Posted Recipes', type: 'number', width: 200 },
]


const UsersTable = () => {

    const { usersData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(data));
    },[dispatch])
    
    console.log('usersData', usersData)
    const rows = usersData;
    return (
        <Grid container>
            <Grid item style={{ margin: '8rem auto 2rem auto' }}>
                <Typography variant="h6" >
                    Users Table
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {isLoading && <div className="loading">Data loading...</div>} 
                <div style={{ height: 400, width: '60%', margin: '0 auto' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default UsersTable;
