import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./hoc/main-layout";
import Form from "./pages/form";
import FormTwo from "./pages/form-two";

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path="/formTwo" component={FormTwo}/>
                    <Route path="/" component={Form}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
};

export default Routes;
