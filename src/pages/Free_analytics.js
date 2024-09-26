import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'

export default function Free_analytics() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
	

    return (
        <div className="free_analytics" id="free_analytics">
            <header>
                <div className="head_free">
                    <img src={myImageIconHed } className="icon_hed"/>
                </div> 
            </header>

            <div className="free_analytic_doby">
                <Sider className="slider_free">
                    <Button className="button_fre_anali">Cводка</Button>
                    <Button className="button_fre_anali">Отчеты</Button>
                    <Button className="button_fre_anali">Аналитика</Button>
                    <Button className="button_fre_anali">Выход</Button>
                </Sider>
                
                
            </div>



        </div>
    )
}