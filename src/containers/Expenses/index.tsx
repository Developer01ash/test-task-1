import React, { useEffect } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import { ExpensesvalidationSchema } from '@/validation/ExpensesValidation';
import styles from './expenses.module.css'
import Cookies from 'js-cookie';
interface FormValues {
  amount: string;
  description: string;
  category: string;
  time: string
}

interface ExpensesProps {
  setTransaction: React.Dispatch<React.SetStateAction<FormValues[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transaction: any
}


const Expenses: React.FC<ExpensesProps> = ({ setTransaction, setOpen ,transaction}) => {

  const formik = useFormik<FormValues>({
    initialValues: {
      amount: '',
      description: '',
      category: '',
      time: ''
    },
    validationSchema: ExpensesvalidationSchema,

    onSubmit: (values, { resetForm }) => {
      const amount = parseFloat(values.amount)
      const time = new Date()
      const payload = {

        amount,
        description: values.description,
        category: values.category,
        time
      }
      setTransaction((prev: any) => [...prev, payload]);
      Cookies.set('transaction',JSON.stringify([...transaction , payload]))
      setOpen(false)
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <TextField
        fullWidth
        id="amount"
        name="amount"
        label="Amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount ? formik.errors.amount : ''}
      />

      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description ? formik.errors.description : ''}
        sx={{ mt: 2 }}
      />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
        >
          <MenuItem value="groceries">Groceries</MenuItem>
          <MenuItem value="rent">Rent</MenuItem>
          <MenuItem value="salary">Salary</MenuItem>
          <MenuItem value="fees">Fees</MenuItem>
          <MenuItem value="shopping">Shopping</MenuItem>
        </Select>
        {formik.touched.category && formik.errors.category && (
          <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '5px', marginLeft: "14px", }}>{formik.errors.category}</div>
        )}
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        className={styles.payNow}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Expenses;



