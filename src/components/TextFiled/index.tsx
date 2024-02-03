import React from 'react';
import { useField } from 'formik';
import { TextField as InputField, FormControl } from '@mui/material';

interface MyTextFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
}

const TextField: React.FC<MyTextFieldProps> = ({ label, id, name, type, ...props }) => {
  const [field, meta, helpers] = useField({ name, type, ...props });

  return (
    <FormControl fullWidth margin="normal">
      <InputField
        {...field}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error}
        label={label}
        variant="outlined"
        onChange={(e) => helpers.setValue(e.target.value)}
        onBlur={() => helpers.setTouched(true)}
      />
    </FormControl>
  );
};

export default TextField;
