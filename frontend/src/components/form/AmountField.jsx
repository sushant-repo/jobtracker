import { useState } from 'react';
import FormElement from './FormElement';

export default function AmountField({
  id,
  label,
  value,
  onChange,
  required = false,
  showFrequency = true,
}) {
  const frequencyOptions = [
    { value: 'ph', label: '/hour' },
    { value: 'pa', label: '/annum' },
  ];

  function onChangeAmount(e) {
    const newAmount = e.target.value;
    onChange({ amount: newAmount, frequency: value.frequency, name: id });
  }

  function onChangeFrequency(e) {
    const newFrequency = e.target.value;
    onChange({ amount: value.amount, frequency: newFrequency, name: id });
  }

  return (
    <FormElement>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control flex-grow-1"
          id={id}
          aria-label="Amount (to the nearest dollar)"
          value={value.amount}
          onChange={onChangeAmount}
          required={required}
        />

        {showFrequency && (
          <select
            className="input-group-text"
            value={value.frequency}
            onChange={onChangeFrequency}
            required={required}
          >
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </FormElement>
  );
}
