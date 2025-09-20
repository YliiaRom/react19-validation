function RadioGroup({ label, name, options = [], value, onChange, error }) {
  return (
    <>
      <div>
        <label>
          {label && label}
          {options.map((item) => (
            <label key={item.value}>
              {item.label && item.label}
              <input
                type="radio"
                name={name}
                checked={String(value) === String(item.value)}
                value={item.value}
                onChange={(e) => onChange(e.target.value)}
              />
            </label>
          ))}
        </label>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default RadioGroup;
