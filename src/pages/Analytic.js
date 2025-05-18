import React, {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import Heder from "../components/Heder";
import Slider from "../components/Slider"
import Chart from 'chart.js/auto';
import LineChart from "../components/LineChart";
import Free_param from "../components/Free_param";
import Footer from "../components/Footer";
import { DatePicker, Space } from 'antd';


export default function Analytics() {
    const navigate = useNavigate();
    const { RangePicker } = DatePicker;
    const handleChange = value => {
    console.log(`selected ${value}`);
    };
   
    return (
        <div className="free_analytics" id="free_analytics">
            <Heder/>
        <div className="Free_analytics_p">           
                <Slider/>
            <div className="free_analytic_doby">
                    <p>Настройка глубины прогноза</p>
                    <Button className="button_fre_pref">Предыдущий месяц</Button>
                    <Button className="button_fre_pref">Следующий меняц</Button>
                    <Button className="button_fre_pref">Год</Button>
                    <Button className="button_fre_pref">5 лет</Button>
                    <RangePicker
                    className="button_fre_pref"
                    >
                    </RangePicker>
                    <Select
                        className="button_fre_pref"
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <div className="free_analytic_Chart">
                        <LineChart/>
                    <div className="free_analytic_param">
                        <Free_param/>
                    </div>
                </div>
            </div>
        </div>
         <Footer/>
    </div>
    )
}