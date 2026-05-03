import "./Form.css";
import FormElement from "./FormElement";

export default function TextField({ label, id, value, onChange, required = false }) {
    return (
        <FormElement>
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
            className="form-input"
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={label}
            />
        </FormElement>
    );
}