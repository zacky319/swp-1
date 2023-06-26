import { Table } from "antd"
import { DataTableTemplates } from "../../../layouts/templates/DataTableTemplates"
import Column from "antd/es/table/Column"
import React from "react"

export const ListTest: React.FC = () => {

    const columns = [
        { title: "id" ,dataIndex: 'id',},
        { title: "name" ,dataIndex: 'name',},
        { title: "stt" ,dataIndex: 'stt',},
        { title: "abc",dataIndex: 'abc', },
    ]
    const list = [
        { id: "1", name: "hao", stt: "123", abc: "abcasd", button: "click" },
        { id: "2", name: "toan", stt: "123123213", abc: "abcasd", button: "click" },
        { id: "3", name: "toan", stt: "123", abc: "abcasd", button: "click" },
        { id: "4", name: "toan", stt: "123", abc: "abcasd", button: "click" },
        { id: "5", name: "toan", stt: "123", abc: "abcasd", button: "click" },
    ]

  

    const columns1 = [
        ...list,
        {
            title: (
                <div>
                   action 
                </div>
            ),
            dataIndex: 'text',
            width: 160,
        }
    ]

    const columns123 = [
        {
          title: 'Name1',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
      const dataSource = [
        {
          key: '1',
          name1: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
    return (
        <>
            <DataTableTemplates


            >
                <Table
                    dataSource={list}
                    columns={columns}
                    className=""
                   
                // scroll={{
                //     x:columns.reduce(
                //         (prev,current)=>prev+Number(current.width??0),
                //         0,
                //     ),
                // }}
                />

            </DataTableTemplates>

        </>
    )
}