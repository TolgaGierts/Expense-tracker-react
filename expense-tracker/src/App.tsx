
import { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import "./app.css"
import ExpenseForm from './components/ExpenseForm'




function App() {

  const [selectedCategory, setSelectedCategory] = useState('')

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Groceries' },
    { id: 2, description: 'bbb', amount: 2, category: 'Entertainment' },
    { id: 3, description: 'ccc', amount: 52, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 12, category: 'Groceries' }
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses



  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(exp => exp.id !== id))} />
    </div>
  )
}

export default App
