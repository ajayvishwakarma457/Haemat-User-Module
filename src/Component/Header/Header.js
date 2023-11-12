import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import LoginContext from "../../Context/Login/LoginContext";
import { getEmpName } from '../../Service/Common';
import Logout from '../icons/Logout/Logout';
import './Header.css';



const Header = (props) => {

    const ctx = useContext(LoginContext);


    const [userName, setUserName] = useState(ctx.userData.name);
    const designation = (ctx.userData.post || '').toLowerCase();

    const navigate = useNavigate();

    const items = [
        //{ label: 'Home', command: () => { navigate('/') } },
    ];

    const logoutMe = () => {
        ctx.onLogout();
    };

    const userLogo = <Link to="/">
        {/* <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" /> */}
        <img alt="logo" src={process.env.PUBLIC_URL + '/logo-white.svg'} height="40" className="mr-2 logo" />
    </Link>;
    const userNav = <>
        <ul className='header-right-list'>
            <li><span>Welcome, {userName ? userName : getEmpName()}</span></li>
            <li><Link to="/"><span onClick={logoutMe}><Logout /></span></Link></li>
        </ul>
    </>;

    const adminNav = <>
        <ul className='header-right-list'>
            <li><span>Admin, {userName ? userName : getEmpName()} </span></li>
            <li><Link to="/"><span onClick={logoutMe}><Logout /></span></Link></li>
        </ul>
    </>;

    return (
        <>
            <div className="card">
                <Menubar model={items} start={userLogo} end={designation === 'admin' ? adminNav : userNav} />
            </div>
        </>
    );
};

export default Header;