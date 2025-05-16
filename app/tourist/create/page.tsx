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
        <section>
            <div className="flex items-center gap-2 mb-6 mt-6">
                <h1 className="text-2xl font-bold text-slate-800">Create Landmark</h1>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl">
                Share your favorite landmark with the community. Fill in the details below to create a new landmark profile.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <FormContainer action={createPLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="name" label="Landmark Name" type="text" placeholder="e.g., Eiffel Tower" />
                        <CategoryInput />
                    </div>
                    <TextAreaInput name="description" />
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="price" label="Price" type="number" placeholder="Price" />
                        <ProvincesInput />
                    </div>
                    <ImageInput />
                    <div className="mt-4">
                        <h1 className="text-xl font-bold text-slate-800 mb-2">Location</h1>
                        <MapLandmark />
                    </div>
                    <SubmitButton text="Create" size='lg' />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateLandmark
