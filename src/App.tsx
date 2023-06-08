import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section>
          <h2>Cargar producto</h2>
          <ProductForm/>
        </section>
        <section>

        </section>
        <section>

        </section>

      </main>
    </>
  )
}

export default App
