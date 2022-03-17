// import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, InputAdornment, IconButton } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { SignInFormValidate } from 'src/schemas';

const SignInForm = ({ onSubmit }) => {
    const [showPassword, setShowPassword] = useState(false)

    const methods = useForm({
        mode: "onChange",
        reValidateMode: 'onChange',
        // resolver: yupResolver(SignInFormValidate)
    })

    const {
        handleSubmit,
        register,
        formState: { touchedFields, isSubmitting }
    } = methods

    const onError = (data) => {
        console.error(data)
    }

    return (
        <FormProvider>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Stack minWidth='25vw' spacing={2}>
                    <TextField
                        fullWidth
                        autoFocus
                        label='Tên đăng nhập'
                        {...register('username')}
                    />
                    <TextField
                        fullWidth
                        label='Password'
                        type={!showPassword ? 'text' : 'password'}
                        {...register('password')}
                        InputProps={{
                            endAdornment: <InputAdornment position='end' onClick={() => setShowPassword(!showPassword)}><IconButton>
                                {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </IconButton></InputAdornment>
                        }}
                    />
                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>Đăng nhập</LoadingButton>
                </Stack>

            </form>
        </FormProvider>
    )

}

export default SignInForm