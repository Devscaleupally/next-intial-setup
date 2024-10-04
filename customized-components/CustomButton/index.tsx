import { BlinkingLoader } from "../../components";

interface ICustomButton  {
    isLoading :boolean,
    label : string ,
    onClick :any
}

const CustomButton = (props:ICustomButton) =>{

    const {isLoading,label,onClick} = props;

    return <button className="btn-primary" disabled = {isLoading}  onClick={()=>onClick()}>
        {label} 
        <BlinkingLoader/>
    </button>

}
export default CustomButton;