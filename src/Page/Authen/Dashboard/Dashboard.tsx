import { Card, DatePicker, Space } from "antd"
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from "moment";
import { IhcLink } from "../../Components/Link/IhcLink";


export const Dashboard = () => {

    dayjs.extend(customParseFormat);
    const dateFormat = 'YYYY/MM/DD';
    const currentDate = moment().format(dateFormat);
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        // Can not select days before today and today
        return current && current > dayjs().endOf('day');
    };
    const onChange = (value: Dayjs | null, dateString: string) => {
        if (value) {
            console.log('Date:', value.format(dateFormat));
        } else {
            console.log('Clear');
        }
    };

    return (
        <>
            <div className="m-5">
                <div className="text-4xl">Dashboard</div>
                <Space direction="vertical" size={12}>
                    <DatePicker onChange={onChange} allowClear={false} disabledDate={disabledDate} defaultValue={dayjs(currentDate, dateFormat)} format={dateFormat} />
                </Space>
                <div className=" m-3 gap-4 flex flex-wrap justify-center">

                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>

                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>
                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>
                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>
                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>

                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>

                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>

                    <Card title="Default size card" extra={<IhcLink to="/">More</IhcLink>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p> <p>Card content</p>

                    </Card>



                </div>
            </div>
        </>
    )
}