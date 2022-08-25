// import { ErrorMessage, useField } from "formik";
export const RadioButton = ({labelname, onChange, ...props})=>{
    // const [field, meta] = useField(props);
    //     console.log(meta);
    //     console.log(field);
    return (
    <>
    <input type="radio" className={`form-control-input m-1`} onChange={onChange} {...props}/>
    <label className="form-check-label">{labelname}</label>
    {/* <ErrorMessage component="div" name={field.name} className="error"/> */}
    </>
    )
}

