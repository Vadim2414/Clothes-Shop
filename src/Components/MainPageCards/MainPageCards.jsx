import './SpecialsOffers.css'
import { MainPageCardsImgURL } from '../VarList/VarList'

export function SpecialsOffers() {
    return (

        <div>
            <div>
                {MainPageCardsImgURL.map(ImgURL =>
                    <image src={ImgURL}></image>
                )}
            </div>
        </div>

    )
}