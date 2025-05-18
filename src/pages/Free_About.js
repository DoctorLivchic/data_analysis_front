import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import __ROLE__ from './CONST';
import Heder_free from "../components/Heder_free";
import Slider_free from "../components/Slider_free";
import meImgpspu from '../img/pspu.png'

export default function Contacts() {
    const navigate = useNavigate();
    
    const { Sider, Content } = Layout;

    return (
        <div className="Contacts" >
            <Heder_free/>
            <div className="analitic_blok">
              <Slider_free/>
              <div className="analytic_doby_about">
                <div className="text_pro">
                    <h2 className="h2">О проекте:</h2> 
                    <p className="p1">Аналитическая система кадрового потенциала Пермского края - это инновационный и надежный аналитический инструмент способный помочь в области образования Пермского края максимально эффективно управлять 
                        кадровым потенциалом</p> 
                </div>  
                <div className="text_part">
                     <h2 className="h2">Партеры:</h2>  
                <img className="pspu" src={meImgpspu}></img>
                </div>
               
            </div> 
            </div>
           
           
            

        </div>
    )


}