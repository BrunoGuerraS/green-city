import { useForm } from 'react-hook-form';

export const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return(
        <h1>Home</h1>
    )
}