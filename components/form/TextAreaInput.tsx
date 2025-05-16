import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const TextAreaInput = ({ name, labelText, defaultValue }: { name?: string, labelText?: string, defaultValue?: string }) => {
    return (
        <div className="mb-2">
            <Label className="capitalize" htmlFor={name}>{labelText || name}</Label>
            <Textarea id={name} defaultValue={defaultValue} name={name} rows={5} required/>
        </div>
    )
}

export default TextAreaInput
