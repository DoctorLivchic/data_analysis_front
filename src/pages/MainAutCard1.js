import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import LineChart from '../components/LineChart';
import { HeartTwoTone, DislikeTwoTone, LikeTwoTone,UserOutlined } from "@ant-design/icons";
import * as d3 from 'd3';
import Heder from "../components/Heder";
import Slider from "../components/Slider";

export default function MainAutCard1() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
    return (
        <div className="MainAutCard1" id="MainAutCard1">
           
        <Heder/>
        <div className="analitic_blok">
            <Slider/>    
            <div className="free_analytic_doby">
                <LineChart />
            </div>

        </div>   
        

        </div>
    )
 }