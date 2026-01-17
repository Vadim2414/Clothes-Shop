import './SpecialsOffers.css'
import { specialsOffersImgURL } from '../VarList/VarList'

export function SpecialsOffers() {
    return (

        <div>
            {specialsOffersImgURL.map(ImgURL =>
                <image src={ImgURL}></image>
            )}
        </div>

    )
}