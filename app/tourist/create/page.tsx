import { createPLandmarkAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Buttons"
import CategoryInput from "@/components/form/CategoryInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ProvincesInput from "@/components/form/ProvincesInput"
import TextAreaInput from "@/components/form/TextAreaInput"
import MapLandmark from "@/components/map/MapLandmark"

const CreateLandmark = async () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div>
                <FormContainer action={createPLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="name" label="Landmark Name" type="text" placeholder="Landmark Name" />
                        <CategoryInput />
                    </div>
                    <TextAreaInput name="description" />
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="price" label="Price" type="number" placeholder="Price" />
                        <ProvincesInput />
                    </div>
                    <MapLandmark />
                    <SubmitButton text="Create Profile" size='lg' />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateLandmark
