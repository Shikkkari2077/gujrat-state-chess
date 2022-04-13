import {React, useEffect} from 'react'

const Certificate = () => {
    var student = JSON.parse(localStorage.getItem('DATA'))

    useEffect(() => {
     window.print()
    }, [])
    
  return (
    <div className='Certificate'>
        <div className='download'>
            <img src="img/certificate.jpg" alt="" />
            <span className='name'>{student.Name}</span>
            <span className='state'>{student.Club}</span>
            <span className='score'>{student.Pts}</span>
            <span className='place'>{student.Rank}</span>
        </div>
    </div>
  )
}

export default Certificate