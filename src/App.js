import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AdminPanel, Home} from "./component";
// import { VisitorForm } from './component';
// import { Header} from './composed';
// import {AdminPanel} from './component';
// import React, { useState, useEffect } from "react";
// import  {Helmet} from "react-helmet";

import { VisitorForm } from "component/VisitorForm";
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
// import { AdminPanel } from "component/AdminPanel";

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import { Header } from 'composed';

function App() {
  // const routes = (
  //   <BrowserRouter>
        
  //           <Routes>
  //               <Route path="/visitorform" component={<VisitorForm/>} exact={true}/>
  //               <Route path="/adminpanel" component={<AdminPanel/>} exact={true}/>

  //           </Routes>
       
  //   </BrowserRouter>
  //   );
  // const [data, setData]= useState([]);
  // useEffect(() => {
  //   fetch("http://192.168.56.1/api/getVisitorData.php")
  //       .then((result) => (result.json().then(
  //         (resp) => {
  //             // console.warn("result", resp)
  //             setData(resp)

  //         }))
  //       ,
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
        
  //       )
  //   }, [])
    // console.warn(data)
  return (
   <>
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} exact/>
          <Route path="/visitor" element={<><Header/><VisitorForm/></>}/>
          <Route path="/admin" element={<><AdminPanel/></>}/>
        </Routes>
      </HashRouter>
    </div>
      </>
  )

       
  // <div className="row">
  //                   <div className="col-lg-12">
  //                        <h2 className="title-1 m-b-25">Visitor's Data</h2>
  //                        <div className="table-responsive table--no-card m-b-40">
  //                            <table className="table table-borderless table-striped table-earning">
  //                                <thead>
  //                                    <tr>
  //                                        <th>id</th>
  //                                        <th>name ID</th>
  //                                        <th>dob</th>
  //                                        <th className="text-right">gender</th>
  //                                        <th className="text-right">marital</th>
  //                                        <th className="text-right">nationality</th>
  //                                    </tr>
  //                                </thead>
  //                                <tbody>
  //                                 {data.map((items)=>
  //                                  <tr>
  //                                  <td>{items.id}</td>
  //                                  <td>{items.name}</td>
  //                                  <td>{items.dob}</td>
  //                                  <td className="text-right">{items.gender}</td>
  //                                  <td className="text-right">{items.maritial_status}</td>
  //                                  <td className="text-right">{items.nationality}</td>
  //                              </tr>)}
                                    
                                     
  //                                </tbody>
  //                            </table>
  //                        </div>
  //                    </div>
  //                    </div>
                      //  );


// }
 // const App = () =>{}

//   const [value, setValue] = useState(0)


//   const addFun = () => {
//     setValue((prevState)=>prevState+1)

//   }
//   const subFun = () => {
//     setValue((prevState)=>prevState-1)

//   } */}


 //   return (
//     <>
//     <Header/>
//     <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
//       <div className='p-3 shadow rounded-3'>
//         <div className='d-flex justify-content-center py-2'><p className='fs-2 fw-bold'>{value}</p></div>
//         <div className='d-flex gap-2'>
//           {/* <button onClick={addFun} className='btn btn-primary'>Add</button>
//           <button onClick={subFun} className='btn btn-danger'>Subtract</button> */}
 //           <MyBtn onClick={addFun} label="Add" className="primary"/>
//           <MyBtn onClick={subFun} label="Subtract" className="danger"/>
//         </div> 
 //       </div> 
 //     </div>
//   </>
//   )
// } 

// export default App;


// const MyBtn = ({label, className, onClick}) => <button onClick={onClick} className={`btn btn-${className}`}>{label}</button>



//  const AppEffect = () =>{

//   const [counter, setCounter] = useState(0)
//   const [counter2, setCounter2] = useState(0)

//   // useEffect(()=>{
//   //   console.log('I am here')
//   // })

//   useEffect(()=>{
//     console.log('I am here')
//   },[counter])

//   useEffect(()=>{
//     console.log('I am here 2')
//   },[counter2])


//   const addFun = () => {
//     setCounter((prevState)=>prevState+1)

