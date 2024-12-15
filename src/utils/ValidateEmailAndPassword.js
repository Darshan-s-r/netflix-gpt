// Email Validation RegEx
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const nameRegex = /^[a-zA-Z][a-zA-Z@]*\d*$/;
  
export default function validate(email, password, name) {
  if(!nameRegex.test(name)) return "name must have more than 1 charactor"
  if(!emailRegex.test(email)) return "email is not valid"
  if(!passwordRegex.test(password)) return "password is not valid"
  return null
}

