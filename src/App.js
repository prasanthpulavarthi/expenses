import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES=[
  {id:"e1",title:"tolet Paper",amount:94.20,date:new Date(2020,7,14)},
  {id:"e2",title:"tolet Pencil",amount:84.20,date:new Date(2021,7,15)},
  {id:"e3",title:"tolet pen",amount:74.20,date:new Date(2022,7,16)},
  {id:"e4",title:"tolet book",amount:64.20,date:new Date(2023,7,17)},
]
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
 
  const addExpenseHandler = (expense) =>{
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      </div>
  );
}

export default App;
