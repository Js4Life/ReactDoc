import React from 'react'

function Avatar(props) {
  console.log('avatar child',props)
  return (
    <div>
      <div>
        <div>Avatar as User Props child split component</div>
        <img className="Avatar" 
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
         <div>{props.user.name}</div>
      </div>
    </div>
  )
}


export default Avatar
