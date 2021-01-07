import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
export class DataTable extends Component {

    
    render() {
        const {data,handleChange} =this.props
        console.log(this.props.data)
        return (
            <div className="table_border ml-4">
                <Table>
                  <thead>
                    <tr>
                        <td className="text-secondary">AWB NUMBER</td>
                        <td className="text-secondary">TRANSPORTER</td>
                        <td className="text-secondary">SOURCE</td>
                        <td className="text-secondary">DESTINATION</td>
                        <td className="text-secondary">BRAND</td>
                        <td className="text-secondary">STATE DATE</td>
                        <td className="text-secondary">ETD</td>
                        <td className="text-secondary">STATUS</td>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(a=><tr onClick={()=>handleChange(a)}>
                        <td>{a.awbno}</td>
                        <td>{a.carrier}</td>
                        <td>{a.from}</td>
                        <td>{a.to}</td>
                        <td>{a.brand}</td>
                        <td>{moment(a.pickup_date).format("MM/DD/YYYY")}</td>
                        <td>{a.extra_fields && moment(a.extra_fields.expected_delivery_date).format("MM/DD/YYYY")}</td>
                        <td className={a.current_status==="Delivered"?"text-success":"text-warning"}>{a.current_status}</td>
                    </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DataTable
