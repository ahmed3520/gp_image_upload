import React from 'react'
import Nav from './Navbar/Nav'
const Stat = () => {
  return (
    <>
   <Nav/>
    <div className='con mt-32' >
        <div className='row-p flex' style={{flexDirection:'row'}}>
            <div className='le' style={{width:'30%'}}>
           
            </div>
            <div className='mid flex flex-col' style={{width:'38%'}} >
                <h1 className='pg-title'>
                Statistics
                </h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col' style={{padding:'0 0 20px 0'}}>
                        <img className='' src='/stat.jpg' alt='what is parkinson?'/>
                        <span >src: Parkinson foundation</span>
                    </div>
                    <div className='flex flex-col'>
                      <h2>Who Has Parkinson's?</h2>
                      <ul>
                          <li>Nearly&nbsp;one million people in the U.S. are living with Parkinson's disease (PD), which is more than the combined number of people diagnosed with multiple sclerosis, muscular dystrophy and Lou Gehrig's disease (or Amyotrophic Lateral Sclerosis). This is expected to rise to 1.2 million by 2030.</li>
                          <li>Approximately 60,000 Americans are diagnosed with PD each year.</li>
                          <li>More than 10 million people worldwide are living with PD.</li>
                          <li>Incidence of Parkinson’s disease increases with age, but an estimated four percent of people with PD are diagnosed before age 50.</li>
                          <li>Men are 1.5 times more likely to have Parkinson's disease than women.</li>
                      </ul>

                      <h2>Estimated Healthcare Costs Related to PD in the U.S.</h2>
                      <p>The combined direct and indirect cost of Parkinson’s, 
                        including treatment, social security payments and lost income, is estimated to be nearly $52&nbsp;billion per year
                         in the United States alone.
                      </p>
                      <p>The combined direct and indirect cost of Parkinson’s,
                       including treatment, social security payments and lost income, 
                        is estimated to be nearly $52&nbsp;billion per year in the United States alone.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Stat