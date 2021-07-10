
// import React, { useCallback , useState} from "react";
// import {debounce} from 'lodash'
// function Debonce() {
//   const [value,setValue] = useState('')
//   const [dbValue,saveToDb] = useState('')

//   const debouncedSave = useCallback( debounce( (nextVal)=>saveToDb(nextVal) ,1000), [] )

//   const handleChange = (event) => {
//     const nextValue = event.target.value
//     setValue(nextValue)
//     debouncedSave(nextValue)
//   }

//   return (
//     <main>
//       <h1>blog</h1>
//       <textarea
//       value={value}
//       onChange={handleChange}
//       rows={5}
//       cols={50}
//       />
//       <div>
//         <h2>
//           Edit client
//         </h2>
//         {value}
//       </div>
//       <div>SAVED db</div>
//       <h2>{dbValue}</h2>
//     </main>
//   )
// }

// export default Debonce