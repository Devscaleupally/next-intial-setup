import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/type";
import { useEffect } from "react";
import { setUserData } from "../../redux/actions/userActions";
import { CustomButton } from "../../customized-components";

const Header = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(setUserData({user:"jhgfiuedf"}))
    },[])
    const user = useSelector((state: AppState) => state.user.user);
    console.log(user)

    return <>Header
   <CustomButton isLoading={false} label="test" onClick={()=>console.log("clicked")} />
    </>
}
export default Header;