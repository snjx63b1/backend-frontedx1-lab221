import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  const btnStyle = {
    padding: '10px 15px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    color: '#ffffff',
    backgroundColor: '#08baf2' // Default color for decrement
  };

  return (
    <>
      <div style = {{ 
        textAlign: 'center',
        marginTop:'30px',
        padding:'20px',
        border:'1px solid #cccccc',
        borderRadius:'8px' 
        }}>

          <h2> Counter </h2>
          <h3 style = {{
            fontSize:'26px'
          }}> {count} </h3>
          <button onClick={() => setCount(count-1)} 
          style={btnStyle}> - Decrement </button>
          <button onClick={() => setCount(0)} 
          style={{
            ...btnStyle, 
            backgroundColor:'#4d4d52'
          }}> Reset </button>

          <button onClick={() => setCount(count+1)} 
          style={{
            ...btnStyle, 
            backgroundColor:'#4ba566'
          }}> Increment </button>
      </div>
    </>
  )
}

export default Counter;