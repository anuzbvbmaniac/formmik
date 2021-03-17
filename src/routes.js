import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./hoc/main-layout";
import Form from "./pages/form";

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path="/" component={Form}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
};

export default Routes;
