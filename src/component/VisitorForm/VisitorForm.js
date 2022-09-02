import React, {useState} from "react";

import { TextInput, RadioButton} from '../../composed';
import * as Yup from 'yup';
// import { Formik } from "formik";
import { useFormik } from 'formik';
// import axios from 'axios';
// import { data } from "jquery";
// import {API} from "../../composed";
import { useNavigate } from "react-router-dom";


export const VisitorForm = () => {
    // <API/>
    // const api = process.env.API ;

    let navigate = useNavigate();

    const [master, setShow] = useState(false);
    const [bachelor, setBachelor] = useState(false);
    const [plustwo, setPlustwo] = useState(false);
    const [work, setWork] = useState(false);
    const [gap, setGap] = useState(false);
    const [visa, setVisa] = useState(false);
    const [toefl, settoefl] = useState(false);
    const [ielts, setielts] = useState(false);
    const [sat, setsat] = useState(false);
    const [gmat, setgmat] = useState(false);
    const [gre, setgre] = useState(false);
    const [pte, setpte] = useState(false);
    const [other, setother] = useState(false);
    // const [confirm, setConfirm] = useState(false);
// const [log,setLog] = useState();
    

   //useEffect
   //useRef
   //useMemo 
   //useCallback
   //userState
   //useLayoutEffect
   //useImperativeHandle
   //useReducer
   //useContext
   //useId
   //useTransition 
    const isChecked = (id) =>{
        var e = document.getElementById(id);
        return (e && e.checked);
    }
    const know_us = () => {
        let text = ""
        
        if (isChecked("fb")){ 
            text = text + "fb, "
        }
        if (isChecked("website")){ 
            text = text + "website, "
        }
        if (isChecked("paperadv")){ 
            text = text + "paperadv, "
        }
        if (isChecked("edufair")){ 
            text = text + "edufair, "
        }
        if (isChecked("friends")){ 
            text = text + "friends, "
        }
        if (isChecked("reference")){ 
            text = text + "reference, "
        }
        if (isChecked("hoardingboards")){ 
            text = text + "hoardingboards, "
        }
        if (isChecked("tv")){ 
            text = text + "tv, "    
        }
        return text;
    }

    const forWork = ()=>{
        setWork(true);
    }
    const forWorkHide = ()=>{
        setWork(false);
    }
   const formaster = ()=>{
        setShow(true);
        setBachelor(true);
        setPlustwo(true);
    }
    const forBachelor = ()=>{
        setShow(false);
        setBachelor(true);
        setPlustwo(true);
    }
    const forplustwo = ()=>{
        setShow(false);
        setBachelor(false);
        setPlustwo(true);
    }
    const fornone = ()=>{
        setShow(false);
        setBachelor(false);
        setPlustwo(false);
    }

    const forGap = ()=>{
        setGap(true);
    }

    const forGapHide = ()=>{
        setGap(false);
    }
    
    const forBeforeApplied = ()=>{
        setVisa(true);
    }
    const forBeforeNotApplied = ()=>{
        setVisa(false);
    }
 
    // const forConfirmed =()=>{
    //     setConfirm(!confirm);
    //     // formik.values.confirm===true? false:true;
    // }
    // const [data, setData] = useState([])
    const [data, setData]= useState([]);

    // 
    // occupation, telephone, temp add, language, how do you, remarks
    // Intended country: Australia, canada, usa, uk, denmark, 
    const formik = useFormik({
            initialValues:{
            name:'',
            dob: '0000-00-00',
            gender:'',
            marital:'',
            parentsname:'',
            occupation:'',
            nationality:'Nepal',
            telephone:'0000000000',
            parentscontact:'',
            mobile:'',
            email: '',
            tempaddress:'',
           permaddress:'',
            applytype:'',
            nameofmaster:'', 
            scoreofmaster:'',
            passedofmaster:'0000-00-00',
            nameofbachelor:'', 
            scoreofbachelor:'',
            passedofbachelor:'0000-00-00',
            nameofplustwo:'', 
            scoreofplustwo:'',
            passedofplustwo:'0000-00-00',
            educationoption:'',
            workoption:'',
            nameofwork:'',
            startofwork:'0000-00-00',
            endofwork:'0000-00-00',
            edugap:'',
            gapstart:'0000-00-00',
            gapend:'0000-00-00',
            intendedcourse:'',
            intendedcountry:'Australia',
            visa:'',
            appliedcountry:'',
            toefl:'',
            ielts:'',
            sat:'',
            gmat:'',
            gre:'',
            pte:'',
            otherlan:'',
            other:'',
            know_us:'na',
            remarks:'',
            confirm:"off",
            fb:"",
            website:"",
            paperadv:"",
            edufair:"",
            friends:"",
            reference:"",
            hoardingboards:"",
            tv:""
        },
        
        validationSchema: Yup.object({
            name: Yup.string()
            .min(5, "Must be atleast 5 characters.")
            .required('Required'),
            dob: Yup.date()
            .required('Required').min('0001-00-00', 'Required date'),
            gender: Yup.string()
            .oneOf(["male", "female"], "Please select one")
            .required('Required'),
            marital:Yup.string()
            .oneOf(["single", "married"], "Please select one")
            .required('Marital status is required.'),
            parentsname: Yup.string()
            .min(5, "Must be atleast 5 characters.")
            .required('Required'),
            // nationality: Yup.string()
            // .required('Nationality is required.'),
            parentscontact: Yup.string()
            .max(10, 'Enter valid number with 10 digits')
            .min(10, 'Enter valid number with 10 digits')
            .required('Parents Contact is required'),
            mobile: Yup.string()
            .max(10, 'Enter valid number with 10 digits')
            .min(10, 'Enter valid number with 10 digits')
            .required('Parents Contact is required'),
            email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
            permaddress: Yup.string()
            .required('Required'),
            applytype: Yup.string()
            .oneOf(["single", "dependent"], "Please select one")
            .required('Required'),
            educationoption: Yup.string()
            .oneOf(["master","bachelor", "plustwo", "none"], "Please select one")
            .required('Required'),
            nameofmaster: Yup.string()
            .when('educationoption', {
                is: (educationoption) => educationoption === 'master',
                then: Yup.string()
            .required("Required")}),
            scoreofmaster: Yup.string()
            .when('educationoption', {
                is: (educationoption) => educationoption === 'master',
                then: Yup.string()
            .required("Required")}),
            passedofmaster: Yup.date()
            .when('educationoption', {
                is: (educationoption) => educationoption === 'master',
                then: Yup.date()
            .required("Required").min('0001-00-00', 'Required date')}),
            nameofbachelor: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master'),
                then: Yup.string()
            .required("Required")}),
            scoreofbachelor: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master'),
                then: Yup.string()
            .required("Required")}),
            passedofbachelor: Yup.date()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master'),
                then: Yup.date()
            .required("Required").min('0001-00-00', 'Required date')}),
            nameofplustwo: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master' || educationoption === 'plustwo'),
                then: Yup.string()
            .required("Required")}),
            scoreofplustwo: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master' || educationoption === 'plustwo'),
                then: Yup.string()
            .required("Required")}),
            passedofplustwo: Yup.date()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master' || educationoption === 'plustwo'),
                then: Yup.date()
            .required("Required").min('0001-00-00', 'Required date')}),
           
            workoption: Yup.string()
            .oneOf(["yes", "no"], "Please select one")
            .required('required'),
            nameofwork:Yup.string().when('workoption', {
                is: (workoption) => workoption === 'yes',
                then: Yup.string().required('Required')
            }),
            startofwork:Yup.date().when('workoption', {
                    is: (workoption) => workoption === 'yes',
                    then: Yup.date().required('Required').min('0001-00-00', 'Required date')
                }),
                endofwork:Yup.date().when('workoption', {
                        is: (workoption) => workoption === 'yes',
                        then: Yup.date().required('Required').min('0001-00-00', 'Required date')
                    }),
            edugap: Yup.string()
            .oneOf(["yes", "no"], "Please select one")
            .required('Required'),
            gapstart:Yup.date().when('edugap', {
                is: (edugap) => edugap === 'yes',
                then: Yup.date().required('Required').min('0001-00-00', 'Required date')
            }),
            gapend:Yup.date().when('edugap', {
                is: (edugap) => edugap === 'yes',
                then: Yup.date().required('Required').min('0001-00-00', 'Required date')
            }),
            intendedcourse: Yup.string()
            .required('Required'),
            // intendedcountry: Yup.string()
            // .required('Required'),
            visa: Yup.string() 
            .oneOf(["yes", "no"], "Please select one")
            .required('Required'), 
            appliedcountry:Yup.string().when('visa', {
                is: (visa) => visa === 'yes',
                then: Yup.string().required('Required')
            }),

            confirm: Yup.string().oneOf(["on"], 'Accept Terms & Conditions is required')
        }),
        onSubmit: function (values) {
              let formabc = new FormData();
             
            formabc.append("name", formik.values.name)
            formabc.append( "dob", formik.values.dob)
            formabc.append( "gender", formik.values.gender)
            formabc.append( "marital", formik.values.marital)
            formabc.append( "parentsname", formik.values.parentsname)
            formabc.append( "occupation", formik.values.occupation)
            formabc.append( "nationality", formik.values.nationality)
            formabc.append( "telephone", formik.values.telephone)
            formabc.append( "parentscontact", formik.values.parentscontact)
            formabc.append( "mobile", formik.values.mobile)
            formabc.append( "email", formik.values.email)
            formabc.append( "tempaddress", formik.values.tempaddress)
            formabc.append( "permaddress", formik.values.permaddress)
            formabc.append( "applytype", formik.values.applytype)
            formabc.append( "nameofmaster", formik.values.nameofmaster)
            formabc.append( "scoreofmaster", formik.values.scoreofmaster)
            formabc.append( "passedofmaster", formik.values.passedofmaster)
            formabc.append( "nameofbachelor", formik.values.nameofbachelor)
            formabc.append( "scoreofbachelor", formik.values.scoreofbachelor)
            formabc.append( "passedofbachelor", formik.values.passedofbachelor)
            formabc.append( "nameofplustwo", formik.values.nameofplustwo)
            formabc.append( "scoreofplustwo", formik.values.scoreofplustwo)
            formabc.append( "passedofplustwo", formik.values.passedofplustwo)
            formabc.append( "educationoption", formik.values.educationoption)
            formabc.append( "workoption", formik.values.workoption)
            formabc.append( "nameofwork", formik.values.nameofwork)
            formabc.append( "startofwork", formik.values.startofwork)
            formabc.append( "endofwork", formik.values.endofwork)
            formabc.append( "edugap", formik.values.edugap)
            formabc.append( "gapstart", formik.values.gapstart)
            formabc.append( "gapend", formik.values.gapend)
            formabc.append( "intendedcourse", formik.values.intendedcourse)
            formabc.append( "intendedcountry", formik.values.intendedcountry)
            formabc.append( "visa", formik.values.visa)
            formabc.append( "appliedcountry", formik.values.appliedcountry)
            formabc.append( "toefl", formik.values.toefl)
            formabc.append( "ielts", formik.values.ielts)
            formabc.append( "sat", formik.values.sat)
            formabc.append( "gmat", formik.values.gmat)
            formabc.append( "gre", formik.values.gre)
            formabc.append( "pte", formik.values.pte)
            formabc.append( "otherlan", formik.values.otherlan)
            formabc.append( "other", formik.values.other)
            formabc.append( "know_us", know_us())
            formabc.append( "remarks", formik.values.remarks)
            formabc.append( "confirm", formik.values.confirm)
            
            fetch(
                "https://Form.everestglobaledu.com/api/addVisitor.php",
                  {        
                  method:"POST",
                  mode: 'no-cors',
                  headers:{
                      'Accept' :"application/json",
                      'Content-Type': "application/json",
                      "Access-Control-Request-Headers": "*",
                      "Access-Control-Request-Method": "*"
                  },
                  body:formabc
                  
              })
            //   .then((response) => {
            //         alert("The data is inserted!!");
            //         console.log(response);
            //     })
            //     .catch((errors)=>{
            //         alert("Something went wrong!\nTry again later!!");
            //         // console.log(errors.json())
            //     })
            .then(async response => {
                // const isJson = response.headers.get('content-type')?.includes('application/json');
                // const data = isJson && await response.json();
    
                // // check for error response
                // if (!response.ok) {
                //     // get error message from body or default to response status
                //     const error = (data && data.message) || response.status;
                //     return Promise.reject(error);
                // }
                // console.log("the data inserted");
                alert("The form is submitted!\n Thank you!!");
                
                // window.location.reload(true);
                navigate('/');
                // formik.values.resetForm();
                // this.setState({ postId: data.id })
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
                alert("There was an error!\nPlease try again later!!!");
            })
            }})
   
                // .then(json => {
                //     console.log("jsonnn", json)
                //     // setData(json)
                // })
            //     .catch((error) => {
            //         console.log("e", error);
            //     })
            //     }
            // })
             
                // console.log("error"),
                    // if(response){
                    //     console.log("datainserted")
                    // }
