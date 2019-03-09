import React from 'react';

/*
 * Render a simple bootstrap navbar.
 */
export default (): React.ReactElement<HTMLDivElement> => {
    return (
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#">RIOT</a>
                {/* <a className="btn btn-primary" href="#">Sign In</a> */}
            </div>
        </nav>
    );
}
