import React, { useEffect, useState, Fragment } from "react"
import Loader from "../loader/Loader"

const LandingPage = (props) => {
    const [view] = useState(<Loader />)

    useEffect(() => {
        setTimeout(() => {
            props.history.push("/dashboard")
        }, 9000);
        // eslint-disable-next-line 
    }, []);

    return (
        <Fragment>
            {view}
        </Fragment>

    )
}

export default LandingPage