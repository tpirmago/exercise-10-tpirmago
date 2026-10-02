import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')
  const [vat, setVat] = useState('')
  const [total, setTotal] = useState('')

  function calculate() {
    const vatValue = Number(amount) * 0.255
    const totalValue = Number(amount) + vatValue
    setVat(vatValue.toFixed(2))
    setTotal(totalValue.toFixed(2))
  }

  return (
    <section id="center">
      <h1>Vat Calculator</h1>
      <div>
        <label>Amount (€): </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="button" className="counter" onClick={calculate}>
        Calculate VAT
      </button>
      <p>
        VAT (€): {vat}, Total (€): {total}
      </p>
    </section>
  )
}

export default App
