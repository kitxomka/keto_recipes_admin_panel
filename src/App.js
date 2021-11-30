import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Dashboard from './components/dashboard/Dashboard';
import UsersTable  from './components/usersTable/UsersTable';
import RecipesTable from './components/recipesTable/RecipesTable';
import HomeWidgets from './components/homeWidgets/HomeWidgets';


const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
});

const App = () => {

  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Dashboard/>
        <Routes>
          <Route path='/dashboard' element={<HomeWidgets/>} />
          <Route path='/users-table' element={<UsersTable/>} />
          <Route path='/recipes-table' element={<RecipesTable/>} />
        </Routes>
      </div>
  );
};

export default App;
