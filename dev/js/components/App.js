import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>May the force be with you</h2>
        <UserList />
        <hr />
        <UserDetails />
    </div>
);

export default App;
