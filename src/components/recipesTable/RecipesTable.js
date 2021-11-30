import React from 'react';
import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'category', headerName: 'Category', type: 'string', width: 200 },
    { field: 'servings', headerName: 'Servings', type: 'number', width: 100 },
    { field: 'prepTime', headerName: 'Prep Time', type: 'number', width: 100 },
    { field: 'calories', headerName: 'Calories', type: 'number', width: 100 },
    { field: 'fat', headerName: 'Fat (g)', type: 'number', width: 100 },
    { field: 'carbs', headerName: 'Carbs (g)', type: 'number', width: 100 },
    { field: 'protein', headerName: 'Protein (g)', type: 'number', width: 100 },
    { field: 'creator', headerName: 'Creator', type: 'string', width: 200 },
    { field: 'creationDate', headerName: 'Creation Date', type: 'date', width: 200 },
    
]


const rows = [
    
]

const RecipesTable = () => {
    return (
        <Grid container>
            <Grid item style={{margin: '8rem auto 2rem auto', }}>
                <Typography variant="h6" >
                    Recipes Table
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <div style={{ height: 400, width: '90%', margin: '0 auto' }}>
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

export default RecipesTable;
