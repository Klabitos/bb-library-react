import './MainLayout.css'
import LateralLeftMenu from '../LateralLeftMenu/LateralLeftMenu'
import TopMenu from '../TopMenu/TopMenu'

export default function MainLayout({appContent = 'contenido de la App'}){
    return(
        <>
            <div className="headerMenu">
                <TopMenu></TopMenu>
            </div>
            <div className='filterMenu'>
                <LateralLeftMenu></LateralLeftMenu>
            </div>
            <div className='mainContent'> 
                {appContent} 
            </div>
        </>
    )
}