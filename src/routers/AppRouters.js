import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Main from '../components/Main';
import MiniBio from '../components/MiniBio';
import Help from '../components/Help';
import NavigationBar from '../components/NavigationBar';
import NotFoundPage from '../components/NotFoundPage';
import Okc from '../components/Okc';
import SocialMedia from '../components/SocialMedia';
import Salsa from '../components/Salsa';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Animations from '../components/Animations';

Animations();

const AppRouter = () => (
    <BrowserRouter>
    <div className="container">
        <NavigationBar />
        <Switch>
            <Route path="/" component={Main} exact={true}/>
            <Route path="/help" component={Help} />
            <Route component={NotFoundPage}/>
    </Switch>
    <MiniBio />
    <Okc />
    <SocialMedia />
    <Salsa />
    <Projects />    
    <Footer />
    </div>
    
    </BrowserRouter>
)

export default AppRouter;