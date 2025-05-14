import { Label } from "../ui/label"
import { categories } from "@/utils/categories"
import { provinces } from "@/utils/provinces"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = 'provinces'
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize mb-1 block">{name}</Label>
            <Select defaultValue={defaultValue || provinces[0].PROVINCE_NAME} name={name} required>
                <SelectTrigger className="w-full">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item) => {
                            return <SelectItem value={item.PROVINCE_NAME} key={item.PROVINCE_NAME}><span className="capitalize flex gap-2 items-center">{item.PROVINCE_NAME}</span></SelectItem>
                        })
                    }
                </SelectContent>
            </Select>

        </div>

    )
}

export default ProvincesInput
