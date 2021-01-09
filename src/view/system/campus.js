/**
 *  @description 校区选择。
 */
import React, { useEffect, useState } from 'react';
import style from '../../style/system/campus.module.scss'
import { Button, Tag } from 'antd'
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import { getCampusList } from '../../api/system'
function Campus() {
    const [campusList, setCampus] = useState([])
    useEffect(() => {
        /**
         * @description 请求校区列表
         */
        const fetchData = async () => {
            let res = await getCampusList()
            setCampus(res.data.content)

        }
        fetchData()
    }, [])

    return <div className={style.campus}>
        <div className={style.header}>
            <span>四牧教育</span>
            选择校区
        </div>
        <div className={style.createDiv}>
            <Button type="primary">创建校区</Button>
        </div>
        <ul className={style.listWrap}>
            {
                campusList.map((item) => {
                    return <li className={style.listItem} key={item.campusId}>
                        <div className={style.name}>{item.campusName}</div>
                        <div className={style.address}>
                            {item.campusProvince + item.campusCity + item.campusDistrict}
                        </div>
                        <div>
                            <Tag color="processing" icon={<EditOutlined />}>编辑</Tag>
                            <Tag color="error" icon={<DeleteOutlined />}>删除</Tag>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
}
export default Campus;