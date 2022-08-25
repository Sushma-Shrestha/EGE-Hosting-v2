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
            dob: '',
            gender:'',
            marital:'',
            parentsname:'',
            occupation:'',
            nationality:'',
            telephone:'',
            parentscontact:'',
            mobile:'',
            email: '',
            tempaddress:'',
           permaddress:'',
            applytype:'',
            nameofmaster:'', 
            scoreofmaster:'',
            passedofmaster:'',
            nameofbachelor:'', 
            scoreofbachelor:'',
            passedofbachelor:'',
            nameofplustwo:'', 
            scoreofplustwo:'',
            passedofplustwo:'',
            educationoption:'',
            workoption:'',
            nameofwork:'',
            startofwork:'',
            endofwork:'',
            edugap:'',
            gapstart:'',
            gapend:'',
            intendedcourse:'',
            intendedcountry:'',
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
            know_us:'',
            remarks:'',
            confirm:"off",
            fb:"",
            website:"",
            paperadv:"",
            edufair:"",
            friends:"",
            reference:"",
            hoardingboards:"",
            tv:"",

        },
        
        validationSchema: Yup.object({
            name: Yup.string()
            .min(5, "Must be atleast 5 characters.")
            .required('Required'),
            dob: Yup.string()
            .required('Required'),
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
            passedofmaster: Yup.string()
            .when('educationoption', {
                is: (educationoption) => educationoption === 'master',
                then: Yup.string()
            .required("Required")}),
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
            passedofbachelor: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master'),
                then: Yup.string()
            .required("Required")}),
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
            passedofplustwo: Yup.string()
            .when('educationoption', {
                is: (educationoption) => (educationoption === 'bachelor' || educationoption === 'master' || educationoption === 'plustwo'),
                then: Yup.string()
            .required("Required")}),
           
            workoption: Yup.string()
            .oneOf(["yes", "no"], "Please select one")
            .required('required'),
            nameofwork:Yup.string().when('workoption', {
                is: (workoption) => workoption === 'yes',
                then: Yup.string().required('Required')
            }),
            startofwork:Yup.string().when('workoption', {
                    is: (workoption) => workoption === 'yes',
                    then: Yup.string().required('Required')
                }),
                endofwork:Yup.string().when('workoption', {
                        is: (workoption) => workoption === 'yes',
                        then: Yup.string().required('Required')
                    }),
            edugap: Yup.string()
            .oneOf(["yes", "no"], "Please select one")
            .required('Required'),
            gapstart:Yup.string().when('edugap', {
                is: (edugap) => edugap === 'yes',
                then: Yup.string().required('Required')
            }),
            gapend:Yup.string().when('edugap', {
                is: (edugap) => edugap === 'yes',
                then: Yup.string().required('Required')
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
            formabc.append( "know_us", formik.values.know_us)
            formabc.append( "remarks", formik.values.remarks)
            formabc.append( "confirm", formik.values.confirm)
            
            fetch(
                "http://192.168.137.1/api/addVisitor.php",
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
//             //   var InsertAPIURL = "http://192.168.56.1/api/addVisitor.php";   //API to render signup
        
    
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
        
          
         <div className="container py-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <form  onSubmit={formik.handleSubmit} method="POST" action="http://192.168.56.1/api/addVisitor.php">
                         <div className="form-group row justify-content-center">
                                <div className="col-sm-6 fs-1 text-white text-center Visitorformtext ">
                                    VISITOR'S FORM 
                                
        
                                </div>
                                
                            </div>
                            <br/>
                                <br/>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3  heading">
                                    <p className="fs-3">Student details</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10 col-md-6 col-lg-6 mt-3 ">
                                    <TextInput labelname="Name" id="name" type="text" placeholder="Your Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />   
                                    {formik.touched.name && formik.errors.name ?(
                                        <div className="error"> {formik.errors.name} </div>
                                    ) :null}
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Date of Birth" id="dob" type="date" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} />    
                                    {formik.touched.dob && formik.errors.dob ?(
                                        <div className="error"> {formik.errors.dob} </div>
                                    ) :null}
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-5 mt-3 ">
                                        <label for="birthday" className="fs-5 label-color">Select Gender:</label>  
                                    </div>
                                </div>
                                <div className="form-group row ms-4">
                                    
                                    <div className="form-check col-sm-3 mt-3 ">
                                        <RadioButton id="male" labelname="Male" name="gender" value='male' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    </div>
                                    <div className="form-check col-sm-3 mt-3 ">
                                        <RadioButton id="female" labelname="Female" name="gender" value='female' onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                                    </div>
                                    {formik.touched.gender && formik.errors.gender ?(
                                        <div className="error"> {formik.errors.gender} </div>
                                    ) :null}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 ">
                                    <label for="marital status" className="fs-5 label-color m-2">Marital Status:</label>  
                                </div>
                            </div>
                            <div className="form-group row ms-4">
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="single" labelname="Single" name="marital" value="single" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="married" labelname="Married" name="marital" value="married" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </div>
                                {formik.touched.marital && formik.errors.marital ?(
                                        <div className="error"> {formik.errors.marital} </div>
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
                                        <div className="error"> {formik.errors.parentsname} </div>
                                    ) :null} 

                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Occupation" id="occupation" name="occupation" type="text" placeholder="Occupation" />
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <label className="label-color m-2">Nationality</label>
                                    <select id="nationality" name="nationality" className="form-control form-select" aria-label="Default select example" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nationality}>
                                        <option value="NP">Nepal</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Aland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, Democratic Republic of the Congo</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Cote D'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curacao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and Mcdonald Islands</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="XK">Kosovo</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libyan Arab Jamahiriya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="AN">Netherlands Antilles</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory, Occupied</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthelemy</option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="CS">Serbia and Montenegro</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan, Province of China</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.s.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    {/* {formik.errors.nationality ?(
                                        <div className="error"> {formik.errors.nationality} </div>
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
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Parents Contact" id="parentscontact" name="parentscontact" type="number" placeholder="Parents number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.parentscontact}/> 
                                    {formik.touched.parentscontact && formik.errors.parentscontact ?(
                                        <div className="error"> {formik.errors.parentscontact} </div>
                                    ) :null} 
                                </div>
                                <div className="col-sm-6 mt-3 "> 
                                    <TextInput labelname="Mobile" id="mobile" type="number" name="mobile" placeholder="Mobile number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile}/> 
                                    {formik.touched.mobile && formik.errors.mobile ?(
                                        <div className="error"> {formik.errors.mobile} </div>
                                    ) :null} 
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Email" id="email" type="email" name="email" placeholder="Email Address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/> 
                                    {formik.touched.email && formik.errors.email ?(
                                        <div className="error"> {formik.errors.email} </div>
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
                                        <div className="error"> {formik.errors.permaddress} </div>
                                    ) :null}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 ">
                                    <label className="fs-5 label-color m-2">Apply for</label>  
                                </div>
                            </div>

                            <div className="form-group row ms-4">
                                <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applysingle" labelname="Single" name="applytype" value="single" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 mt-3">
                                    <RadioButton id="applydependent" labelname="Dependent" name="applytype" value="dependent" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                  </div>
                                  {formik.touched.applytype && formik.errors.applytype ?(
                                        <div className="error"> {formik.errors.applytype} </div>
                                    ) :null}
                            </div>

                            <br/><hr/><br/>

                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <label for="Academic" className="fs-3 heading">Academic details</label>  
                                    <p className="text-muted">(Select highest level of your education)</p>
                                </div>
                            </div>

                            <div className="form-group row  ms-4">
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
                                        <div className="error"> {formik.errors.educationoption} </div>
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
                                        <div className="error"> {formik.errors.nameofmaster} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                    <div className="col-sm-6 mt-3 ">
                                        <TextInput labelname="Score Obtained" id="scoreofmaster" name="scoreofmaster" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofmaster}/> 
                                        { formik.errors.scoreofmaster ?(
                                        <div className="error"> {formik.errors.scoreofmaster} </div>
                                    ) :null}
                                    </div>
                                    <div className="col-sm-6 mt-3 ">
                                        <TextInput labelname="Passed Year" id="passedofmaster" name="passedofmaster" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofmaster}/> 
                                        {formik.errors.passedofmaster ?(
                                        <div className="error"> {formik.errors.passedofmaster} </div>
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
                                        <div className="error"> {formik.errors.nameofbachelor} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Score Obtained" id="scoreofbachelor" name="scoreofbachelor" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofbachelor}/> 
                                            {formik.errors.scoreofbachelor ?(
                                        <div className="error"> {formik.errors.scoreofbachelor} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Passed Year" id="passedofbachelor" name="passedofbachelor" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofbachelor}/> 
                                            { formik.errors.passedofbachelor ?(
                                        <div className="error"> {formik.errors.passedofbachelor} </div>
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
                                        <div className="error"> {formik.errors.nameofplustwo} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Score Obtained" id="scoreofplustwo" name="scoreofplustwo" type="number" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scoreofplustwo}/> 
                                            {formik.errors.scoreofplustwo ?(
                                        <div className="error"> {formik.errors.scoreofplustwo} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <TextInput labelname="Passed Year" id="passedofplustwo" name="passedofplustwo" type="date" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passedofplustwo}/> 
                                            {formik.errors.passedofplustwo ?(
                                        <div className="error"> {formik.errors.passedofplustwo} </div>
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
                                    <p className="label-color mx-4 mt-4">Have you got work experience?</p>
                                </div>
                            </div>
                            <div className="form-group row  ms-4">
                                <div className="form-check col-sm-3 label-color m-2">
                                    <RadioButton labelname="Yes" name="workoption" value="yes" onChange={(e)=>{forWork(); formik.setFieldValue("workoption", e.target.value = "yes")}} onBlur={formik.handleBlur}/>
                                </div>
                               
                                <div className="form-check col-sm-3 label-color m-2">
                                  <RadioButton labelname="No" name="workoption"value="no" onChange={(e)=>{forWorkHide();formik.setFieldValue("workoption", e.target.value = "no")}} onBlur={formik.handleBlur}/>
                                </div>
                                <div className="form-check col-sm-4 label-color m-2">
                                  {formik.touched.workoption && formik.errors.workoption ?(
                                        <div className="error"> {formik.errors.workoption} </div>
                                    ) :null}
                                    </div>
                                </div>
                           
                                {work &&
                                <div className="work-experience">
                                    <div className="col-sm-12 mt-3 ">
                                        <label for="nameofwork" className="label-color m-2">Name of Company (Work Experience)</label>
                                        <input type="text" className="form-control" id="nameofwork" placeholder="Name of Company" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameofwork}/>
                                        { formik.errors.nameofwork ?(
                                        <div className="error"> {formik.errors.nameofwork} </div>
                                    ) :null}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mt-3 ">
                                            <label for="startofwork" className="label-color m-2">Start Date</label>
                                            <input type="date" className="form-control" id="startofwork" placeholder="Score Obtained" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.startofwork}/>
                                            {formik.errors.startofwork ?(
                                        <div className="error"> {formik.errors.startofwork} </div>
                                    ) :null}
                                        </div>
                                        <div className="col-sm-6 mt-3 ">
                                            <label for="endofwork" className="label-color m-2">End Date</label>
                                            <input type="date" className="form-control" id="endofwork" placeholder="Passed Year" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.endofwork}/>
                                            {formik.errors.endofwork ?(
                                        <div className="error"> {formik.errors.endofwork} </div>
                                    ) :null}
                                        </div>
                                        
                                    </div>
                                </div>
                                }
                                
                         

                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <label for="Academic" className="fs-3 heading">Education Gap</label>
                                    <p className="label-color mx-4 mt-4">Have you got education gap?</p>
                                </div>
                            </div>
                            <div className="form-group row ms-4">
                              
                                <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="gapyes" labelname="Yes" name="edugap" value="yes" onChange={(e)=>{forGap() ; formik.setFieldValue("edugap", e.target.value = "yes")}} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 mt-3 ">
                                    <RadioButton id="gapno" labelname="No" name="edugap" value="no" onChange={(e)=>{forGapHide (); formik.setFieldValue("edugap", e.target.value = "no")}} onBlur={formik.handleBlur}/>
                                  </div>
                                  <div className="form-check col-sm-3 mt-3 ">
                                  {formik.touched.edugap && formik.errors.edugap ?(
                                        <div className="error"> {formik.errors.edugap} </div>
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
                                        <div className="error"> {formik.errors.gapstart} </div>
                                    ) :null}
                                    </div>
                                    <div className="col-sm-6 mt-3 ">
                                        <label for="gapend" className="label-color m-2">Gap End Date</label>
                                        <input type="date" className="form-control" id="gapend" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gapend}/>
                                        {formik.errors.gapend ?(
                                        <div className="error"> {formik.errors.gapend} </div>
                                    ) :null}
                                    </div>
                                </div>
                            </div>
                            }
                            
                 
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3 ">
                                    <TextInput labelname="Intended Course" id="intendedcourse" name="intendedcourse" type="text" placeholder="Intended Course" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intendedcourse}/>
                                    {formik.touched.intendedcourse && formik.errors.intendedcourse ?(
                                        <div className="error"> {formik.errors.intendedcourse} </div>
                                    ) :null}
                                </div>
                                <div className="col-sm-6 mt-3 ">
                                {/* Intended country: Australia, canada, usa, uk, denmark, */}
                                <label className="label-color m-2">Intended Country</label>
                                <select id="intendedcountry" name="intendedcountry" className="form-control form-select" aria-label="Default select example" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intendedcountry}>
                                        <option value="AU">Australia</option>
                                        <option value="CA">Canada</option>
                                        <option value="DK">Denmark</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                    </select>
                                    {/* {formik.touched.intendedcountry && formik.errors.intendedcountry ?(
                                        <div className="error"> {formik.errors.intendedcountry} </div>
                                    ) :null} */}
                                </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className="col-sm-5 mt-3 my-3 ">
                                    <label for="gap" className="fs-5 label-color m-2">Applied visa before?</label>  
                                </div>
                            </div>
                            <div className="form-group row ms-4">
                              
                                <div className="form-check col-sm-3 ">
                                    <RadioButton id="applyyes" labelname="Yes" name="visa" value="yes" onChange={(e)=>{forBeforeApplied(); formik.setFieldValue("visa", e.target.value = "yes")}} onBlur={formik.handleBlur}  />
                                  </div>
                                  <div className="form-check col-sm-3 ">
                                    <RadioButton id="applyno" labelname="No" name="visa"  value="no" onChange={(e)=>{forBeforeNotApplied(); formik.setFieldValue("visa", e.target.value = "no")}} onBlur={formik.handleBlur} />
                                  </div>
                                  <div className="form-check col-sm-3 ">
                                  {formik.touched.visa && formik.errors.visa ?(
                                        <div className="error"> {formik.errors.visa} </div>
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
                                        <div className="error"> {formik.errors.appliedcountry} </div>
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

                            <div className="form-group row  d-flex flex-wrap">
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
                                    <input type="checkbox" className="form-check-input" id="fb" name="fb" value={formik.values.fb? true: false} onChange={(e)=>{formik.setFieldValue("fb", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "fb" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check1">Facebook</label>
                                  </div>

                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="website" name="website" value={formik.values.website} onChange={(e)=>{formik.setFieldValue("website", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "website" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Website</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="paperadv" name="paperadv" value={formik.values.paperadv} onChange={(e)=>{formik.setFieldValue("paperadv", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "paperadv" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Paper Adv</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="edufair" name="edufair" value={formik.values.edufair} onChange={(e)=>{formik.setFieldValue("edufair", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "edufair" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Education Fair</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="friends" name="friends" value={formik.values.friends} onChange={(e)=>{formik.setFieldValue("friends", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "friends" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Friends</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="reference" name="reference" value={formik.values.reference} onChange={(e)=>{formik.setFieldValue("reference", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us = `${formik.values.know_us}, reference` : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Reference</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="hoardingboards" name="hoardingboards" value={formik.values.hoardingboards} onChange={(e)=>{formik.setFieldValue("hoardingboards", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "hoardingboards" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">Hoarding Boards</label>
                                  </div>
                                  <div className="form-check col-sm-4 label-color m-2">
                                    <input type="checkbox" className="form-check-input" id="tv" name="tv" value={formik.values.tv} onChange={(e)=>{formik.setFieldValue("tv", e.target.value === true? false: true);formik.setFieldValue("know_us", e.target.value === true? formik.values.know_us+= "tv" : formik.values.know_us)}}/>
                                    <label className="form-check-label" for="check2">TV</label>
                                  </div>
                            </div>
                            <br/><hr/><br/>
                            <div className="form-group row">
                                <div className=" col-md-10">
                                    <label for="knowhow" className="fs-5 label-color m-2">Remarks</label> <br/> 
                                    <textarea name="remarks" className="form-control ms-4 mt-2" id="remarks" cols="100" rows="5" placeholder="Write your remarks here........."></textarea>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <br/>
                            <div className="form-check label-color m-2 ">
                                <input type="checkbox" name="confirm" className="form-check-input" id="confirm"  onBlur={formik.handleBlur} value={formik.values.confirm} onChange={(e)=>{formik.setFieldValue("confirm", e.target.value === 'on'?"off":"on")}} />
                                <label className="form-check-label" for="check1">The above mentioned information is ture to the best of my knowledge.</label>
                                {formik.touched.confirm && formik.errors.confirm ?(
                                        <div className="error"> {formik.errors.confirm} </div>
                                    ) :null}
                                  
                            </div>
                            <br/>
                            
                            <button type="submit" id="submit" className="btn btn-nav bg-btn px-4 float-right text-white fs-5 bold" >Submit</button>
                            </form>
                    </div>

                </div>
            </div>

            )}
