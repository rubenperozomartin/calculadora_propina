import { useMemo } from "react"
import { OrderItems } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
  order: OrderItems[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subtotalAmount = useMemo(() =>
    order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const propinaCant = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount])
  const total = useMemo(() => propinaCant + subtotalAmount, [tip, subtotalAmount])

  return (
    <>
      <div className='y-3'>
        <h2 className='text-2xl'> Totales y Propina :  </h2>
        <p >Subtotal a pagar :
          <span className='font-bold'> {formatCurrency(subtotalAmount)} </span> </p>
        <p>Propina :
          <span className='font-bold'> {formatCurrency(propinaCant)}</span>
        </p>
        <p >Total a Pagar :
          <span className='font-bold'> {formatCurrency(total)}</span></p>



      </div >
      <button className=" w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-10"
        disabled={subtotalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>

    </>
  )
}

