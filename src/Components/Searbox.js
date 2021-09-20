import React from 'react'

function Searbox(props) {
  const {searchText,setSearchText,getLocation}=props
  return (
    <div className="search-container">
    <input className="search-bar" type="text" placeholder="Please type a city..." value={searchText} onChange= {(e)=>setSearchText(e.target.value)} />
    <button onClick= {()=>getLocation()}>Search</button>
    </div>
  )
}

export default Searbox
