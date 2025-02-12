import { useState } from "react";
import Buttons from "./Buttons";
import InputField from "./inputField";

const MainComponent = () =>{
    const [calValue , setcalValue] = useState('');

    const handleButtonClick = (buttontext) =>{
        if(buttontext === 'c'){
            setcalValue("");
        }else if(buttontext ==='='){
            const result = eval(calValue);
            setcalValue(result);
        }else{
            const newtextvlaue = calValue + buttontext;
            setcalValue(newtextvlaue);
        }
    }


    const buttonValue = ['c',1,2,'+',3,4,'-',5,6,'*',7,8,'/','=',9,0,'.']
    return(
        <div className="border-2 w-[20%] h-[635px] bg-[#000] m-[50px] p-[20px] rounded-[1rem] " >
        <InputField  displayValue={calValue}/>
        <Buttons key={buttonValue} onButtonClick= {handleButtonClick} buttonItem = {buttonValue}/>
        </div>
    )
}
export default MainComponent;