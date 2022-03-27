import React, { useState } from 'react';

const App = () => {
  const [fields, setFields] = useState([{value: null}]);

  function handleChange (index, event) {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);
  }

  function handleAdd () {
    const values = [...fields];
    values.push({value: null})
    setFields(values)
  }

  return (
    <div>
      <form>
        <h1>Discount Code Combiner</h1>
        <p>Use this to combine your discount codes issued by LuluLime Pre-Loved</p>

        {fields.map((field, index) => {
          return (
            <input
              type='text'
              placeholder='Enter discount code'
              value={field.value || ''}
              onChange={e => handleChange(index, e)}
            />
          )
        })}

        <button type='button' onClick={() => handleAdd()}>
          Add another code
        </button>
      </form>
    </div>
  )
}

export default App;
