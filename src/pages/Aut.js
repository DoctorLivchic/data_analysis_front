import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import myImageIcon from '../img/Frame_19.png'

export default function Auth() {
    const navigate = useNavigate();
    const { Content } = Layout;
    return (
        
    <div className="auth" id="auth">
        <div className="cent" id="cent">
            <Content className="contentStyle_aut_logo">
                <img src={myImageIcon } className="icon_hed"/>
            </Content>

            <Content>
            <div className="slider_auth" id="slider_auth">   
                <h1 className="auth_vhod">Вход в систему</h1>
                <div className="auth_text">
                    <p className="auth_vhod">Еще не зарегестрированны ? </p>
                    <p className="auth_vhod_reg" onClick={() => {navigate('/pages/reg')}} > Регистрация</p>
                </div>   
                <p className="auth_vhod_mail"> E-mail</p>
                <Input className="inp_aut" placeholder="Введите E-mail"/>
                <p className="auth_vhod_mail"> Пароль</p>
                <Input.Password className="inp_aut" placeholder="Введите пароль"/>
                    <div className="button_aut">
                        <Button onClick={() => {navigate('/pages/MainAut')}} className='btn_inp_aut'>Войти</Button>
                        <Button onClick={() => {navigate('/')}} className='btn_inp_aut'>Назад</Button>
                    </div>		
            </div>	           	
            
            </Content>
        </div>  

    </div>
)
}