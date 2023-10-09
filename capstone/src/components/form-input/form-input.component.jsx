import "./form-input.styles.scss";

const FormInput = ({ label, ...otherValues }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherValues} />
      {label && (
        <label
          className={`${
            otherValues.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}{" "}
    </div>
  );
};

export default FormInput;
