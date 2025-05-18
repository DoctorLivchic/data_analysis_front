import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import __ROLE__ from './CONST';
import Heder_lk from "../components/Heder_lk";
import Slider from "../components/Slider";

export default function Contacts() {
    const navigate = useNavigate();
    const [buttonTextLike, setButtonTextLike] = useState(0);
    
    const { Sider, Content } = Layout;

    return (
        <div className="Contacts" >
            <Heder_lk/>
            <div className="analitic_blok">
                <Slider/>
                <div className="free_analytic_doby">
                    <h2 className="h2">Мой Профиль</h2>   
                    <p className="p1">ФИО</p> 
                    <p className="p1">Почта</p> 
                    <Button className="button_fre_pref">Сменить пароль</Button>

                </div>
            </div>
            
            

        </div>
    )


}