import React from 'react';

const App = () => {
  return (
    <div>
      <form>
        <h1>Discount Code Combiner</h1>
        <p>Use this to combine your discount codes issued by LuluLime Pre-Loved</p>
        <input
          type='text'
          placeholder='Enter discount code'
        />
      </form>
      <button>
        Combine
      </button>
    </div>
  )
}

export default App;
