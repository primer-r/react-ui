import { type ChangeEvent, useState } from "react"
import logo from '@/assets/images/react.svg'
import './index.scss'

export default function Page() {
    const [amount, setAmount] = useState<string>('2');
    const [cosmos, setCosmos] = useState<string>('atom1xym6wwzz9a');
    const [osmosis, setOsmosis] = useState<string>('osmo1xym6wwzz9a');
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement>, handlerName: string) => {
        eval(handlerName)(e.target.value)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const unitTemplate = ({ title = '', isEditable = false, value = '', setValue = '' }) => {
        return (
            <div className="width-100">
                <label className="middle">{title}</label>
                <div className="flex mt-10 p-16 br-4 black-bgc small-atom">
                    <img className="atom p-4" src={logo} />
                    <div className="flex-1 box-center">
                        <input type="text" value={value} readOnly={!isEditable} className="flex-1 pl-8 text-color transparent-bgc" onChange={(e) => handleChange(e, setValue)} />
                        {
                            isEditable && <span className="pr-8 pl-8">✏</span>
                        }
                    </div>
                </div>
            </div>
        )
    }

    if (!isOpen) return <></>
    return (
        <div className="bgc width-50 pl-16 pr-16 br-4 text-color">
            <div className="flex justify-space-between align-center white">
                <h2 className="normal">Deposit ATOM</h2>
                <span className="rect pointer" onClick={handleClose}>X</span>
            </div>
            <div className="flex align-center">
                {unitTemplate({ title: 'From Cosmos Hub', value: cosmos, setValue: 'setCosmos' })}
                <span className="pt-20 pl-8 pr-8">→</span>
                {unitTemplate({ title: 'To Osmosis', value: osmosis, setValue: 'setOsmosis', isEditable: true })}
            </div>
            <div className="pt-20">
                <div className="flex justify-space-between pt-8 pb-8">
                    <label className="middle">Select amount</label>
                    <label>Available <strong className="middle">2 ATOM</strong></label>
                </div>
                <div className="flex br-4 theme-border big-atom">
                    <div className="p-16 theme-border-right">
                        <img className="atom p-4" src={logo} />
                    </div>
                    <div className="flex-1 box-center p-16">
                        <input type="text" value={amount} className="flex-1 bgc white" onChange={(e) => handleChange(e, "setAmount")} />
                        <span className="white pr-8 pl-8">ATOM</span>
                        <span className="fz-12">≈ $1,013</span>
                    </div>
                </div>
                <div className="flex justify-end mt-10">
                    <span className="block pointer mr-10">Max</span>
                    <span className="block pointer mr-10">1/2</span>
                    <span className="block pointer">1/3</span>
                </div>
            </div>
            <div className="flex mb-16 mt-32 p-8 black-bgc white br-4">
                <span className="fz-16">◷</span>
                <label className="pl-8">Estimated time: <strong className="middle">20 seconds</strong></label>
            </div>
            <div className="flex flex-column">
                <button className="pointer bgc pt-20 pb-20 bold white-bgc br-4 fz-16">Transfer</button>
                <button className="pointer bgc pt-20 pb-20 bold text-color br-4 fz-16" onClick={handleClose}>Cancel</button>
            </div>
        </div>
    )
}