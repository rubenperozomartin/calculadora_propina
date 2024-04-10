type propinaProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]
export default function Propina({ setTip, tip }: propinaProps) {
    return (
        <div >
            <h3 className='font-bold text-2xl'>Propina </h3>

            <form >
                {tipOptions.map((tipOp) => (
                    <div key={tipOp.id} className="flex gap-2">
                        <label htmlFor={tipOp.id}> {tipOp.label}</label>
                        <input
                            type="radio"
                            id={tipOp.id}
                            name="tips"
                            value={tipOp.value}
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tip === tipOp.value}

                        />
                    </div>

                )

                )}
            </form>
        </div>



    )
}

