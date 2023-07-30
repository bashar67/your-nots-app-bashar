import FormRow from "./FormRow";

const Login = ({ handleChange, values, isArabic }) => {
  return (
    <>
      <FormRow
        type="email"
        labelText={isArabic ? "البريد الالكتروني" : "email"}
        name="email"
        value={values.email}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        labelText={isArabic ? "كلمة المرور" : "password"}
        name="password"
        value={values.password}
        handleChange={handleChange}
      />
    </>
  );
};

export default Login;
