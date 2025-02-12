/* eslint-disable react/prop-types */
const Buttons = ({buttonItem, onButtonClick}) =>{
    return (
        <div className="grid grid-cols-3">
        {buttonItem.map((item) => (<><button className="border-[1px] bg-[#fff] w-[80px] h-[80px] "
        onClick={() => onButtonClick(item)}>{item}</button></>))}
        </div>
    )
}
export default Buttons;