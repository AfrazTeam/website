import { dataTextGeneral } from '@/data/text'
import React from 'react'
import Image from 'next/image'
import { MaskHappy, NewTeamProject, TodoDone } from './icons'

const CounterProjects = () => {
  return (
    <div className="number-project-main my-6">
      <div className="number-projects satisfied-customers">
        <div className="flex items-center">
          <MaskHappy width="30" height="30" />
          <span className="numbers mr-3">
            {dataTextGeneral.SatisfiedCustomers}
          </span>
        </div>
        <span className="number-text">
          {dataTextGeneral.NumberSatisfiedCustomers}
        </span>
      </div>
      <div className="number-projects">
        <div className="flex items-center">
          <MaskHappy width="30" height="30" />
          <span className="numbers mr-3">
            {dataTextGeneral.inProgressProjects}
          </span>
        </div>
        <span className="number-text">
          {dataTextGeneral.NumberOngoinProjects}
        </span>
      </div>
      <div className="number-projects">
        <div className="flex items-center">
          <TodoDone width="30" height="30" />
          <span className="numbers mr-3">
            {dataTextGeneral.CompletedProjects}
          </span>
        </div>
        <span className="number-text">
          {dataTextGeneral.NumberCompletedProjects}
        </span>
      </div>
    </div>
  )
}

export default CounterProjects
