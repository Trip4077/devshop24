// Functions

export const handleChange = (e, values, setValues) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value 
  })
}

export const handleSubmit = (e, submission, reduxFn, dispatch) => {
  e.preventDefault();
  dispatch(reduxFn(submission));
}

export const handleChangeCheckbox = (e, values, setValues) => {
  if(e.target.checked) {

    if(values.tech_stack.length) {

      setValues({
        ...values,
        tech_stack: `${values.tech_stack} ${e.target.value}`
      });

    } else {

      setValues({
        ...values,
        tech_stack: e.target.value
      })

    }

  } else {
    const newStack = values.tech_stack.replace(`${e.target.value}`, '').trim();

    setValues({
      ...values,
      tech_stack: newStack
    })

  }
}

// Templates
export const blankDeveloperForm = {
  "email": "",
  "first_name": "",
  "last_name": "",
  "password": "",
  "phone": "",
  "title": "Full Stack",
  "location": "United States",
  "tech_stack": "",
  "interest": "",
  "rate": 20.0,
  "available": true
}

export const blankLoginForm = {
  email: "",
  password: ""
}