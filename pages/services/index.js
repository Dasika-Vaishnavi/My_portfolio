import {} from 'react-icons/rx'


export const serviceData = [

]


import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from  "../../variants"

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
       <Circles />
       <div className='container mx-auto'>
          <div>
              {/* text */}
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                  <h2 className='h2 xl:mt-8'>  
                      My Services <span className='text-accent'>.</span>
                  </h2>
                  <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                      I specialize in creating custom web applications and websites that are not only visually stunning 
                      Here are some of the services I offer. YouI offer the following services. Please feel free to 
                      I offer the following services. Please feel free to
                  </p>
                  <ServiceSlider />
              </div>
          </div>
          <Bulb />
       </div>
    </div>)

}

export default Services;
