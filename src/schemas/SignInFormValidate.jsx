import * as y from 'yup'

const SignInFormValidate = y.object({
    username: y.string().min(8, 'Tên đăng nhập của bạn phải ít nhất 8 kí tự').required('Bạn phải nhập tên đăng nhập của bạn!'),
    password: y.string().required('Bạn phải nhập mật khẩu của bạn')
})

export default SignInFormValidate