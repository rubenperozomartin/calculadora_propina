import MenuItem from "./Components/MenuItem"
import OrderContents from "./Components/OrderContents"
import OrderTotal from "./Components/OrderTotal"
import { menuItems } from "./data/db"
import useOrder from './hooks/useOrder'
import Propina from './Components/Propina'

function App() {

  const { order, addItem, eliminarItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className=" bg-teal-500 py-5 my-5">
        <div>
          <h1 className=" text-center font-bold "> Calculadora de Propina y Consumo</h1>
        </div>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div >
          <h2 className="text-4xl text-slate-700 text-center font-bold mb-2 ">Menu</h2>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}


            />
          ))}

        </div>
        {order.length === 0 ? <p className="font-bold text-center"> Orden vacia</p>
          :
          <div className=' border border-dashed border-slate-500 p-5 rounded-lg space-y-10 ' >
            <OrderContents
              order={order}
              eliminarItem={eliminarItem}
            />
            <Propina
              tip={tip}
              setTip={setTip}
            />

            <OrderTotal
              order={order}
              tip={tip}
              placeOrder={placeOrder}
            />

          </div>}



      </main>
    </>
  )
}

export default App
