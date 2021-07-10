import React from "react"
import Avatar from "./avatarChild"
function formatDate(date) {
    return date.toLocaleDateString()
}

function CommentComponent(props) {

  console.log(props)
      return (
          <div className="comment">
            <div className="UserInfo">
                {/* <img className="Avatar"
                src={props.author.avatarUrl} 
                alt={props.author.name}
                /> */}
                <Avatar user={props.author} />
               
                <div>{props.text}</div>
                <div>{formatDate(props.date)}</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </div>

          </div>
      )
}

export default CommentComponent