import icon from '../../assets/img/dsmeta-logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={icon} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>Desenvolvido por Gabriel Fronchak</p>
        </div>
    </header>
    );
}

export default Header;