//   }
//   const subFun = () => {
//     setCounter((prevState)=>prevState-1)

//   }

//   const addFun2 = () => {
//     setCounter2((prevState)=>prevState+1)

//   }
//   const subFun2 = () => {
//     setCounter2((prevState)=>prevState-1)

//   }
  



//   return <>
//        <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
//       <div className='p-3 shadow rounded-3'>
//         <div className='d-flex justify-content-center py-2'><p className='fs-2 fw-bold'>{counter}</p></div>
//         <div className='d-flex gap-2'>
//           {/* <button onClick={addFun} className='btn btn-primary'>Add</button>
//           <button onClick={subFun} className='btn btn-danger'>Subtract</button> 
//           <MyBtn onClick={addFun} label="Add" className="primary"/>
//           <MyBtn onClick={subFun} label="Subtract" className="danger"/>
//         </div>
//       </div>
//       <div className='p-3 shadow rounded-3'>
//         <div className='d-flex justify-content-center py-2'><p className='fs-2 fw-bold'>{counter2}</p></div>
//         <div className='d-flex gap-2'>
//           {/* <button onClick={addFun} className='btn btn-primary'>Add</button>
//           <button onClick={subFun} className='btn btn-danger'>Subtract</button> 
//           <MyBtn onClick={addFun2} label="Add2" className="primary"/>
//           <MyBtn onClick={subFun2} label="Subtract2" className="danger"/>
//         </div>
//       </div>
//     </div>
//     </>
// }


// const AppForm = () =>{


//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [gender, setGender] = useState('')
//   const [isAgree, setIsAgree] = useState(false)


//   const onGenderChange = (e) =>{
//     setGender(e.target.value)
//   }

//   return <div className='container p-5'>
//   <form>
//   <div className="row mb-3">
//     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div className="row mb-3">
//     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="inputPassword3"/>
//     </div>
//   </div>
//   <fieldset className="row mb-3">
//     <legend className="col-form-label col-sm-2 pt-0">Gender {gender}</legend>
//     <div className="col-sm-10">
//       <div className="form-check">
//         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male" onChange={onGenderChange} />
//         <label className="form-check-label" htmlFor="gridRadios1">
//           Male
//         </label>
//       </div>
//       <div className="form-check">
//         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" onChange={onGenderChange}/>
//         <label className="form-check-label" htmlFor="gridRadios2">
//         Female
//         </label>
//       </div>
//       <div className="form-check disabled">
//         <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="others" onChange={onGenderChange}/>
//         <label className="form-check-label" htmlFor="gridRadios3">
//           Other
//         </label>
//       </div>
//     </div>
//   </fieldset>
//   <div className="row mb-3">
//     <div className="col-sm-10 offset-sm-2">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" id="gridCheck1" value={isAgree?'on':'off'} onChange={(e)=>{setIsAgree(e.target.value === 'on'?false:true)}}/>
//         <label className="form-check-label" htmlFor="gridCheck1">
//           I agree {`${isAgree}`}
//         </label>
//       </div>
//     </div>
//   </div>
//   <button type="submit" className="btn btn-primary">Sign in</button>
// </form>
//   </div>
// }


// const App = () =>{

//   const [todos, setTodos] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(()=>{
//     getMyTodos()


//   },[])

//   const getMyTodos = async() =>{
//     setIsLoading(true)
//     // await fetch('http://localhost/todo/todoallget.php')
//     // .then((res)=>res.json())
//     // .then((res)=>{setTodos(res.data)})
//     // .catch((e)=>{})
//     const res = await fetch('http://localhost/todo/todoallget.php')
//     const myTodo = await res.json()
//     setTodos(myTodo.data)
//     setIsLoading(false)
//   }

//   return <div className='container p-3'>{isLoading? 
//   <p>Loading</p>
//   :
//   <>
//   <div className='d-flex flex-column'>
//     {todos?.map((todo, index)=> <div className='card card-body'>{todo?.title}</div>)}
//     </div>
//   </>
//   }
//   </div>

// }
}
export default App