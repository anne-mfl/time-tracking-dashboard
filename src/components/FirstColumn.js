import React, { useState } from 'react'
import '../styles/FirstColumn.css'
import profileImage from '../images/image-jeremy.png'

function FirstColumn({ periodicity, setPeriodicity }) {

  return (
    <div className='fristColumn'>
      <section>
        <img src={profileImage} alt='profile image' />
        <div className='divForMobile'>
          <h2>Report for</h2>
          <h1>Jeremy<br className='brForDesktop'/>Robson</h1>
        </div>
      </section>

      <section>
        <p
          onClick={() => setPeriodicity('daily')}
          className={periodicity === 'daily' ? 'selected' : null}>Daily</p>

        <p
          onClick={() => setPeriodicity('weekly')}
          className={periodicity === 'weekly' ? 'selected' : null}>Weekly</p>
        <p
          onClick={() => setPeriodicity('monthly')}
          className={periodicity === 'monthly' ? 'selected' : null}>Montly</p>
      </section>
    </div>
  )
}

export default FirstColumn