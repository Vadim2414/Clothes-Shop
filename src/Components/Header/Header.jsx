import './Header.css'

export function Header({ userCity }) {
    return(

        <header>
            
            <button className='header-city-button'>
                {userCity}
            </button>

            <div>
                {/* Maybe here will be filter search*/}
            </div>

            <div>
                {/* Maybe here will be user profile*/}
            </div>

        </header>

    )
}