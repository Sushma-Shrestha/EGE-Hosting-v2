export const CheckedButton = ({id,labelname, value, setsomething})=>{
    return (
    <>
    <input type="checkbox" className="form-check-input" id={id} value={value} onChange = {(e)=>{`${setsomething}`(e.target.value === 'true'?true:false)}}/>
    <label className="form-check-label">{labelname}</label>
    </>
    )
}

