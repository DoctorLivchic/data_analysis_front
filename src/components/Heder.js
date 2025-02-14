import React, { Component } from 'react'
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'

export class Heder extends Component {
  render() {
    return (
        <header>
        <div className="head_free">
            <div className="head_free_icon">
                 <img src={myImageIconHed } className="icon_heder"/>
            </div>

            <div className="head_free_user">
                <img src={myImageIconHeduser } className="icon_heder_user"/>
            </div>
        </div> 
    </header>
    )
  }
}

export default Heder

