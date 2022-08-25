import React from "react";
import Everestlogo from '../../assets/images/Everestlogo.png';
export const Header = () => {
    return(
        <>
        <nav>
        <div className="bg-nav py-4 position-relative">
            <p>&nbsp;</p>
            <div className=" position-absolute bg-light p-2 shadow thislogo">
                <img src={Everestlogo} alt="Company logo" width="204px" height="83px"/>
            </div>
        </div>
    </nav>
    <br/><br/>
    <br/>
        </>  
    )
}