import React, { useState, useEffect } from "react";
import { Sidebar, TextInput } from "../../composed";
// import { slide as Menu } from 'react-burger-menu';

// import { Helmet } from "react-helmet";
// import "../AdminPanel/css/font-face.css";
// import "../AdminPanel/vendor/font-awesome-4.7/css/font-awesome.min.css";
// import "../AdminPanel/vendor/font-awesome-4.7/css/font-awesome.min.css";
// import "../AdminPanel/vendor/bootstrap-4.1/bootstrap.min.css";
// import "../AdminPanel/vendor/animsition/animsition.min.css";
// import "../AdminPanel/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css";
// import "../AdminPanel/vendor/wow/animate.css";
// import "../AdminPanel/vendor/css-hamburgers/hamburgers.min.css";
// import "../AdminPanel/vendor/slick/slick.css";
// import "../AdminPanel/vendor/select2/select2.min.css";
// import "../AdminPanel/vendor/perfect-scrollbar/perfect-scrollbar.css";
// import "../AdminPanel/css/theme.css";
import logo from "../../assets/images/Everestlogo.png";
// import {API} from '../../composed';

export const AdminPanel = () => {
  // const api = process.env.API;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.79/api/getVisitorData.php").then((result) =>
      result.json().then((resp) => {
        // console.warn("result", resp)
        setData(resp);
      })
    );
  }, []);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <div className="bg-nav py-5 position-relative"></div>
      <Sidebar />
      <div className="d-flex flex-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto mt-5">
              <div className="search">
                <TextInput
                  id="outlined-basic"
                  onChange={inputHandler}
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              </div>
              <h2 className="title-1 m-b-25">Visitor's Data</h2>
              {/* <List input={inputText} datas={data}/> */}
              <div className="table-responsive table--no-card m-b-40">
                <table className="table table-borderless table-striped table-earning">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name ID</th>
                      <th>dob</th>
                      <th className="text-right">gender</th>
                      <th className="text-right">marital</th>
                      <th className="text-right">nationality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((items) => (
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.dob}</td>
                        <td className="text-right">{items.gender}</td>
                        <td className="text-right">{items.maritial_status}</td>
                        <td className="text-right">{items.nationality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
