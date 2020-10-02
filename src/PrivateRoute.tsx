import React from 'react';
import {Route, RouteComponentProps} from "react-router";

const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(routeProps: RouteComponentProps) => (
                <RouteComponent {...routeProps} />
            )}
        />
    );
};

export default PrivateRoute;