import React, { useContext } from "react"
import { userContext } from "../advanced/UserContext"

export function HelloWorld()  {

        // const {user,setUser} = useContext(userContext)


        return (
          <div>
            Hello World 
            {/* <div>{JSON.stringify(user,null,2)}</div>
            <button onClick={async ()=>setUser('hey')}>Login</button> */}
          </div>
        )

}

