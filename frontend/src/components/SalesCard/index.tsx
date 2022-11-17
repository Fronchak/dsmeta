import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
    return (
        <div>
            <h2>Vendas</h2>
            <div className="dsmeta-group-form-control">
                <div className="input-container">
                    <DatePicker 
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="input-container">
                    <DatePicker 
                        selected={new Date()}
                        onChange={(date: Date) => {}}
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
                        <tr>
                            <td className="large-layout">#547</td>
                            <td className="medium-layout">15/06/2022</td>
                            <td>Anakin</td>
                            <td className="large-layout">15</td>
                            <td className="large-layout">11</td>
                            <td>R$ 1500,00</td>
                            <td className="table-icon-cell">
                                <NotificationButton />
                            </td>
                        </tr>
                        <tr>
                            <td className="large-layout">#547</td>
                            <td className="medium-layout">15/06/2022</td>
                            <td>Anakin</td>
                            <td className="large-layout">15</td>
                            <td className="large-layout">11</td>
                            <td>R$ 1500,00</td>
                            <td className="table-icon-cell">
                                <NotificationButton />
                            </td>
                        </tr>
                        <tr>
                            <td className="large-layout">#547</td>
                            <td className="medium-layout">15/06/2022</td>
                            <td>Anakin</td>
                            <td className="large-layout">15</td>
                            <td className="large-layout">11</td>
                            <td>R$ 1500,00</td>
                            <td className="table-icon-cell">
                                <NotificationButton />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;