//                 // console.log(this.state.datainserted);
//             //   var InsertAPIURL = "https://192.168.56.1/api/addVisitor.php";   //API to render signup
        
    
    // FETCH func ------------------------------------
    // fetch(InsertAPIURL,{
    //     method:'POST',
    //     // headers:headers,
    //     body: JSON.stringify(Data) //convert data to JSON
    // })
    // .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    // .then((response)=>{
    //   alert(response[0].Message);       // If data is in JSON => Display alert msg
    //   this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
    // })
    // .catch((error)=>{
    //     alert("Error Occured" + error);
    // })
    // }
          
        
       
        
    //   const funct1=(ajhdj)=>{
    //     // console.log(ajhdj)
    //   }
      
    return(
        <>
         <div className=" col-md-12 col-sm-12 text-end px-4" id="backbutton" style={{transform:"translate(0%, -230%)"}}>
          <button onClick={()=> {navigate('/');}} className="text-light fw-bold bg-transparent border-0" style={{zIndex:"+9999"}}><i className="bi-arrow-left fs-1"></i></button>
        </div>
         <div className="container pb-5">
        
                <div className="d-flex justify-content-center">
                    <div className="col-11 mx-0 px-0">
                        <form  onSubmit={formik.handleSubmit} method="POST" action="https://form.everestglobaledu.com/api/addVisitor.php">
                         <div className="form-group row justify-content-center">
                                <div className="col-md-6 fs-1 text-white text-center Visitorformtext">
                                    VISITOR'S FORM 
                                </div>
                            </div>
                            <br/>
                                <br/>
                            <div className="form-group">
                                <div className="col-sm-6 mt-3 heading">
                                    <p className="fs-3">Student details</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Name" id="name" type="text" placeholder="Your Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />   
                                    {formik.touched.name && formik.errors.name ?(
                                        <div className="error col-sm-6"> {formik.errors.name} </div>
                                    ) :null}
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Date of Birth" id="dob" type="date" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} />    
                                    {formik.touched.dob && formik.errors.dob ?(
                                        <div className="error col-sm-2"> {formik.errors.dob} </div>
                                    ) :null}
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-5 mt-3 ">
                                        <label for="birthday" className="fs-5 label-color">Select Gender:</label>  
                                    </div>
                                </div>
                                <div className="form-group row ms-1">
                                    
                                    <div className="form-check col-sm-3 mt-3 ">
                                        <RadioButton id="male" labelname="Male" name="gender" value='male' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    </div>
                                    <div className="form-check col-sm-3 mt-3 ">
                                        <RadioButton id="female" labelname="Female" name="gender" value='female' onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                                    </div>
                                    {formik.touched.gender && formik.errors.gender ?(
                                        <div className="error col-4"> {formik.errors.gender} </div>
                                    ) :null}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 ">
                                    <label for="marital status" className="fs-5 label-color">Marital Status:</label>  
                                </div>
                            </div>
                            <div className="form-group row ms-1">
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="single" labelname="Single" name="marital" value="single" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="married" labelname="Married" name="marital" value="married" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </div>
                                {formik.touched.marital && formik.errors.marital ?(
                                        <div className="error col-6"> {formik.errors.marital} </div>
                                    ) :null}
                            </div>
                            
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3  heading">
                                    <p className="fs-3">Parents details</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Parent's name" id="parentsname" name="parentsname" type="text" placeholder="Parent's name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.parentsname}/>
                                    {formik.touched.parentsname && formik.errors.parentsname ?(
                                        <div className="error col-md-2"> {formik.errors.parentsname} </div>
                                    ) :null} 

                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Occupation" id="occupation" name="occupation" type="text" placeholder="Occupation" />
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <label className="label-color m-2">Nationality</label>
                                    <select id="nationality" name="nationality" className="form-control form-select" aria-label="Default select example" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nationality}>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="BoliBhutanvia">BoliBhutanvia</option>
                                        <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curacao">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao">Macao</option>
                                        <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value=">Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option value=">Moldova, Republic of">Moldova, Republic of</option>
                                        <option value=">Monaco">Monaco</option>
                                        <option value=">Mongolia">Mongolia</option>
                                        <option value=">Montenegro">Montenegro</option>
                                        <option value=">Montserrat">Montserrat</option>
                                        <option value=">Morocco">Morocco</option>
                                        <option value=">Mozambique">Mozambique</option>
                                        <option value=">Myanmar">Myanmar</option>
                                        <option value=">Namibia">Namibia</option>
                                        <option value=">Nauru">Nauru</option>
                                        <option value=">Netherlands">Netherlands</option>
                                        <option value=">Netherlands Antilles">Netherlands Antilles</option>
                                        <option value=">New Caledonia">New Caledonia</option>
                                        <option value=">New Zealand">New Zealand</option>
                                        <option value=">Nicaragua">Nicaragua</option>
                                        <option value=">Niger">Niger</option>
                                        <option value=">Nigeria">Nigeria</option>
                                        <option value=">Niue">Niue</option>
                                        <option value=">Norfolk Island">Norfolk Island</option>
                                        <option value=">Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value=">Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russian Federation">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint Barthelemy">Saint Barthelemy</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Martin">Saint Martin</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Sint Maarten">Sint Maarten</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                                        <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    {/* {formik.errors.nationality ?(
                                        <div className="error col-md-2"> {formik.errors.nationality} </div>
                                    ) :null}  */}
                                </div>
                            </div>

                            <br/><hr/><br/>
                                                 
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3  heading">
                                    <p className="fs-3">Contact details</p>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Telephone" id="telephone" name="telephone" type="number" placeholder="Telephone number"/> 
                                    <p className="text-secondary mb-1">(Numbers only)</p>
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Parents Contact" id="parentscontact" name="parentscontact" type="number" placeholder="Parents number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.parentscontact}/> 
                                    <p className="text-secondary mb-1">(Numbers only)</p>
                                    {formik.touched.parentscontact && formik.errors.parentscontact ?(
                                        <div className="error col-md-2"> {formik.errors.parentscontact} </div>
                                    ) :null} 
                                </div>
                                <div className="col-sm-6 mt-3 "> 
                                    <TextInput labelname="Mobile" id="mobile" type="number" name="mobile" placeholder="Mobile number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile}/> 
                                    <p className="text-secondary mb-1">(Numbers only)</p>
                                    {formik.touched.mobile && formik.errors.mobile ?(
                                        <div className="error mb-5"> {formik.errors.mobile} </div>
                                    ) :null} 
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Email" id="email" type="email" name="email" placeholder="Email Address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/> 
                                    {formik.touched.email && formik.errors.email ?(
                                        <div className="error col-md-2"> {formik.errors.email} </div>
                                    ) :null}
                                    
                                </div>
                            </div>

                            <br/> <hr/><br/>

                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <p className="fs-3 heading">Address</p>
                                </div>
                            </div>
                            <div className="form-group row">    
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Temporary Address" id="tempaddress" name="tempaddress" type="text" placeholder="Temporary Address"/> 
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Permanent Address" id="permaddress" name="permaddress" type="text" placeholder="Permanent Address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.permaddress}/> 
                                    {formik.touched.permaddress && formik.errors.permaddress ?(
                                        <div className="error col-md-2"> {formik.errors.permaddress} </div>
                                    ) :null}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 ">
                                    <label className="fs-5 label-color my-2">Apply for</label>  
                                </div>
                            </div>

                            <div className="form-group row ms-1">
                                <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applysingle" labelname="Single" name="applytype" value="single" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applydependent" labelname="Dependent" name="applytype" value="dependent" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                  </div>
                                  {formik.touched.applytype && formik.errors.applytype ?(
                                        <div className="error col-4"> {formik.errors.applytype} </div>
                                    ) :null}
                            </div>

                            <br/><hr/><br/>

                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <label for="Academic" className="fs-3 heading">Academic details</label>  
                                    <p className="text-muted">(Select highest level of your education)</p>
                                </div>
                            </div>

                            <div className="form-group row  ms-1">
                                <div className="form-check col-sm-4 label-color m-2">
                                    <RadioButton id="master" labelname="Master's degree" name="educationoption" value="master" onChange={(e)=>{formaster(); formik.setFieldValue("educationoption", e.target.value = "master")}} onBlur={formik.handleBlur} />
                                </div>
                               
                                <div className="form-check col-sm-4 label-color m-2">
                                  <RadioButton id="bachelor" labelname="Bachelor's degree" name="educationoption" value="bachelor" onChange={(e)=>{forBachelor(); formik.setFieldValue("educationoption", e.target.value = "bachelor")}} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-4 label-color m-2">
                                  <RadioButton id="plustwo" labelname="Intermediate or 10 + 2" name="educationoption" value="plustwo" onChange={(e)=>{forplustwo();formik.setFieldValue("educationoption", e.target.value = "plustwo")}} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-4 label-color m-2">
                                  <RadioButton id="none" labelname="None" name="educationoption" value="none" onChange={(e)=>{fornone(); formik.setFieldValue("educationoption", e.target.value = "none")}} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-4 label-color m-2">
                                {formik.touched.educationoption && formik.errors.educationoption ?(
                                        <div className="error col-md-2"> {formik.errors.educationoption} </div>
                                    ) :null}
                                </div>
                            </div>
                            <br/>
                            <div className="academic">
                                
                                {master && 
                                    <div className="master">
                                    <div className="col-sm-12 mt-3 ">
                                        <TextInput labelname="Name of Institute (Master's degree)" id="nameofmaster" name="nameofmaster" type="text" placeholder="Name of Institute" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameofmaster}/> 
                                        {formik.errors.nameofmaster ?(
                                        <div className="error col-md-2"> {formik.errors.nameofmaster} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                    <div className="col-sm-6 mt-3 ">
                                        <TextInput labelname="Score Obtained" id="scoreofmaster" name="scoreofmaster" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofmaster}/> 
                                        { formik.errors.scoreofmaster ?(
                                        <div className="error col-md-2"> {formik.errors.scoreofmaster} </div>
                                    ) :null}
                                    </div>
                                    <div className="col-sm-6 mt-3 ">
                                        <TextInput labelname="Passed Year" id="passedofmaster" name="passedofmaster" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofmaster}/> 
                                        {formik.errors.passedofmaster ?(
                                        <div className="error col-md-2"> {formik.errors.passedofmaster} </div>
                                    ) :null}
                                    </div>
                                </div>
                                </div>
                                }
                                    
                                {bachelor && 
                                <div className="bachelor">
                                    <div className="col-sm-12 mt-3 ">
                                        <TextInput labelname="Name of Institute (Bachelor's degree)" id="nameofbachelor" name="nameofbachelor" type="text" placeholder="Name of Institute" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameofbachelor}/> 
                                        {formik.errors.nameofbachelor ?(
                                        <div className="error col-md-2"> {formik.errors.nameofbachelor} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Score Obtained" id="scoreofbachelor" name="scoreofbachelor" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofbachelor}/> 
                                            {formik.errors.scoreofbachelor ?(
                                        <div className="error col-md-2"> {formik.errors.scoreofbachelor} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Passed Year" id="passedofbachelor" name="passedofbachelor" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofbachelor}/> 
                                            { formik.errors.passedofbachelor ?(
                                        <div className="error col-md-2"> {formik.errors.passedofbachelor} </div>
                                    ) :null}
                                        </div>
                                    </div>
                                </div>
                                }
                                {plustwo &&
                                <div className="intermediate">
                                    <div className="col-sm-12 mt-3 ">
                                        <TextInput labelname="Name of Institute (Intermediate or 10+2)" id="nameofplustwo" name="nameofplustwo" type="text" placeholder="Name of Institute" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameofplustwo}/>
                                        {formik.errors.nameofplustwo ?(
                                        <div className="error col-md-2"> {formik.errors.nameofplustwo} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Score Obtained" id="scoreofplustwo" name="scoreofplustwo" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofplustwo}/> 
                                            {formik.errors.scoreofplustwo ?(
                                        <div className="error col-md-2"> {formik.errors.scoreofplustwo} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Passed Year" id="passedofplustwo" name="passedofplustwo" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofplustwo}/> 
                                            {formik.errors.passedofplustwo ?(
                                        <div className="error col-md-2"> {formik.errors.passedofplustwo} </div>
                                    ) :null}
                                        </div>
                                    </div>
                                </div>
                                }
                                
                            </div>
                            
                            <br/><hr/><br/>

                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <label for="Academic" className="fs-3 heading">Work Experience</label>
                                    <p className="label-color mr-4 mt-4">Have you got work experience?</p>
                                </div>
                            </div>
                            <div className="form-group row  ms-1">
                                <div className="form-check col-sm-3 label-color mt-3">
                                    <RadioButton labelname="Yes" name="workoption" value="yes" onChange={(e)=>{forWork(); formik.setFieldValue("workoption", e.target.value = "yes")}} onBlur={formik.handleBlur}/>
                                </div>
                               
                                <div className="form-check col-sm-3 label-color mt-3">
                                  <RadioButton labelname="No" name="workoption"value="no" onChange={(e)=>{forWorkHide();formik.setFieldValue("workoption", e.target.value = "no")}} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-4 label-color m-2">
                                  {formik.touched.workoption && formik.errors.workoption ?(
                                        <div className="error col-md-2"> {formik.errors.workoption} </div>
                                    ) :null}
                                    </div>
                                </div>
                           
                                {work &&
                                <div className="work-experience">
                                    <div className="col-sm-12 mt-3 ">
                                        <label for="nameofwork" className="label-color m-2">Name of Company (Work Experience)</label>
                                        <input type="text" className="form-control" id="nameofwork" placeholder="Name of Company" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameofwork}/>
                                        { formik.errors.nameofwork ?(
                                        <div className="error col-md-2"> {formik.errors.nameofwork} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <label for="startofwork" className="label-color m-2">Start Date</label>
                                            <input type="date" className="form-control" id="startofwork" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.startofwork}/>
                                            {formik.errors.startofwork ?(
                                        <div className="error col-md-2"> {formik.errors.startofwork} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <label for="endofwork" className="label-color m-2">End Date</label>
                                            <input type="date" className="form-control" id="endofwork" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.endofwork}/>
                                            {formik.errors.endofwork ?(
                                        <div className="error col-md-2"> {formik.errors.endofwork} </div>
                                    ) :null}
                                        </div>
                                        
                                    </div>
                                </div>
                                }
                                
                         

                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <label for="Academic" className="fs-3 heading">Education Gap</label>
                                    <p className="label-color mr-4 mt-4">Have you got education gap?</p>
                                </div>
                            </div>
                            <div className="form-group row ms-1">
                              
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="gapyes" labelname="Yes" name="edugap" value="yes" onChange={(e)=>{forGap() ; formik.setFieldValue("edugap", e.target.value = "yes")}} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="gapno" labelname="No" name="edugap" value="no" onChange={(e)=>{forGapHide (); formik.setFieldValue("edugap", e.target.value = "no")}} onBlur={formik.handleBlur}/>
                                  </div>
                                  <div className="form-check col-sm-3 mt-3 ">
                                  {formik.touched.edugap && formik.errors.edugap ?(
                                        <div className="error col-md-2"> {formik.errors.edugap} </div>
                                    ) :null}
                                    </div>
                            </div>
                            <br/>
                            {gap &&
                            <div className="educationgap">
                                <div className="form-group row">
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="gapstart" className="label-color m-2">Gap Start Date</label>
                                        <input type="date" className="form-control" id="gapstart" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gapstart}/>
                                        {formik.errors.gapstart ?(
                                        <div className="error col-md-2"> {formik.errors.gapstart} </div>
                                    ) :null}
                                    </div>
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="gapend" className="label-color m-2">Gap End Date</label>
                                        <input type="date" className="form-control" id="gapend" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gapend}/>
                                        {formik.errors.gapend ?(
                                        <div className="error col-md-2"> {formik.errors.gapend} </div>
                                    ) :null}
                                    </div>
                                </div>
                            </div>
                            }
                            
                 
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Intended Course" id="intendedcourse" name="intendedcourse" type="text" placeholder="Intended Course" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intendedcourse}/>
                                    {formik.touched.intendedcourse && formik.errors.intendedcourse ?(
                                        <div className="error col-md-2"> {formik.errors.intendedcourse} </div>
                                    ) :null}
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                {/* Intended country: Australia, canada, usa, uk, denmark, */}
                                <label className="label-color m-2">Intended Country</label>
                                <select id="intendedcountry" name="intendedcountry" className="form-control form-select" aria-label="Default select example" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intendedcountry}>
                                        <option value="Australia">Australia</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    </select>
                                    {/* {formik.touched.intendedcountry && formik.errors.intendedcountry ?(
                                        <div className="error col-md-2"> {formik.errors.intendedcountry} </div>
                                    ) :null} */}
                                </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 my-3 ">
                                    <label for="gap" className="fs-5 label-color m-2">Applied visa before?</label>  
                                </div>
                            </div>
                            <div className="form-group row ms-1">
                              
                                <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applyyes" labelname="Yes" name="visa" value="yes" onChange={(e)=>{forBeforeApplied(); formik.setFieldValue("visa", e.target.value = "yes")}} onBlur={formik.handleBlur}  />
                                  </div>
                                  <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applyno" labelname="No" name="visa"  value="no" onChange={(e)=>{forBeforeNotApplied(); formik.setFieldValue("visa", e.target.value = "no")}} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 ">
                                  {formik.touched.visa && formik.errors.visa ?(
                                        <div className="error col-md-2"> {formik.errors.visa} </div>
                                    ) :null}
                                    </div>
                            </div>
                            <br/>
                            {visa &&
                            <div className="educationgap">
                                <div className="form-group row">
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="Applied country" className="label-color m-2">Applied Country</label>
                                        <input type="text" className="form-control" id="appliedcountry" placeholder="Applied Country" name="appliedcountry" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.appliedcountry}/>
                                        {formik.touched.appliedcountry && formik.errors.appliedcountry ?(
                                        <div className="error col-md-2"> {formik.errors.appliedcountry} </div>
                                    ) :null}
                                    </div>
                                </div>
                            </div>
                            }
                            
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 ">
                                    <label for="gap" className="fs-5 label-color m-2">Language test</label>  
                                </div>
                            </div>

                            <div className="form-group row ms-4">
                                <div className="form-check col-12 col-sm-6 col-md-4 col-lg-3 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-toefl" name="option1" value={toefl} onChange={(e)=>{settoefl(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check1">TOEFL</label>
                                  </div>

                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3  label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-ilets" name="option2" value={ielts} onChange={(e)=>{setielts(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check2">IELTS</label>
                                  </div>
                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3  label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-sat" name="option3" value={sat} onChange={(e)=>{setsat(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check3">SAT</label>
                                  </div>
                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-gmat" name="option4" value={gmat} onChange={(e)=>{setgmat(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check4">GMAT</label>
                                  </div>
                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3  label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-gre" name="option5" value={gre} onChange={(e)=>{setgre(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check4">GRE</label>
                                  </div>
                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3  label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-pte" name="option6" value={pte} onChange={(e)=>{setpte(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check5">PTE</label>
                                  </div>
                                  <div className="form-check col-12 col-sm-4 col-md-4 col-lg-3  label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="check-other" name="option7" value={other} onChange={(e)=>{setother(prevState=>!prevState)}}/>
                                    <label className="form-check-label" for="check5">Other</label>
                                  </div>
                            </div>
                            
                            
                            <div className="form-group score">
                                {toefl &&
                                    <div className="col-sm-6 mt-3 ">
                                    <label for="TOEFL Score" className="label-color m-2">TOEFL Score</label>
                                    <input type="number" className="form-control" id="toefl" placeholder="TOEFL Score"/>
                                    </div>
                                }
                                {ielts &&
                                <div className="col-sm-6 mt-3 ">
                                    <label for="IELTS Score" className="label-color m-2">IELTS Score</label>
                                    <input type="number" className="form-control" id="ielts" placeholder="IELTS Score"/>
                                </div>}
                                {sat &&
                                <div className="col-sm-6 mt-3 ">
                                    <label for="SAT Score" className="label-color m-2">SAT Score</label>
                                    <input type="number" className="form-control" id="sat" placeholder="SAT Score"/>
                                </div>}
                                {gmat &&
                                <div className="col-sm-6 mt-3 ">
                                    <label for="GMAT Score" className="label-color m-2">GMAT Score</label>
                                    <input type="number" className="form-control" id="gmat" placeholder="GMAT Score"/>
                                </div>}
                                {gre &&
                                <div className="col-sm-6 mt-3 ">
                                    <label for="GRE Score" className="label-color m-2">GRE Score</label>
                                    <input type="number" className="form-control" id="gre" placeholder="GRE Score"/>
                                </div>}
                                {pte &&
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="pte" className="label-color m-2">PTE Score</label>
                                        <input type="number" className="form-control" id="pte" placeholder="PTE Score"/>
                                    </div>
                                }
                                {other &&
                                <div>
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="Applied country" className="label-color m-2">Other Languages</label>
                                        <input type="text" className="form-control" id="otherlan" placeholder="Other Languages"/>
                                    </div>
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="Other Score" className="label-color m-2">Other language Score</label>
                                        <input type="number" className="form-control" id="other" placeholder="Other language Score"/>
                                    </div>
                                </div>
                                }
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="">
                                    <label for="knowhow" className="fs-5 label-color m-2">How do you know us?</label>  
                                </div>
                            </div>
                            
                            <div className="form-group row  ms-4">
                                <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="fb" name="fb"/>
                                    <label className="form-check-label" for="check1">Facebook</label>
                                  </div>

                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="website" name="website"/>
                                    <label className="form-check-label" for="check2">Website</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="paperadv" name="paperadv" />
                                    <label className="form-check-label" for="check2">Paper Adv</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="edufair" name="edufair"/>
                                    <label className="form-check-label" for="check2">Education Fair</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="friends" name="friends"/>
                                    <label className="form-check-label" for="check2">Friends</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="reference" name="reference"/>
                                    <label className="form-check-label" for="check2">Reference</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="hoardingboards" name="hoardingboards"/>
                                    <label className="form-check-label" for="check2">Hoarding Boards</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="tv" name="tv"/>
                                    <label className="form-check-label" for="check2">TV</label>
                                  </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className=" col-md-10">
                                    <label for="knowhow" className="fs-5 label-color m-2">Remarks</label> <br/> 
                                    <textarea name="remarks" className="form-control mt-2" id="remarks" cols="100" rows="5" placeholder="Write your remarks here........."></textarea>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <br/>
                            <div className="form-check label-color m-2 ">
                                <input type="checkbox" name="confirm" className="form-check-input" id="confirm"  onBlur={formik.handleBlur} value={formik.values.confirm} onChange={(e)=>{formik.setFieldValue("confirm", e.target.value === 'on'?"off":"on")}} />
                                <label className="form-check-label" for="check1">The above mentioned information is ture to the best of my knowledge.</label>
                                {formik.touched.confirm && formik.errors.confirm ?(
                                        <div className="error col-md-3 col-sm-3"> {formik.errors.confirm} </div>
                                    ) :null}
                                  
                            </div>
                            <br/>
                            
                            <button type="submit" id="submit" className="btn btn-nav bg-btn px-4 float-right text-white fs-5 bold" >Submit</button>
                            </form>
                    </div>

                </div>
            </div>
</>
            )}



            