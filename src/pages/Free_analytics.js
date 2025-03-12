import React, {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import Heder from "../components/Heder";
import Slider_free from "../components/Slider_free"
import Chart from 'chart.js/auto';

export default function Free_analytics() {
    const navigate = useNavigate();

    
   
    return (
        <div className="free_analytics" id="free_analytics">
          <Heder/>
          <Slider_free/>
            <div className="free_analytic_doby">
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