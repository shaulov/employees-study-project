import './app-info.scss';

const AppInfo = (props) => {
    const {employeesCount, employeesIncrease} = props;
    
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании Nekk</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {employeesIncrease}</h2>
        </div>
    );
}

export default AppInfo;