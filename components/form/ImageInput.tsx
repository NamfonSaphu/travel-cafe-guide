import { Input } from "../ui/input"
import { Label } from "../ui/label"

const ImageInput = () => {
    const name = 'image'
    return (
        <div className="capitalize">
            <Label className="mb-2 block">{name}</Label>
            <Input id={name} name={name} type="file" required accept="image/*" />
        </div>
    )
}

export default ImageInput
