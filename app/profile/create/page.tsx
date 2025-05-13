import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"

const createProfileAction = async (prevState: any, formData: FormData) => {
    "use server"
    const firstName = formData.get('firstName')
    console.log('!!!', firstName)
    return {message: 'Create Profile Success!!!'}
}

const CreateProfile = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div>
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="firstName" label="First Name" type="text" placeholder="First Name" />
                        <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name" />
                        <FormInput name="userName" label="Username" type="text" placeholder="Username" />
                    </div>
                    <SubmitButton text="Create Profile" size='lg' />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
