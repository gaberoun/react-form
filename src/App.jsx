import { useState } from 'react';
import Name from './components/Name';
import Contact from './components/Contact';
import Others from './components/Others';

function App() {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState({
    firstName: '',
    middleName: '',
    lastName: '' 
  });
  const [contact, setContact] = useState({
    address: '',
    phone: '',
    email: '' 
  });
  const [others, setOthers] = useState({
    sex: '',
    birthdate: ''
  })

  const validationHandler = () => {
    const formErrors = {};
    
    // Handle non-alphabet name
    Object.entries(name).map(([key, value]) => {
      if (!value.match(/^[a-zA-Z\s]*$/)) 
        formErrors[key] = 'Input must only be letters';
    });

    // Phone number must have 10 digits
    if (!contact['phone'].match(/^\d{10}$/)) 
      formErrors['phone'] = 'Input a valid phone number';

    // Handle empty sex input
    if (others['sex'] == '')
      formErrors['sex'] = 'Select one';

    // Handle underage user
    const current = new Date().getFullYear();
    if (current - parseInt(others['birthdate'].substring(0,4)) < 18)
      formErrors['birthdate'] = 'You must be above 18 years old';

    // Form is not valid if there is an error
    if (Object.keys(formErrors).length > 0) {
      setErrors({...formErrors});
      return false;
    }
    return true;
  }

  const reset = () => {
    // Reset input fields and errors after successful submit
    setName({
      firstName: '',
      middleName: '',
      lastName: '' 
    });
    setContact({
      address: '',
      phone: '',
      email: '' 
    });
    setErrors({});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validationHandler();

    if (isValid) {
      reset();
      alert('Submitted.');
    } else {
      alert('Something went wrong.')
    }
  }

  return (
    <>
      <h1>Employee Information Sheet</h1>
      <form onSubmit={submitHandler}>
        <Name name={name} setName={setName} errors={errors} />
        <Contact contact={contact} setContact={setContact} errors={errors} />
        <Others others={others} setOthers={setOthers} errors={errors} />
        <input type='submit' />
      </form>
    </>
  );
}

export default App;