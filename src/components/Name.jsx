function Name({ name, setName, errors }) {

  return (
    <>
      <h3>Full Name</h3>
      <section id='name'>
        <div>
          <label htmlFor='lastName' className='required'>Last Name: </label>
          <input 
            type='text' 
            name='lastName'
            value={ name.lastName } 
            onChange={(e) => setName({ ...name, lastName: e.target.value })} 
            placeholder='Dela Ta'
            required
          />
          <p>{ errors['lastName'] }</p>
        </div>
        <div>
          <label htmlFor='firstName' className='required'>First Name: </label>
          <input 
            type='text' 
            name='firstName'
            value={ name.firstName } 
            onChange={(e) => setName({ ...name, firstName: e.target.value })} 
            placeholder='Juan Marie'
            required
          />
          <p>{ errors['firstName'] }</p>
        </div>
        <div>
          <label htmlFor='middleName'>Middle Name: </label>
          <input 
            type='text' 
            name='middleName'
            value={ name.middleName } 
            onChange={(e) => setName({ ...name, middleName: e.target.value })} 
          />
          <p>{ errors['middleName'] }</p>
        </div>
      </section>
    </>
  )
}

export default Name;