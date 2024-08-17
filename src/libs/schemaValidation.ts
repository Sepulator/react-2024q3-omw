import * as Yup from 'yup';
import { countryList } from './const';

const fileTypes = ['image/jpeg', 'image/png'];

export const schemaUncontrolled = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
    .required()
    .label('Name'),
  age: Yup.number()
    .transform((value: string) => (Number.isNaN(value) ? null : value))
    .positive()
    .integer()
    .required('Age must be a number')
    .label('Age'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .required()
    .matches(/[A-Z]/, 'Password contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password contain at least one special character'
    )
    .label('Password'),
  repeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required()
    .label('Password'),
  country: Yup.string()
    .required()
    .test('matchCountry', 'Country must be present in list', (value) => {
      return countryList.includes(value);
    })
    .label('Country'),
  gender: Yup.string().required().label('Gender'),
  upload: Yup.mixed<File>()
    .test('fileSize', 'File size must be less than 1MB', (value) => {
      return value && value.size <= 1024 * 1024;
    })
    .test('fileType', 'File extension must be .jpg, .jpeg, .png', (value) => {
      return value && fileTypes.includes(value.type);
    })
    .required()
    .label('Image File'),
  accept: Yup.string()
    .required('Please accept Terms and Conditions')
    .label('Terms'),
});

export const schemaControlled = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
    .required()
    .label('Name'),
  age: Yup.number()
    .transform((value: string) => (Number.isNaN(value) ? null : value))
    .positive()
    .integer()
    .required('Age must be a number')
    .label('Age'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .required()
    .matches(/[A-Z]/, 'Password contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password contain at least one special character'
    )
    .label('Password'),
  repeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required()
    .label('Password'),
  country: Yup.string()
    .required()
    .test('matchCountry', 'Country must be present in list', (value) => {
      return countryList.includes(value);
    })
    .label('Country'),
  gender: Yup.string().required().label('Gender'),
  upload: Yup.mixed<FileList>()
    .test('fileType', 'File extension must be .jpg, .jpeg, .png', (value) => {
      return value && fileTypes.includes(value[0]?.type);
    })
    .test('fileSize', 'File size must be less than 1MB', (value) => {
      return value && value[0]?.size <= 1024 * 1024;
    })
    .required()
    .label('Image file'),
  accept: Yup.bool()
    .oneOf([true], 'Please accept Terms and Conditions')
    .required(),
});
