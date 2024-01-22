import Cross from '../SVG/Cross';
import './DialogBox.scss';


const DialogBox = ({ onClose = () => null, onClick = () => null }) => {

    return <dialog open className='dialogContainer'>
        <div className='deleteContainer'>
            <div>Are you sure you want to delete?</div>
            <Cross onClick={onClose} />
        </div>

        <div className='buttonContainer'>
            <button className='btnCancel' onClick={onClose}>Cancel</button> <button onClick={onClick} className='btnDelete'>Delete</button>
        </div>
    </dialog>

}


export {
    DialogBox
}