import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Pages/Footer/Footer';
import Home from './components/Pages/HomePage/Home';

export const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>

                <Route path="/" exact component={Home} />


            </Switch>   
            <Footer />       
        </div>
    )
}

export default App;