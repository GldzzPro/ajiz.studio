import React from 'react'
import Box from '../components/box/Box'
import { colors, data } from '../constants'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
function project() {
  return (
    <DashboardWrapper>
        <DashboardWrapperMain>
        <div className="row ">
        <div className="col-12 ">
        <h1> pending projects</h1>
        <div className="row">
        
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-12 ">
        <div className="row">
        <Box><div className='summary-box'><h1> active projects</h1></div></Box>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-12 ">
        <div className="row">
        <Box><div className='summary-box'><h1>done projects</h1></div></Box>
        </div>
         </div>
         </div>
        </DashboardWrapperMain>
    </DashboardWrapper>
  )
}

export default project