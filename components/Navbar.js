import React, {useState,useEffect} from 'react'
import {useTheme} from 'next-themes'
import {MoonIcon,SunIcon} from '@heroicons/react/solid'


const Navbar = () => {
    const [selectNav,setSelectedNav] = useState('home')

    const {systemTheme,theme,setTheme} = useTheme();
    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark')
        {
            return(
                <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')}/>

            )

        }
        else
        {
            return(
            <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')}/>
            )
        }
    }
  return (
    <div>
        Navbar
        {renderThemeChanger()}
    </div>
  

  )
}

export default Navbar