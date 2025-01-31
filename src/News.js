import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import { HeartTwoTone, DislikeTwoTone, LikeTwoTone } from "@ant-design/icons";
import myImage from './img/img_home.png'
import myImageIcon from './img/Frame_19.png'
import myImageMan from './img/man.png'
import myImagegraph from './img/graph.png'


export default function News() {
    const navigate = useNavigate();
	const [buttonTextLike, setButtonTextLike] = useState(0);
	
	const { Sider, Content } = Layout;

    return (
    <div className="main_page" id="main_page">	
                   
    <div className="cent" id="cent">
        <Content className="contentStyle">
				<div className="button">		
					<img src={myImageIcon } className="img_page_button"/>
				</div>
				<div className="button">	
						<Button onClick={() => {navigate('/pages/free_analytics')}} className='btn_home'>Аналитика</Button>
							<Form.Item>	
								<Button onClick={() => {navigate('/pages/Auth')}} className='btn_home'>Авторизация</Button>
								<Button onClick={() => {navigate('/pages/reg')}} className='btn_home'>Регистрация</Button>				
							</Form.Item>
				</div>							
        </Content>

		<Content>
		<div className="img_page_home_q">
			<div className="img_page_home">
				<img src={myImage} />
			</div>	
				<div className="img_page_home_man">
					<img src={myImageMan} />
				</div>	
					<div className="img_page_home_graph">
						<img srs={myImagegraph}/>
						
					</div>
			</div>  
		</Content>
	 </div>  
        </div>   
    )
}