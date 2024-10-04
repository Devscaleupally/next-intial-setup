import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/type";
import { useEffect } from "react";
import { setUserData } from "../../redux/actions/userActions";

const Footer = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(setUserData({user:"jhgfiuedf footer"}))
    },[])
    const user = useSelector((state: AppState) => state.user.user);
    console.log(user)

    return <>Footer</>
}
export default Footer;