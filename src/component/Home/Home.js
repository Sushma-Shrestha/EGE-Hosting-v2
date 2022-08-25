import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
// import { BrowserRouter, Router, Layout, Switch, Route, Link, Routes} from 'react-router-dom';
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { AdminPanel } from "component/AdminPanel";
// import { VisitorForm } from "component/VisitorForm";

// import {Header} from '../../composed';


export const Home = () =>{
    const navigate = useNavigate()  

    // const routes = (
    //     <BrowserRouter>
            
    //             <Routes>
    //                 <Route path="/visitorform" component={<VisitorForm/>}/>
    //                 <Route path="/adminpanel" component={<AdminPanel/>}/>
    
    //             </Routes>
           
    //     </BrowserRouter>
    //     );
    return(
        <>
        
        <section className="boxes mx-5">

        <div className="box">
            <i className="bi bi-mortarboard-fill icon text-light m-3"></i>
            <h3><button onClick={()=> {navigate('/visitor');}} className="text-light fw-bold bg-transparent border-0"> College Enrollment Form</button></h3>
        </div>

        <div className="box">
            <i className="bi bi-geo-alt-fill icon text-light m-3"></i>
            <h3><button onClick={()=> {navigate('/visitor');}} className="text-light fw-bold bg-transparent border-0"> Visitor Form</button></h3>
            
        </div>

        <div className="box">
        <i className="bi bi-mortarboard-fill icon text-light m-3"></i>
        <h3><button onClick={()=> {navigate('/visitor');}} className="text-light fw-bold bg-transparent border-0"> College Enrollment Form</button></h3>
            
        </div>

        <div className="box">
            <i className="bi bi-geo-alt-fill icon text-light m-3"></i>
            <h3><button onClick={()=> {navigate('/visitor');}} className="text-light fw-bold bg-transparent border-0"> Visitor Form</button></h3>
            
        </div>

        <div className="box">
            <i className="bi bi-mortarboard-fill icon text-light m-3"></i>
            <h3><button onClick={()=> {navigate('/visitor');}} className="text-light fw-bold bg-transparent border-0"> College Enrollment Form</button></h3>
            
        </div>

    </section>
        </>
    )
}