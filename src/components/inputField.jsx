/* eslint-disable react/prop-types */
const InputField = ({displayValue}) =>{
    
    return( <input type="text" className="border-[1px] w-[80%] h-[70px] p-[20px] font-bold bg-[#fff] m-[20px]" value={displayValue} readOnly />
        
    )
}
export default InputField;