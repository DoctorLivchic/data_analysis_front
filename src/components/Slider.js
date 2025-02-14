

<Sider className="slider_free">
<div className="slider_free_button">
    <p className="slider_free_button_p">Главная</p>
    <Button onClick={() => {navigate('/pages/Sphere_card')}} className="button_fre_anali">Cферы</Button>
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