import FormElement from "./FormElement";

export default function DateField({ label, id, value, onChange, required = false }) {
  return (
    <FormElement>
        <label className="form-label" htmlFor={id} >{label}</label>
        <input type="date" id={id}
        name={id}
         className='form-control' value={value} onChange={onChange} required={required} />

    </FormElement>
  );
}