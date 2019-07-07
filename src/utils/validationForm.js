

export const required = value =>
  (value
    ? undefined
    : 'Please fill out this field.');

export const maxLength = max => value =>
  (value && value.length > max
    ? `Must be ${max} characters or less.`
    : undefined);

export const maxLength15 = maxLength(15);

export const maxLength50 = maxLength(50);

export const maxLength100 = maxLength(100);

export const maxLength25 = maxLength(25);

export const maxLength80 = maxLength(80);

export const maxLength20 = maxLength(20);

export const maxLength60 = maxLength(60);

export const maxLength3 = maxLength(3);

export const maxLength10 = maxLength(10);

export const minLength = min => value =>
  (value && value.length < min
    ? `Must be ${min} characters or more.`
    : undefined);

export const minLength2 = minLength(2);

export const minLength6 = minLength(6);

export const minLength5 = minLength(5);

export const number = value =>
  (value && Number.isNaN(Number(value))
    ? 'Must be a number.'
    : undefined);

export const valueMinus = value =>
  (value && Number(value) < 0
    ? 'can not be minus'
    : undefined);

export const valuePercentMax = value =>
  (value && Number(value) > 100
    ? '> 100'
    : undefined);

export const valueZero = value =>
  (value && Number(value) <= 0
    ? 'can not be zero'
    : undefined);

export const minValue = min => value =>
  (value && value < min
    ? `Must be at least ${min}.`
    : undefined);

export const minValue18 = minValue(18);

export const minValue1 = minValue(1);

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address.'
    : undefined);
export const tooOld = value =>
  (value && value > 65
    ? 'You might be too old for this.'
    : undefined);

export const aol = value =>
  (value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?.'
    : undefined);

export const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters.'
    : undefined);

//edited by asep
export const phoneNumber = value =>
  (value && !/\+?([ -]?\d+){9}|\(\d+\)([ -]\d+)/i.test(value)
    ? 'Invalid phone number, must be legal numbers.'
    : undefined);