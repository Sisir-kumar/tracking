import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import DataTable from './DataTable';
import ShippingTrack from './ShippingTrack';

function Counters() {
    const [allData, setAllData] = useState([])
    const [scanData, setScanData] = useState([])
    useEffect(() => {
        const token = "tTU3gFVUdP";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const bodyParameters = {
           email: "sisirkumar833@gmail.com"
        };
        
        Axios.post( 
          ' https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
          bodyParameters,
          config
        )
        .then(res=>
            setAllData(res.data)
            )
        .catch(console.log);
       
    }, [])

    const  scandate = (a) =>{
        console.log(a)
        setScanData(a.scan)

    }
    const del =allData.filter((data)=>data.current_status_code=== "DEL");
    const int =allData.filter((data)=>data.current_status_code=== "INT");
    const ood =allData.filter((data)=>data.current_status_code=== "OOD");
    const dex =allData.filter((data)=>data.current_status_code=== "DEX");
    const nfi =allData.filter((data)=>data.current_status_code=== "NFI");
    return (
        <div className="container">
            <nav>
                <div className="nav nav-pills nav-justified mb-5" id="nav-tab" role="tablist">
                    <a
                        className="nav-item nav-link active"
                        id="nav-del-tab"
                        data-toggle="tab"
                        href="#nav-del"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        <div><span>DEL</span></div>
                        <span>{del.length}</span>
                    </a>
                    <a
                        className="nav-item nav-link"
                        id="nav-int-tab"
                        data-toggle="tab"
                        href="#nav-int"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                       <div><span>INT</span></div>
                        <span>{int.length}</span>
                    </a>
                    <a
                        className="nav-item nav-link"
                        id="nav-ood-tab"
                        data-toggle="tab"
                        href="#nav-ood"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                      <div><span>OOD</span></div>
                        <span>{ood.length}</span>
                    </a>
                    <a
                        className="nav-item nav-link"
                        id="nav-dex-tab"
                        data-toggle="tab"
                        href="#nav-dex"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        <div><span>DEX</span></div>
                        <span>{dex.length}</span>
                    </a>
                    <a
                        className="nav-item nav-link"
                        id="nav-nfi-tab"
                        data-toggle="tab"
                        href="#nav-nfi"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        <div><span>NFI</span></div>
                        <span>{nfi.length}</span>
                    </a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-del"
                    role="tabpanel"
                    aria-labelledby="nav-del-tab"
                >
                   <div className="d-flex ">
                        <ShippingTrack  data={scanData} />
                        <DataTable  data={del} handleChange={scandate} />
                    </div>
                </div>
                <div
                    className="tab-pane fade "
                    id="nav-int"
                    role="tabpanel"
                    aria-labelledby="nav-int-tab"
                >
                 <div className="d-flex ">
                    <ShippingTrack data={scanData} />
                    <DataTable data={int} handleChange={scandate} />
                </div>
                </div>
                <div
                    className="tab-pane fade "
                    id="nav-ood"
                    role="tabpanel"
                    aria-labelledby="nav-ood-tab"
                >
                    <div className="d-flex ">
                        <ShippingTrack data={scanData}/>
                        <DataTable data={ood} handleChange={scandate} />
                    </div>
                </div>
                <div
                    className="tab-pane fade "
                    id="nav-dex"
                    role="tabpanel"
                    aria-labelledby="nav-dex-tab"
                >
                   <div className="d-flex ">
                        <ShippingTrack data={scanData}/>
                        <DataTable data={dex} handleChange={scandate}/>
                    </div>
                </div>
                <div
                    className="tab-pane fade "
                    id="nav-nfi"
                    role="tabpanel"
                    aria-labelledby="nav-nfi-tab"
                >
                    <div className="d-flex ">
                        <ShippingTrack data={scanData} />
                        <DataTable data={nfi} handleChange={scandate}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters
