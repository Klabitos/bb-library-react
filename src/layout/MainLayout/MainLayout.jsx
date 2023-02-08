import './MainLayout.css'
import LateralLeftMenu from '../LateralLeftMenu/LateralLeftMenu'

export default function MainLayout({appContent = 'contenido de la App'}){
    return(
        <>
            <div className="headerMenu">CABECERA</div>
            <div className='filterMenu'>
                <LateralLeftMenu></LateralLeftMenu>
            </div>
            <div className='mainContent'> 
                {appContent} 
            </div>
        </>
    )
}