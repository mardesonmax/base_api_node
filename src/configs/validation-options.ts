import { ValidateOptions } from 'yup/lib/types';

const validateOptions: ValidateOptions = {
  abortEarly: false,
  stripUnknown: true,
  recursive: true,
};

export { validateOptions };
