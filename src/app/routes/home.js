import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Page Home.</h1>
        <Link to="/post">Link to Post</Link>
    </div>
);

export default {
    path: '/',
    exact: true,
    component: Home
};
