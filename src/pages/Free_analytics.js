import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";

export default function Free_analytics() {
    const navigate = useNavigate();
	const { Sider, Content } = Layout;
	

    return (
        <div className="free_analytics" id="free_analytics">
            <header>
                <div className="head_free">
					<p >Лого</p>
                </div>
            <hr className="line"></hr>
            </header>
            <div className="free_analytic_doby">
                <Sider className="slider_free">
                    <p className="p_free">Cводка</p>
                    <p className="p_free">Отчеты</p>
                    <p className="p_free">Аналитика</p>
                    <p className="p_free">Выход</p>
                </Sider>
                <Content>

                </Content>
            </div>



        </div>
    )
}