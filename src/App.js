import React, {Fragment} from 'react';
import './App.scss';
import {Container, Section} from 'rbx';
import Header from './components/header';
import Routes from './router';

const App = () => (
    <Fragment>
        <Header />
        <section>
            <Container>
                <Routes /> 
            </Container>
        </section>
    </Fragment>
)

export default App;
