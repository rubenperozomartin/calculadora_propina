import { MenuItems, OrderItems } from "../types"
import { formatCurrency } from '../helpers/index.ts'
type OrderContentsProps = {
    order: OrderItems[],
    eliminarItem: (id: MenuItems['id']) => void
}


const OrderContents = ({ order, eliminarItem }: OrderContentsProps) => {
    return (
        <>
            <h2 className='text-4xl text-slate-700 text-center font-bold mb-2'>Consumo</h2>
            <div className='space-y-3 mt-10'>


                {(order.map(orde => (
                    <div key={orde.id}
                        className='flex justify-between items-center border-t border-cyan-600 py-5 last-of-type:border-b'
                    >
                        <div>
                            <p className='text-lg'>
                                {orde.name} - {formatCurrency(orde.price)}
                            </p>
                            <p className='font-black'>
                                Cantidad :  {orde.quantity} - {formatCurrency(orde.price * orde.quantity)}
                            </p>
                        </div>
                        <button className='text-white font-bold bg-red-600 h-8 w-8 rounded-full'
                            onClick={() => eliminarItem(orde.id)}

                        >
                            X
                        </button>

                    </div>
                ))

                )}






            </div>

        </>


    )
}

export default OrderContents 