import Link from 'next/link';

import { RiYoutubeLine, RiInstagramLine, RiTwitterXLine, RiGithubLine, RiDiscordLine,} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
        <Link href={'https://www.youtube.com/@asymmetricme/'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
            <RiYoutubeLine />
        </Link>
        <Link href={'https://www.instagram.com/me.asymmetric/'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
            <RiInstagramLine />
        </Link>
        <Link href={'https://twitter.com/asymmetricme'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
            <RiTwitterXLine />
        </Link>
        <Link href={''} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
            <RiGithubLine />
        </Link>
        <Link href={'https://discord.gg/A4gGmSUS'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
            <RiDiscordLine />
        </Link>
    </div> 
  )
}

export default Socials;
