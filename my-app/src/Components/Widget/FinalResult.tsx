import WrittingArea from '../LeftArea/Form';
import HousePicDecoration from '../RightArea/Picture';
import './FinalResult.css';

export default function Rsesult(){
    return(
        <div className='container'>
            <HousePicDecoration/>
            <WrittingArea/>
        </div>
    )
}