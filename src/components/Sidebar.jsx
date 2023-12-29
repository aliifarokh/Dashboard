import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false) 
    }
  }

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md text-gray-700"
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (
          <>
            <div className='flex justify-between'>
              <Link to={`/`} onClick={handleCloseSidebar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware /> <span>Shoppy</span>
              </Link>
              <TooltipComponent content="menu" position='BottomCenter'>
                <button type='button' onClick={()=> setActiveMenu((prev)=>!prev)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className='mt-10'>
              {
                links.map((link)=>(
                  <div key={link.title} >
                    <p className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</p>
                    {
                      link.links.map((val)=>(
                        <NavLink to={`${val.name}`} key={val.name} onClick={handleCloseSidebar}

                        style={({isActive})=>({
                          backgroundColor : isActive ? currentColor : ""
                        })}

                        className={({isActive})=> isActive ? activeLink : normalLink}
                        >
                          {val.icon}
                          <span className='capitalize'>{val.name}</span>
                        </NavLink>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Sidebar