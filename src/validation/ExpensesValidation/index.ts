import * as Yup from 'yup';

export const ExpensesvalidationSchema = Yup.object({
    amount: Yup.number().positive('Amount must be greater than 0').required('Amount is required'),
    description: Yup.string().trim().required('Description is required'),
    category: Yup.string().required('Category is required'),
  });