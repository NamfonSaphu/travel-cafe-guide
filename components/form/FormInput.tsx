import { Input } from "../ui/input"
import { Label } from "../ui/label"


type FromInputProps = {
    name?: string
    type?: string
    label?: string
    defaultValue?: string
    placeholder?: string
}

const FormInput = (props: FromInputProps) => {
    const { name, type, label, defaultValue, placeholder } = props
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="mb-1 block">{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} />
        </div>
    )
}

export default FormInput
