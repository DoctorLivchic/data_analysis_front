import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import Footer from "../components/Footer";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import myImageIcon from '../img/Frame_19.png'

export default function Reg() {
    const navigate = useNavigate();
    const { Content } = Layout;
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')

    return (
        
    <div className="auth" id="auth">
        <div className="cent" id="cent">
            <Content className="contentStyle_aut_logo">
                 <img src={myImageIcon } className="icon_hed"/>
            </Content>

            <Content>
            <div className="slider_reg" id="slider_reg">   
                    <h1 className="auth_vhod">Регистрация </h1> 
                    <p className="auth_vhod_mail"> Имя</p>
                <Input className="inp_aut" placeholder="Введите свое имя"/> 
                    <p className="auth_vhod_mail"> Фамилия</p>
                <Input className="inp_aut" placeholder="Введите свою фамилию"/>
                    <p className="auth_vhod_mail"> Отчество</p>
                <Input className="inp_aut" placeholder="Введите свое отчество"/>
                    <p className="auth_vhod_mail"> E-mail</p>
                <Input className="inp_aut" placeholder="Введите E-mail"/>
                    <p className="auth_vhod_mail"> Пароль</p>
                <Input.Password className="inp_aut" placeholder="Введите пароль"/>
                    <p className="auth_vhod_mail"> Пароль еще раз</p>
                <Input.Password className="inp_aut" placeholder="Введите пароль еще раз"/>
                <div className="reg_text">
                    <Checkbox className="chek_reg" > </Checkbox>
                    <p className="p_reg"> Даю согласие на обработку своих персональных данных</p>
                </div>
                <div className="button_aut">
                    <Button onClick={() => {navigate('/pages/MainAutCard1')}} className='btn_inp_aut'>Регистрация</Button>
                    <Button onClick={() => {navigate('/')}} className='btn_inp_aut'>Назад</Button>
                </div>		
            </div>	           	
            </Content>
        </div>  
        <Footer/>
    </div>
    )
}