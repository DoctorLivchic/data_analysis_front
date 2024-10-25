import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/user.png'

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
                        <img scr={myImageIconHeduser} className="icon_heder_user"/>
                    </div>
                </div> 
            </header>


            <div className="free_analytic_doby">
                <div className="f">
                  <Sider className="slider_free">
                    <Button className="button_fre_anali">Cводка</Button>
                    <Button className="button_fre_anali">Отчеты</Button>
                    <Button className="button_fre_anali">Аналитика</Button>
                    <Button onClick={() => {navigate('/')}} className="button_fre_anali">Выход</Button>
                  </Sider>   
                </div> 
            </div> 

        </div>
    )
 }