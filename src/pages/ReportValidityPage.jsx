import ReportValidityForm from "@/entities/ReportValidityForm";

function ReportValidityPage() {
  return (
    <>
      <h1>!xxx.reportValidity()</h1>
      <p>true/folse / не показує що саме сталося</p>
      <h2>
        reportValidity() повертає true, якщо поле валідне, і false, якщо
        невалідне.і
      </h2>
      <ReportValidityForm />
    </>
  );
}

export default ReportValidityPage;
