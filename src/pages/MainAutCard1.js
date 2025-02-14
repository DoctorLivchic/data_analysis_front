import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import LineChart from '../components/LineChart';
import { HeartTwoTone, DislikeTwoTone, LikeTwoTone,UserOutlined } from "@ant-design/icons";
import * as d3 from 'd3';

export default function MainAutCard1() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
    return (
        <div className="MainAutCard1" id="MainAutCard1">
            <header>
                <div className="head_free">
                    <div className="head_free_icon">
                         <img src={myImageIconHed } className="icon_heder"/>
                    </div>

                    <div className="head_free_user">
                        <img src={myImageIconHeduser } className="icon_heder_user"/>
                    </div>
                </div> 
            </header>

        <div className="analitic_blok">
            
            <Sider className="slider_free">
                    <div className="slider_free_button">
                        <p className="slider_free_button_p">Главная</p>
                        <Button onClick={() => {navigate('/pages/Sphere_card')}} className="button_fre_anali">Cферы</Button>
                        <Button className="button_fre_anali">Направления</Button>
                        <Button className="button_fre_anali">Аналитика</Button>                       
                    </div>
                    <div className="slider_free_button">
                        <p className="slider_free_button_p">Опции</p>
                        <Button className="button_fre_anali">Отчеты</Button>
                        <Button className="button_fre_anali">Сводки</Button>
                    </div>
                    <div className="slider_free_button_exit">
                        <Button onClick={() => {navigate('/')}} className="button_fre_anali">Выход</Button>
                    </div>
            </Sider>   
             
                
            <div className="free_analytic_doby">
                <LineChart />
            </div>

        </div>   
        

        </div>
    )
 }