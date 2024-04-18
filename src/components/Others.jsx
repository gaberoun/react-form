function Others({ others, setOthers, errors }) {

  return (
    <>
      <h3>Additional Info</h3>
      <section id='others'>
        <div>
          <label htmlFor='sex' className='required'>Sex: </label>
          <div id='sex' onChange={(e) => setOthers({ ...others, sex: e.target.value })}>
            <input type='radio' name='sex' value='Female'/> Female
            <input type='radio' name='sex' value='Male'/> Male
            <input type='radio' name='sex' value='Other'/> Other
          </div>
          <p>{ errors['sex'] }</p>
        </div>
        <div>
          <label htmlFor='birthdate' className='required'>Birthdate: </label>
          <input 
            type='date'
            name='birthdate'
            onChange={(e) => setOthers({ ...others, birthdate: e.target.value })} 
            required
          />
          <p>{ errors['birthdate'] }</p>
        </div>
      </section>
    </>
  )
}

export default Others;