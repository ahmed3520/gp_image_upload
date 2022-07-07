import React from 'react'
import Nav from './Navbar/Nav'
const Causes = () => {
  return (
    <>
   <Nav/>
    <div className='con mt-32' >
        <div className='row-p flex' style={{flexDirection:'row'}}>
            <div className='le' style={{width:'30%'}}>
        
            </div>
            <div className='mid flex flex-col' style={{width:'38%'}} >
                <h1 className='pg-title'> 
                    Causes
                </h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col' style={{padding:'0 0 20px 0'}}>
                        <img className='' src='/neurons.jpg' alt='what is parkinson?'/>
                        <span >src: Parkinson foundation</span>
                    </div>
                    <div className='flex flex-col'>
                    <p>Scientists believe a combination of genetic and environmental factors are the 
                        <b>cause of Parkinson’s disease</b>&nbsp;(PD).
                         PD is an extremely diverse disorder. While no two people experience Parkinson’s
                          the same way, there are some commonalities. PD affects about one million people 
                          in the United States and ten million worldwide. The main finding in brains of
                           people with PD is loss of dopaminergic neurons in the area of the brain known as 
                           the&nbsp;<i>substantia nigra</i>.
                    </p>
                    <h2>
                    Genetics
                    </h2>

                    <p>Genetics cause about 10 to 15 percent of all Parkinson's. 
                        Over the years, scientists have studied DNA from people with Parkinson's, 
                        comparing their genes. They discovered dozens of
                         <a href="https://www.parkinson.org/understanding-parkinsons/causes/genetics/common-genetic-mutations">
                            gene mutations</a> 
                            linked to Parkinson's.
                             <a href="https://www.parkinson.org/understanding-parkinsons/causes/genetics">Read more about how 
                             genetics affects PD.
                             </a>
                    </p>
                    <p>
                    <a href="https://www.parkinson.org/PDGENEration">PD GENEration: Mapping the Future of Parkinson’s Disease</a>
                        , is a first-of-its-kind national initiative that offers free&nbsp;<a href="https://www.parkinson.org/understanding-parkinsons/causes/genetics/genetic-testing?_ga=2.189226984.2136260882.1550007845-1534676308.1547217604&amp;_gac=1.53452506.1550007845.Cj0KCQiA-onjBRDSARIsAEZXcKb9XXXhW-85Sa8MkhmRtzfMGhpsEF27_AeIn4w0I1n69rTK8wCZTa4aAulhEALw_wcB"><b>genetic testing</b></a>&nbsp;for clinically relevant Parkinson's-related genes and free&nbsp;<a href="https://www.parkinson.org/understanding-parkinsons/causes/genetics/genetic-counseling"><b>genetic counseling</b></a>&nbsp;to help participants better understand their results.
                     <a href="https://www.parkinson.org/PDGENEration">Learn more about PDGENEration.
                     </a>
                     </p>
                     <h2>Environmental Factors</h2>

                     <p>The interactions between genes and the environment can be quite complex. 
                        Some environmental exposures may lower the risk of PD, while others may increase it.
                         Environmental risk factors associated with PD include head injury, area of residence, 
                         exposure to pesticides and more. 
                         <a href="https://www.parkinson.org/Understanding-Parkinsons/Causes/Environmental-Factors">
                        Learn how environmental factors play a role in PD.
                        </a>
                        </p>
                        <p>Parkinson's is caused by a combination of genes,
                             environmental and lifestyle influences.
                             The interaction of all three components determines if someone will develop Parkinson's.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Causes