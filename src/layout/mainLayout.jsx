import './MainLayout.css'

export default function MainLayout({appContent = 'contenido de la App'}){
    return(
        <>
            <div className="headerMenu">CABECERA</div>
            <div className='filterMenu'>FILTROS IZQUIERDA</div>
            <div className='mainContent'> {appContent} </div>
        </>
    )
}