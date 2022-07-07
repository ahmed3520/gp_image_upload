import React from 'react'
import Nav from './Navbar/Nav';
const Parkinson = () => {
  return (
    <>
   <Nav/>
    <div className='con mt-32' >
        <div className='row-p flex' style={{flexDirection:'row'}}>
            <div className='le' style={{width:'30%'}}>
            <h5>
            </h5>
            </div>
            <div className='mid flex flex-col' style={{width:'38%'}} >
                <h1 className='pg-title'>
                What Is Parkinson's?
                </h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col' style={{padding:'0 0 20px 0'}}>
                        <img className='' src='/What_is_Parkinsons_0.jpg' alt='what is parkinson?'/>
                        <span >src: Parkinson foundation</span>
                    </div>
                    <div className='flex flex-col'>
                        <p>
                        <strong>Parkinson's disease (PD) is a&nbsp;neurodegenerative disorder that affects predominately dopamine-producing (“dopaminergic”) neurons in a specific area of the brain called substantia nigra.</strong>
                        </p>
                        <p>
                        Symptoms generally develop slowly over years. 
                        The progression of symptoms is often a bit different from one person to another due to the diversity of the disease.
                         People with PD may experience:
                        </p>
                        <ul>
                            <li>
                            Tremor, mainly at rest and described as pill rolling tremor in hands. Other forms of tremor are possible
                            </li>
                            <li>
                            Bradykinesia
                            </li>
                            <li>
                            Limb rigidity
                            </li>
                            <li>
                            Gait and balance problems
                            </li>
                        </ul>
                        <p>
                            The cause remains largely unknown. 
                            Although there is no cure, treatment options vary and include medications and surgery. While Parkinson’s itself is not fatal, disease complications can be serious. The Centers for Disease Control and Prevention (CDC) 
                            rated complications from PD as the 14th cause of death in the United States.
                        </p>
                        <div>
                            <p>
                                <strong>The first step to living well with Parkinson’s disease is to understand the disease and the progression:
                                </strong>
                            </p>
                      </div>
                      <p>
                        It is possible to have a good to great quality of life with PD. 
                        Working with your doctor and following recommended therapies are essential in successfully treating symptoms by using dopaminergic medications. People with PD need this medication because they have low levels or are missing dopamine&nbsp;in the brain,
                        mainly due to impairment of neurons in the substantia nigra.
                    </p>
                    <p>
                        Scientists are exploring ways to identify biomarkers for PD that can lead to earlier diagnosis and more 
                        tailored treatments to slow down the disease process. Currently,
                         all therapies used for PD improve symptoms without slowing or halting the disease progression.
                    </p>
                    <p>
                        In addition to movement-related (“motor”) symptoms, Parkinson’s symptoms may be unrelated to movement 
                        (“non-motor”).People with PD are often more impacted by their non-motor symptoms than motor symptoms. 
                        Examples of non-motor symptoms include: apathy, depression, constipation, 
                        sleep behavior disorders, loss of sense of smell and cognitive impairment.
                    </p>
                    <p>
                        In idiopathic Parkinson’s disease, progression tends to be slow and variable. 
                        Doctors often use the Hoehn and Yahr scale to gauge the progression of the disease over the years. The scale was originally implemented in 1967 and it included stages zero to five, where zero is no signs of Parkinson’s and five is advanced PD.
                        It was later changed to become the modified Hoehn and Yahr scale.
                    </p>
                    <p class="text-align-center">
                          <iframe 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="" frameborder="0" height="315" 
                        src="https://www.youtube.com/embed/nC3_7sbYIAQ" 
                        title="YouTube video player" width="560">
                        </iframe>                  
                    </p>
                    <p>
                        <em>
                        Page reviewed by Dr. Ahmad Elkouzi, Movement Disorders Fellow at the University of Florida, 
                        a Parkinson’s Foundation Center of Excellence.
                        </em>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Parkinson