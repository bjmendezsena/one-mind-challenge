import { useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  /**
   * Modify each element of the form.
   *
   * @param {any} value Field value.
   * @param {keyof T} field Name of the field to modify.
   */
  const onChange = (value: any, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  /**
   * Modify the entire form.
   *
   * @param {T} form Data to set the form.
   *
   */
  const setFormValue = (form: T) => {
    setState(form);
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
