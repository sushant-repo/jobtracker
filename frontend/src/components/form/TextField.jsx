import './Form.css';
import FormElement from './FormElement';

export default function TextField({
  label,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  errorMessage = null,
}) {
  return (
    <FormElement>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
        placeholder={placeholder || label}
      />
      <div className="invalid-feedback">
        {errorMessage ?? 'Value is required.'}
      </div>
    </FormElement>
  );
}
