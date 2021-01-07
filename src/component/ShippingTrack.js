import React, { Component } from 'react'
import House from '../logo/warehouse.svg'
import Destination from '../logo/destination.svg';
import "./ShippingTrack.css"
import moment from 'moment';
export class ShippingTrack extends Component {
    render() {
        console.log(this.props.data)
        const {data} = this.props
        return (
            <div className="shipping-border ml-2">
                <ul id="progressbar" className="mt-4">
                    <li><img  src={Destination}  alt="house" /></li>
                    {data && data.map(a=><><li><div className={a.status_detail? "divider green":"divider grey"}></div></li>
                    <li><div className= {a.status_detail? "node green":"node grey"}></div><p>{a.status_detail}<span className="ml-4">{moment(a.time).format("DD-MM-YYYY HH:mm")}</span></p></li>
                   </>)}{data.length >0 ?"" :<li><div className="divider grey long"></div></li>}
                    <li><img src={House} alt="destination"/> </li>
                </ul>
            </div>
        )
    }
}

export default ShippingTrack
