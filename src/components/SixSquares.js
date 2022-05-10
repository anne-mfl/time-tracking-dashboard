import React from 'react'
import '../styles/SixSquares.css'
import ellipsisIcon from '../images/icon-ellipsis.svg'
import workIcon from '../images/icon-work.svg'
import exerciseIcon from '../images/icon-exercise.svg'
import studyIcon from '../images/icon-study.svg'
import socialIcon from '../images/icon-social.svg'
import playIcon from '../images/icon-play.svg'
import selfCareIcon from '../images/icon-self-care.svg'
import datas from '../data.json'

function SixSquares({ periodicity }) {

  return (
    <div className='sixSquaresWrapper'>

      {datas.map((data) =>
        <section
          style={{ background: `${data.frameColor}` }}
          key={data.title}
        >
          <div className='frame' >
            <img src={
              data.icon === 'workIcon' ? workIcon
                : data.icon === 'playIcon' ? playIcon
                  : data.icon === 'studyIcon' ? studyIcon
                    : data.icon === 'exerciseIcon' ? exerciseIcon
                      : data.icon === 'socialIcon' ? socialIcon
                        : data.icon === 'selfCareIcon' && selfCareIcon
            } alt='icon' />
          </div>
          <div className='content'>
            <div>
              <h2>{data.title}</h2>
              <img src={ellipsisIcon} alt='ellipsis icon' />
            </div>
            
            <div className='divForMobile2'>
              <h1>{periodicity === 'daily'
                ? `${data.timeframes.daily.current}`
                : periodicity === 'weekly'
                  ? `${data.timeframes.weekly.current}`
                  : periodicity === 'monthly'
                  && `${data.timeframes.monthly.current}`}
                hrs</h1>
              <p>{periodicity === 'daily'
                ? `Yesterday - ${data.timeframes.daily.previous}`
                : periodicity === 'weekly'
                  ? `Last Week - ${data.timeframes.weekly.previous}`
                  : periodicity === 'monthly'
                  && `Last Month - ${data.timeframes.monthly.previous}`}
                hrs</p>
            </div>
          </div>
        </section>
      )}


    </div>
  )
}

export default SixSquares