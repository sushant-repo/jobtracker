import FormElement from "./FormElement";

export default function Textarea({ label, id, value, onChange, rows=4, required = false }) {
    return (
        <FormElement>
            <label className="form-label" htmlFor={id}>{label}</label>
            <textarea
                className="form-input"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={label}
                rows={rows}
            />
        </FormElement>
    );
}