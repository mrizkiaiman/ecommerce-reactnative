import * as Yup from 'yup'

const SignIn = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
})

const SignUp = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
  firstName: Yup.string().required().min(3).max(30).label('First name'),
  lastName: Yup.string().required().min(3).max(30).label('Last name'),
})

export default {SignIn, SignUp}
