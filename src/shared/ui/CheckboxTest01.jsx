function CheckboxTest01({ label, checked, onChange, hint, error }) {
  return (
    <>
      <label>
        {label && <p>{label}</p>}
        <input
          type="checkbox"
          checked={!!checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {hint && !error && <p>{hint}</p>}
      </label>
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default CheckboxTest01;
