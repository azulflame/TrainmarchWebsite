import React from "react";
import Helmet from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet><title>Not Found</title></Helmet>
            <h1>You shouldn't be here. Contact Azulflame with the link you followed to get to this place.</h1>
        </>
    )
}