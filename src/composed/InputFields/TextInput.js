// import { ErrorMessage, useField } from "formik";
export const TextInput = ({labelname,
    ...props})=>{
        // const [field, meta] = useField(props);
        
        return (
    <>
        <label className="label-color m-2">{labelname}</label>
        <input className={`form-control`}  {...props} autoComplete="off"/>
        {/* <ErrorMessage component="div" name={field.name} className="error"/> */}
    </>
    )
}





