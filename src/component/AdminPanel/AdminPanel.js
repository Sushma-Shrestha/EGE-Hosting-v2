import React, { useState, useEffect } from "react";
import { Sidebar, TextInput } from "../../composed";
import logo from "../../assets/images/Everestlogo.png";
// import {API} from '../../composed';

export const AdminPanel = () => {
  // const api = process.env.API;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://Form.everestglobaledu.com/api/getVisitorData.php").then((result) =>
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
    <div className='position-fixed w-100'>
      <div className="bg-nav py-5 position-relative"></div></div>
      <div className="pt-5"><div className="pt-5"><Sidebar /></div></div>
      <div className="d-flex flex-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto mt-5">
              <h2 className="title-1 m-b-25">Visitor's Data</h2>
              {/* <List input={inputText} datas={data}/> */}
              <div className="table-responsive table--no-card m-b-40">
                <table className="table table-borderless table-striped table-earning">
                  <thead>
                    <tr className="text-center">
                      <th>id</th>
                      <th>name ID</th>
                      <th>dob</th>
                      <th>gender</th>
                      <th>marital</th>
                      <th>nationality</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((items) => (
                      <tr>
                        <td className="text-center">{items.id}</td>
                        <td className="text-center">{items.name}</td>
                        <td className="text-center">{items.dob}</td>
                        <td className="text-center">{items.gender}</td>
                        <td className="text-center">{items.maritial_status}</td>
                        <td className="text-center">{items.nationality}</td>
                        <td className="text-center"><i className="bi bi-eye-fill"></i></td>
                        <td className="text-center"><i className="bi bi-pencil"></i></td>
                        <td className="text-center"><i className="bi bi-trash"></i></td>
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
