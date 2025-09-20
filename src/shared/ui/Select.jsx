function Select({ id, label, multiple, options = [], hint, error, ...rest }) {
  return (
    <>
      <div className="select">
        {label && <p>{label}</p>}

        <select id={id} {...rest} multiple={!!multiple}>
          {!multiple && <option>--оберіть--</option>}

          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {hint && !error && <p>{hint}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default Select;
