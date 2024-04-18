function Contact({ contact, setContact, errors }) {

  return (
    <>
      <h3>Contact</h3>
      <section id='contact'>       
        <div id='address'>
          <label htmlFor='address' className='required'>Address: </label>
          <input 
            type='text' 
            name='address'
            value={ contact.address } 
            onChange={(e) => setContact({ ...contact, address: e.target.value })} 
            placeholder='Enter current address'
            required
          />
          <p>{ errors['address'] }</p>
        </div>
        <div>
          <label htmlFor='phoneNumber' className='required'>Phone Number: </label>
          <input 
            type='tel' 
            name='phoneNumber'
            value={ contact.phone } 
            onChange={(e) => setContact({ ...contact, phone: e.target.value })} 
            placeholder='000-000-0000 (Exclude country code)'
            required
          />
          <p>{ errors['phone'] }</p>
        </div>
        <div>
          <label htmlFor='emailAddress' className='required'>Email: </label>
          <input 
            type='email' 
            name='emailAddress'
            value={ contact.email } 
            onChange={(e) => setContact({ ...contact, email: e.target.value })} 
            placeholder='user@example.com'
            required
          />
          <p>{ errors['email'] }</p>
        </div>
      </section>
    </>
  )
}

export default Contact;