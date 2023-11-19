import { useQuery } from 'react-query';
import { Table  } from 'antd';
import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/vuz');
    return response.data;
};

const App = () => {
    const { data } = useQuery('vuz', fetchData);
   
    const columns = [
        { title: 'Код вуза', dataIndex: 'codvuz', key: 'codvuz', width: 70 },
        { title: 'ВУЗ', dataIndex: 'z1', key: 'z1', width: 150 },
        { title: 'Юр наз-ие ВУЗа', dataIndex: 'z1full', key: 'z1full', width: 300 },
        { title: 'Наименование', dataIndex: 'z2', key: 'z2' },
        { title: 'Фед. округ', dataIndex: 'region', key: 'region' },
        { title: 'Город', dataIndex: 'city', key: 'city' },
        { title: 'Статус', dataIndex: 'status', key: 'status' },
        { title: 'Субъект', dataIndex: 'obl', key: 'obl' },
        { title: 'Область', dataIndex: 'oblname', key: 'oblname' },
        { title: 'gr_ved', dataIndex: 'gr_ved', key: 'gr_ved',  width: 90 },
        { title: 'Направленность', dataIndex: 'prof', key: 'prof' },
    ];

    return (
        <div className='wrapper'>
            <Table 
                dataSource={data} 
                columns={columns} 
                sticky
                rowKey="codvuz" 
            />
        </div>
    );
    
};

export default App;