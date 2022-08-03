import { useState, useEffect } from 'react';

const useForm = (initialData, validateForm, fn) => {
  const [values, setValues] = useState(initialData);
  const [error, setError] = useState({});
  const [checkvalidateForm, setCheckvalidateForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (checkvalidateForm) {
      const dontError = Object.keys(error).length === 0;

      if (dontError) {
        fn();
      }
      setCheckvalidateForm(false);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationsError = validateForm(values);
    setError(validationsError);
    setCheckvalidateForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = () => {
    const validationsError = validateForm(values);
    setError(validationsError);
  };

  return {
    values,
    error,
    loading,
    setLoading,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useForm;
