import React, { useEffect, useState } from 'react';
import './CovidAPIdata.css';

const CovidAPIdata = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (

        <div>

            <h1><b>COVID 19 CASES RUNING STATUS INDIA</b></h1>
            

            <table className="text-align">
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updates</th>
                    </tr>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.state}</td>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.actives}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                </tr>
                            );
                        })
                    }
            </table>

        </div>
    );

}

export default CovidAPIdata;