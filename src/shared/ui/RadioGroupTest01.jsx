function RadioGroupTest01({
  label,
  name,
  options = [],
  value,
  onChange,
  hint,
  error,
}) {
  return (
    <div>
      {label && <p>{label}</p>}

      <div>
        {options.map((obj) => (
          <label key={obj.value}>
            {obj?.label && <p>{obj.label}</p>}

            <input
              name={name}
              type="radio"
              value={obj.value}
              checked={String(value) === String(obj.value)}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        ))}
      </div>
      {hint && !error && <p>{hint}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default RadioGroupTest01;
