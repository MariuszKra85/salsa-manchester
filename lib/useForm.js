import { useEffect, useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join(' ');
  useEffect(() => {
    setInputs(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const handleChange = (e) => {
    let { name, type, value } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const resetForm = () => {
    setInputs(initial);
  };
  const clearForm = () => {
    const blankState = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  };
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};
export default useForm;
