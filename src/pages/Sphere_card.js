import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import Heder from "../components/Heder";
import Sphere from "../components/Sphere";


export default function Sphere_card() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
    

    
    return (
        <div className="Sphere_card" id="Sphere_card">
            <Heder/>
            <Sphere/>
        </div>
    )
}