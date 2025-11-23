import styles from "./FilterBtns.module.css"
import { Button, Select, Dropdown } from "antd";

export default function FilterBtns() {    

    const items = [
        {
            key: 1,
            label: (
                <span>服饰</span>
            )
        },
        {
            key: 2,
            label: (
                <span>食品</span>
            )
        },
        {
            key: 3,
            label: (
                <span>家居</span>
            )
        }
    ]

    return (
        <div className={styles.filterBtns}>
            <div className={styles.filterBtn}>
                <Dropdown menu={{items}} placement="bottomLeft">
                    <Button type="primary">按类别筛选</Button>
                </Dropdown>                            
            </div>            
            <Select
                defaultValue="按价格排序"
                style={{ width: 120 }}
                /* onChange={handleChange} */
                options={[
                    {value: "asc", label: "按价格升序"},
                    {value: "desc", label: "按价格降序"}            
                ]}
            />
        </div>
    )
}