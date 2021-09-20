import React from 'react'

function Results(props) {
  const {weather}=props

  const padNum= (num ) => {
    const stringNum=num + "";
    const stringLen=stringNum.length;

    if(stringLen===1) {
      return "0" + stringNum;
    }else {
      return stringNum;
    }
  }
  return (
    <div className="main">
        {!!weather && weather.map((item,index) => {
      return (//dont forget to return it//
  <div> 
      <div key= {index} className="box"  >
         <p>{item.Date= new Date ().toLocaleDateString("en-US")}</p>
         <p>Maximum: {Math.round((item.Temperature.Maximum.Value-32)*5/9)}°C</p>
         <p>Minimum:{Math.round((item.Temperature.Minimum.Value-32)*5/9)}°C</p>
         <img src= {`https://developer.accuweather.com/sites/default/files/${padNum(item.Day.Icon)}-s.png`} alt="images"></img>
         <p>{item.Night.IconPhrase}</p>
      </div>

  </div>)
    })
    
}
    </div>
  )
}

export default Results
