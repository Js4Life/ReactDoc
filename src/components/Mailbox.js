import React from 'react'

export const MailBox = (props) => {
  console.log(props);
  const unreadMsg = props.unreadMsg;
  let count = 0
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMsg.length > 0 && <h2>
        you have {unreadMsg.length} unread messages
        </h2>}
        { count && <p>Messages : {count}</p>}
    </div>
  )
}
