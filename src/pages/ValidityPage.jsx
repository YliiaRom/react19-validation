import ValidationMassageForm from "@/entities/ValidationMassageForm";
import ValidityForm from "@/entities/ValidityForm";

function ValidityPage() {
  return (
    <div className="validatePage">
      <h1>.validity.xxx / .validationMessage</h1>
      <h2>
        .valueMissing - пароль обов'язковий <br />
        .tooShort - занадто короткий; <br />
        .patternMismatch - не відповідає потрібному шаблону <br />
        .valid - валідний <br /> true || false
      </h2>
      <ValidityForm />
      <hr />
      <ValidationMassageForm />
    </div>
  );
}

export default ValidityPage;
