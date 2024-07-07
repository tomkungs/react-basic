import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportCoponent.css'

function ReportComponent(){
    const {income,expense}=useContext(DataContext)
    function formatnumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }
return(
    <>
            <div>
                {/* <p>รายรับ: {income}</p>
                <p>รายจ่าย: {expense}</p> */}
                <h4>ยอดคงเหลือ (บาท)</h4>
                <h1>฿ {formatnumber((income-expense).toFixed(2))}</h1>
                <div className="report-container">
                    <div>
                        <h4>รายได้ทั้งหมด</h4>
                        <p className="report plus">฿ {formatnumber(income)}</p>
                    </div>
                    <div>
                        <h4>รายจ่ายทั้งหมด</h4>
                        <p className="report minus">฿ {formatnumber(expense)}</p>
                    </div>
                </div>
            </div>
    </>
)
}

export default ReportComponent