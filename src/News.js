import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import { HeartTwoTone, DislikeTwoTone, LikeTwoTone } from "@ant-design/icons";
import myImage from './img/90454.png'

export default function News() {
    const navigate = useNavigate();
	const [buttonTextLike, setButtonTextLike] = useState(0);
	const [buttonTextDislike, setButtonTextDislike] = useState(0);
	const [tag, settag] = useState([]);
	const [chbox, setchbox] = useState("none");
	const [lidesc,setlidesc]= useState([]);
	const [litranscEnter,setlitranscEnter] = useState([]);
	const [translitExit,settranslitExit] = useState([]);
	const { Sider, Content } = Layout;
	

    return (
        <div className="main_page" id="main_page">	
                    <header>
						{/* Кнопки навигации */}                     
                        <ul className="navig">
                 		<Form.Item>	
							<Button onClick={() => {navigate('/List_phrase')}} className='btn_home'>Авторизация</Button>
							<Button onClick={() => {navigate('/main/Main')}} className='btn_home'>Регистрация</Button>				
						</Form.Item>										
						 </ul>
                    </header>

    <div className="cent" id="cent">
        <Content className="contentStyle">
		<div className="slider" id="slider">
			<h1>Добро пожаловать в САПК</h1>
			<p>В нашей системе можно узнать тенденцию кадрового роста и многое другое!</p>
			<div className="button">
				<Button onClick={() => {navigate('/main/Main')}} className='btn'>Быстрая аналитика</Button>
			</div>			
		</div>
        </Content>

		<Content>
			<div className="img_page_home">
			<img src={myImage} />
			</div>		  
		</Content>
	 </div>  

		{/* футер */}
        <footer id="footer_main" className="footer_main section">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="logo">
								<a>Логотип</a>
							</div>
							
							<ul className="social">
								<li><a href="#"><span className="fa fa-facebook"></span></a></li>
								<li><a href="#"><span className="fa fa-twitter"></span></a></li>
								<li><a href="#"><span className="fa fa-dribbble"></span></a></li>
								<li><a href="#"><span className="fa fa-instagram"></span></a></li>
								<li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
							</ul>			
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p>2023 © Аналитика </p>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </div>   
    )
}