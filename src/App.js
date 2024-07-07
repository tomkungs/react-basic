import { useEffect, useState  } from 'react';
import './App.css';
import FormComponent from './component/FormComponent';
import Transection from './component/Transection';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

function App() {
  

  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
  const initState =[
    {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
    {id:2,title:"เงินเดือน",amount:15000},
  ]

  const [items,setItems]=useState(initState)
  const [reportIncome,setReponrtIncome]=useState(0)
  const [reportExpense,setReponrtExpense]=useState(0)

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = amounts.filter(element=>element<0).reduce((total,element)=>total-=element,0)
    setReponrtIncome(income.toFixed(2))
    setReponrtExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])

  const onAddNewItem =(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }


  return (
    <DataContext.Provider value={{income: reportIncome,expense: reportExpense}}>
      <div className='container'>
      <h1 style={design}>โปรแกรมบัญชี - รายจ่าย</h1>
      <Router>
        <div>
          <ul className='horizontal-menu'>
            <li>
              <Link to="/" >ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<ReportComponent />}/>
            <Route path="/insert" element={
              <>
                <FormComponent onAddItem={onAddNewItem}/>
                <Transection items={items} />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </div>
    </DataContext.Provider>
    
  );
}

export default App;
