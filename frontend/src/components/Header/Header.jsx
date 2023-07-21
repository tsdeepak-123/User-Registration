import React from "react";
import "./Header.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from '../../store/userAuth';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.username);
  const options = ["Profile", "Signout"];
  const defaultOption = name;
  const _onSelect = (selectedOption) => {
    if (selectedOption.value === "Profile") {
      navigate("/profile");
    }
    if (selectedOption.value === "Signout") {
      navigate("/login");
      handleUserLogout()
    }
  };
  const handleUserLogout=()=>{ 
    dispatch(userLogout())
    navigate('/')
}
  return (
    <div className='header'>
    <div className='user'>
       <h3 style={{color:'#fff'}}>USER MANAGEMENT</h3>
       </div>
       <div className='buttons'>
       {name ? (
<Dropdown className='drop' options={options} onChange={_onSelect} value={defaultOption} />
) : (
<button onClick={() => { navigate('/login') }} className="btn btn-active">
{name ? name : "LOGIN"}
</button>
)}
</div>
  

</div>
  );
}

export default Header;
