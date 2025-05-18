import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import __ROLE__ from './CONST';
import Heder from "../components/Heder";
import Slider from "../components/Slider";
import Slider_free from "../components/Slider_free";
import Heder_free from "../components/Heder_free";

export default function Free_Contacts() {
    const navigate = useNavigate();
    const [buttonTextLike, setButtonTextLike] = useState(0);
    
    const { Sider, Content } = Layout;

    return (
        <div className="Contacts" >
            <Heder_free/>
            <div className="analitic_blok">
            <Slider_free/>
             <div className="analytic_doby_about">
                <h2 className="h2">Наши контакты:</h2> 
                <div className="text_pro">
                    <h2 className="h2">Мартынов Владимир Вадимович</h2> 
                    <p className="p1">Руководитель проекта, Front-end разработчик, QA тестировщик</p> 
                </div>  
              <div className="text_pro">
                    <h2 className="h2">Кучумов Вячеслав Дмитриевич:</h2> 
                    <p className="p1">Back-end разработчик, администратор базы данных</p> 
                </div>  
                <div className="text_pro">
                    <h2 className="h2">Механошина Мария Владимировна:</h2> 
                    <p className="p1">Front-end разработчик, дизайнер, аналитик данных</p> 
                </div>  
            </div>
            </div>
            
            

        </div>
    )


}