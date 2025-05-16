import { createPLandmarkAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Buttons"
import CategoryInput from "@/components/form/CategoryInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInput from "@/components/form/ImageInput"
import ProvincesInput from "@/components/form/ProvincesInput"
import TextAreaInput from "@/components/form/TextAreaInput"
import MapLandmark from "@/components/map/MapLandmark"

const CreateLandmark = async () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <section>
                <h1 className="text-2xl font-semibold mb-8 capitalize">Create</h1>
                <div>
                    <FormContainer action={createPLandmarkAction}>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <FormInput name="name" label="Name" type="text" placeholder="Name" />
                            <CategoryInput />
                        </div>
                        <TextAreaInput name="description" />
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <FormInput name="price" label="Price" type="number" placeholder="Price" />
                            <ProvincesInput />
                        </div>
                        <ImageInput />
                        <div className="mt-4">
                            <MapLandmark />
                        </div>
                        <SubmitButton text="Create Profile" size='lg' />
                    </FormContainer>
                </div>
            </section>
        </div>
    )
}

export default CreateLandmark

