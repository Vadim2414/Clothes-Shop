import './MainPageCards.css'
import { MainPageCardVars } from '../VarList/VarList'

export function MainPageCards() {
    return (

        <div className='container-product-card'>
            {MainPageCardVars.map(Product =>
                <div className='product-card'>

                    <img src={Product.ImgURL} />

                    <div className='card-name-price'>

                        <div className='card-name'>{Product.Name}</div>
                        <div className='card-price'>{Product.Price}</div>

                    </div>

                    <button>
                        В корзину
                    </button>

                </div>
            )}
        </div>

    )
}