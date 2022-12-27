import { expressYupMiddleware } from 'express-yup-middleware';
import * as Yup from 'yup';

import { validateOptions } from '~configs/validation-options';

export const createAccountValidator = expressYupMiddleware({
  schemaValidator: {
    schema: {
      body: {
        yupSchema: Yup.object().shape({
          name: Yup.string()
            .matches(
              /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/,
              'Provide first and last name'
            )
            .required(),
          email: Yup.string().email('E-mail is invalid').required(),
          password: Yup.string().required(),
        }),
        validateOptions,
      },
    },
  },
});
