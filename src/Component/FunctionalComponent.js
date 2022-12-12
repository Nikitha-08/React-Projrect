import React from 'react'
function Hello(){
    return(
        <div>Welcome to my college</div>
    )
}
function World(){
    return(
        <div>
            <h1>Everyone</h1>
            <Hello/>
        </div>
    )

}
export default World
