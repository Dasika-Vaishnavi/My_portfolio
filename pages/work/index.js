import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from  "../../variants"

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
       <Circles />
       <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                  <motion.h2 
                  variants = {fadeIn('up', 0.2)}
                  initial = 'hidden'
                  animate = 'show'
                  className = 'h2 xl:mt-12'
                  exit = 'hiddem'
                  >  
                      My Work <span className='text-accent'>.</span>
                  </motion.h2>
                  <motion.p 
                  variants = {fadeIn('up', 0.4)}
                  initial = 'hidden'
                  animate = 'show'
                  exit = 'hiddem' 
                  className='mb-4 max-w-[400px] mx-auto lg:mx-0'
                  >
                      I specialize in creating custom web applications and websites that are not only visually stunning 
                      Here are some of the services I offer. YouI offer the following services. 
                  </motion.p>
              </div>
              <div 
                  variants = {fadeIn('down', 0.6)}
                  initial = 'hidden'
                  animate = 'show'
                  exit = 'hidden' 
                  className='w-full xl:max-w-[65%]'
                  >
                      <WorkSlider />
              </div>
          </div>
          <Bulb />
       </div>
    </div>)

}

export default Work
