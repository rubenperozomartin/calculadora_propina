import { MenuItems, OrderItems } from "../types"
import { useState } from "react"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItems[]>([])
    const [tip, setTip] = useState(0)
    const addItem = (item: MenuItems) => {
        if (order.find((OrdersItems) => OrdersItems.id === item.id)) {
            const updateOrder = order.map(
                orde => orde.id === item.id ? { ...orde, quantity: orde.quantity + 1 } : orde)
            setOrder(updateOrder)



        } else {

            const newItem: OrderItems = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const eliminarItem = (id: MenuItems['id']) => {
        const updateOrder = order.filter(item => item.id !== id)
        setOrder(updateOrder)

    }
    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        eliminarItem,
        placeOrder
    }

}
