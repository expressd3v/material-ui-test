import React, {FC, Fragment} from 'react';
import Header from "./components/header";

interface Props {
    children?: any;
}

const Layout: FC<Props> = (props) => {
    const {children} = props

    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    );
};

export default Layout;