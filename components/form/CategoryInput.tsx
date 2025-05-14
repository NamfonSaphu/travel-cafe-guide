import { Label } from "../ui/label"
import { categories } from "@/utils/categories"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = 'category'
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1 block">{name}</Label>
      <Select defaultValue={defaultValue || categories[0].label} name={name} required>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {
            categories.map((item) => {
              return <SelectItem value={item.label} key={item.label}><span className="capitalize flex gap-2 items-center"><item.icon />{item.label}</span></SelectItem>
            })
          }
        </SelectContent>
      </Select>

    </div>

  )
}

export default CategoryInput
