// import { ErrorMessage, useField } from "formik";
import { slide as Menu } from 'react-burger-menu';

export const Sidebar =()=>{
    // const [field, meta] = useField(props);
    //     console.log(meta);
    //     console.log(field);
    return (
        <Menu>
        <a className="menu-item" href="/#/admin">
          Dashboard
        </a>
  
        <a className="menu-item" href="/#/admin">
          VisitorForm
        </a>
  
        <a className="menu-item" href="/#/">
          Logout
        </a>
      </Menu>
  
    )
}