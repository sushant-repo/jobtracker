import FormElement from './FormElement';

export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <FormElement>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className='form-select'
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        name={id}
      >
        <option  disabled value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormElement>
  );
}
