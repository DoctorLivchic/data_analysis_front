import React, {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import * as d3 from "d3";



import Chart from 'chart.js/auto';

export default function Free_analytics() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
    const [data, setData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Динамические данные',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      });
    
   
    return (
        <div className="free_analytics" id="free_analytics">
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
                <Sider className="slider_free">
                        <div className="slider_free_button">
                            <p className="slider_free_button_p">Главная</p>
                            <Button className="button_fre_anali">Cферы</Button>
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
                
                
                    <Button className="button_fre_pref">Предыдущий месяц</Button>
                    <Button className="button_fre_pref">Следующий меняц</Button>
                    <Button className="button_fre_pref">Год</Button>
                    <Button className="button_fre_pref">5 лет</Button>
           
            </div>



            <div className="Button_grath">

                <div className="grath">
            
                    

                </div>

                <div className="grath">
                    <p>e</p>
                </div>
                <div className="grath">
                    <p>e</p>
                </div>
                <div className="grath">
                    <p>e</p>
                </div>
            </div>
        </div>
    )
}