import FormRow from "./FormRow";

const PersonalDetails = ({
  onSubmit,
  prevStep,
  handleChange,
  values,
  isLoading,
  isArabic,
}) => {
  const { username, phone, birthYear } = values;

  return (
    <>
      <FormRow
        type="text"
        name={isArabic ? "اسم المستخدم" : "username"}
        value={username}
        handleChange={handleChange}
      />
      <FormRow
        type="text"
        name={isArabic ? "الهاتف" : "phone"}
        value={phone}
        handleChange={handleChange}
      />
      <FormRow
        type="text"
        name={isArabic ? "سنة الميلاد" : "birthYear"}
        value={birthYear}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="btn btn-block"
        onChange={onSubmit}
        disabled={isLoading}
      >
        {isArabic ? "تسجيل" : "submit"}
      </button>
      <button
        type="button"
        className="btn btn-block btn-back"
        onClick={prevStep}
      >
        {isArabic ? "تسجيل" : "  ⬅ Back"}
      </button>
    </>
  );
};

export default PersonalDetails;
