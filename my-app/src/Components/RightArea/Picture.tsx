import HousePic from '../../Assets/House.jpeg'
import './Picture.css'


export default function HousePicDecoration(){
    return(
        <img src={HousePic} alt='Houseimage' className='widg-pic'/>
    )
}