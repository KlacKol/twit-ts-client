import React from 'react';
import {Redirect, Route, RouteComponentProps} from "react-router";
import {RootStateOrAny, shallowEqual, useSelector} from "react-redux";
import {PATH_LOGIN} from "./routeList";

const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
    const loggedIn = useSelector((res: RootStateOrAny) => res.user.loggedIn, shallowEqual)
    return (
        <Route
            {...rest}
            render={(routeProps: RouteComponentProps) =>
                loggedIn ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={PATH_LOGIN} />
                )
            }
        />
    );
};

export default PrivateRoute;