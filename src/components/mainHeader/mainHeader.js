import "./mainHeader.scss"

export function MainHeader() {
    return(
        <div className="main-header">
            <h1 className="main-header-title">Jaegar Resto
                <p className="main-header-text" >Tuesday, 2 Feb 2021</p>
            </h1>
            <form className="main-form" autoComplete="off">
                <input className="main-search-inp" type="search" placeholder="Search for food, coffe, etc.."/>
            </form>
        </div>
    )
}