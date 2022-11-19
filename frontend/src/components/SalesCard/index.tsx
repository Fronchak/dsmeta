import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from '../../models/sales';
import NotificationButton from '../NotificationButton';
import { BASE_URL } from '../util/request';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setFullYear(new Date().getFullYear() - 1));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dateMinIsoString = minDate.toISOString();
        const dateMin = dateMinIsoString.slice(0, dateMinIsoString.indexOf('T'));
        console.log(dateMin);

        const dateMaxIsoString = maxDate.toISOString();
        const dateMax = dateMaxIsoString.slice(0, dateMaxIsoString.indexOf('T'));
        console.log(dateMax);

        axios.get(`${BASE_URL}/sale?minDate=${dateMin}&maxDate=${dateMax}`)
            .then(response => {
                console.log(response.data);
                setSales(response.data.content);
            })
    }, [minDate, maxDate])

    return (
        <div>
            <h2>Vendas</h2>
            <div className="dsmeta-group-form-control">
                <div className="input-container">
                    <DatePicker 
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="input-container">
                    <DatePicker 
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div className="table-container">
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="large-layout">ID</th>
                            <th className="medium-layout">Data</th>
                            <th>Vendedor</th>
                            <th className="large-layout">Visitas</th>
                            <th className="large-layout">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="large-layout">{sale.id}</td>
                                    <td className="medium-layout">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="large-layout">{sale.visited}</td>
                                    <td className="large-layout">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td className="table-icon-cell">
                                        <NotificationButton  />
                                    </td>
                                </tr>

                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;