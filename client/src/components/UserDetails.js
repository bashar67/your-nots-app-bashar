import FormRow from "./FormRow";

const UserDetails = ({
  nextStep,
  handleChange,
  values,
  passwordCheck,
  isArabic,
}) => {
  const { email, password, confirmPassword } = values;
  return (
    <>
      <FormRow
        type="email"
        labelText={isArabic ? "البريد الالكتروني" : "email"}
        name="email"
        value={email}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        labelText={isArabic ? "كلمة المرور" : "password"}
        name="password"
        value={password}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        labelText={isArabic ? "تأكيد كلمة المرور" : "confirmPassword"}
        name="confirmPassword"
        value={confirmPassword}
        handleChange={handleChange}
      />
      <button type="button" className="btn btn-block" onClick={nextStep}>
        {isArabic ? "أكمل تسجيل الدخول⬅" : "complete Signup ➡"}
      </button>
    </>
  );
};

export default UserDetails;
