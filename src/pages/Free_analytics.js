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
                    <p className="img_user">Лого_user</p>
                </div>
            <hr className="line"></hr>
            </header>
            <div className="free_analytic_doby">
                <Sider className="slider_free">
                    <Button className="button_fre_anali">Cводка</Button>
                    <Button className="button_fre_anali">Отчеты</Button>
                    <Button className="button_fre_anali">Аналитика</Button>
                    <Button className="button_fre_anali">Выход</Button>
                </Sider>
                    <div className="free_analit_but">
                      <Button className="button_fre_analit_boby">кнопки управления</Button>
                      <Button className="button_fre_analit_boby">кнопки управления</Button>
                      <Button className="button_fre_analit_boby">кнопки управления</Button>  
                    </div>
                    <div className="free_analit_but">
                        <p>что то будет</p>
                    </div>
                
            </div>



        </div>
    )
}