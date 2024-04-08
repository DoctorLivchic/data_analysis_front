import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import { HeartTwoTone, DislikeTwoTone, LikeTwoTone } from "@ant-design/icons";
import myImage from './img/90454.png'


export default function News() {
    const navigate = useNavigate();
	const [buttonTextLike, setButtonTextLike] = useState(0);
	
	const { Sider, Content } = Layout;
	

    return (
        <div className="main_page" id="main_page">	
                    <header>
						{/* Кнопки навигации */}                     
                        <ul className="navig">
                 		<Form.Item>	
							<Button onClick={() => {navigate('/pages/Auth')}} className='btn_home'>Авторизация</Button>
							<Button onClick={() => {navigate('/pages/reg')}} className='btn_home'>Регистрация</Button>				
						</Form.Item>										
						 </ul>
                    </header>

    <div className="cent" id="cent">
        <Content className="contentStyle">
		<div className="slider" id="slider">
			<h1>Добро пожаловать в САПК !</h1>
			<p>В нашей системе можно узнать тенденцию кадрового роста и многое другое!</p>
			<div className="button">
				<Button onClick={() => {navigate('/pages/free_analytics')}} className='btn_home_text'>Быстрая аналитика</Button>
			</div>			
		</div>
        </Content>

		<Content>
			<div className="img_page_home">
			<img src={myImage} />
			</div>		  
		</Content>
	 </div>  
        </div>   
    )
}