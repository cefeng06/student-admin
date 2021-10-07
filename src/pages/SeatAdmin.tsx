import { FC, useState, useEffect } from 'react'
import { Card, Button, Space } from 'antd'
import { studentList } from './InfoAdmin';

const { Grid } = Card;

export const SeatMap: FC = () => {

    const [maxRow] = useState(6);
    const [maxColumn] = useState(7);
    const [list, setList] = useState(studentList);

    useEffect(() => {
        renderGrid();
    }, [list])

    const getStudentName = (row: number, col: number) => {
        const arr = Object.values(list)
        const index = arr.findIndex(ele => ele.seat.toString() === [row, col].toString());
        if (index > -1) {
            return arr[index].name;
        }
    }

    const renderGrid = () => {
        const grids = [];
        for (let i = 1; i <= maxRow; i++) {
            for (let j = 1; j <= maxColumn; j++) {
                const grid = (
                    <Grid
                        key={`${i}${j}`}
                        style={{
                            width: `${100 / maxColumn}%`,
                            height: '80px',
                            textAlign: 'center',
                            border: '1px solid #000',
                            fontSize: '18px'
                        }}
                    >
                        {getStudentName(i, j)}
                    </Grid>
                )
                grids.push(grid);
            }
        }
        return grids;
    };

    const backToLast = () => {
        Object.keys(list).forEach(key => {
            const id = parseInt(key);
            let [row, col] = list[id].seat;
            row = row + 1 > maxRow ? 1 : row + 1;
            col = col + 1 > maxColumn ? 1 : col + 1;
            if (row === 1 && col === 1) {
                row = 2;
                col = 2;
            };
            list[id].seat = [row, col];
            setList({ ...list });
        });
    };

    const changeToNext = () => {
        Object.keys(list).forEach(key => {
            const id = parseInt(key);
            let [row, col] = list[id].seat;
            row = row - 1 <= 0 ? maxRow : row - 1;
            col = col - 1 <= 0 ? maxColumn : col - 1;
            if (row === 1 && col === 1) {
                row = maxRow;
                col = maxColumn;
            };
            list[id].seat = [row, col];
            setList({ ...list });
        });
    };

    return (<>
        <Card
            title='座位表'
            extra={
                <Space>
                    <Button onClick={changeToNext}>下一周</Button>
                    <Button onClick={backToLast}>上一周</Button>
                </Space>
            }
            actions={[
                <div style={{
                    border: '2px solid #000',
                    color: '#000',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}>黑板</div>
            ]}
            bodyStyle={{
                border: '1px solid #000',
                fontSize: '20px',
                fontWeight: 'bold'
            }}
        >
            {renderGrid()}
        </Card>
    </>);
}