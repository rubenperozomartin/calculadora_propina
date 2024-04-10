import { MenuItems } from "../types"

type MenuItemsProps = {
    item: MenuItems,
    addItem: (item: MenuItems) => void

}

export default function MenuItem({ item, addItem }: MenuItemsProps) {
    return (

        <button
            className=' pd-5 border-2 border-teal-400 w-full my-1 hover:bg-teal-400'
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className=' font-black'>$ {item.price}</p>
        </button>

    )
}

