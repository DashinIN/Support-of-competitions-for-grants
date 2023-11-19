import { useQuery } from 'react-query';
import { Table,Tabs } from 'antd';
import { fetchDataVuz, fetchDataGrKonk, fetchDataGrProj } from '@/shared/api/queries';
import { columnsVuz, columnsGrProj, columnsGrKonk} from '@/shared/consts/columns';

const App = () => {
    const { data: dataVuz } = useQuery('vuz', fetchDataVuz);
    const { data: dataGrProj } = useQuery('grProj', fetchDataGrProj);
    const { data: dataGrKonk } = useQuery('grKonk', fetchDataGrKonk);

    const tabData = [
        { key: '1', title: 'Вузы', dataSource: dataVuz, columns: columnsVuz, rowKey: 'codvuz' },
        { key: '2', title: 'Проекты', dataSource: dataGrProj, columns: columnsGrProj, rowKey: 'codkon' },
        { key: '3', title: 'Конкурсы', dataSource: dataGrKonk, columns: columnsGrKonk, rowKey: 'codkon' },
    ];

    return (
        <Tabs defaultActiveKey="1" type="card">
            {tabData.map(({ key, title, dataSource, columns, rowKey }) => (
                <Tabs.TabPane key={key} tab={title}>
                    <Table dataSource={dataSource} columns={columns} sticky rowKey={rowKey} />
                </Tabs.TabPane>
            ))}
        </Tabs>
    );
};

export default App;