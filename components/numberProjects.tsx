import { dataTextGeneral } from '@/data/text'
import React from 'react'

const NumberProjects = () => {
  return (
    <div className='number-project-main'>
      <div className='number-projects'>
        <span className='numbers'>{dataTextGeneral.NumberOngoinProjects}</span>
        <span className='number-text'>{dataTextGeneral.inProgressProjects}</span>
      </div>
      <div className='number-projects satisfied-customers'>
        <span className='numbers'>{dataTextGeneral.NumberSatisfiedCustomers}</span>
        <span className='number-text'>{dataTextGeneral.SatisfiedCustomers}</span>
      </div>
      <div className='number-projects'>
        <span className='numbers'>{dataTextGeneral.NumberCompletedProjects}</span>
        <span className='number-text'>{dataTextGeneral.CompletedProjects}</span>
      </div>
    </div>
  )
}

export default NumberProjects
