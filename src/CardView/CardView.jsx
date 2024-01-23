import { useState, useEffect } from "react"
import { DialogBox } from "../DialogeBox/DialogBox"

import Bin from "../SVG/Bin"
import Cross from "../SVG/Cross"
import DownArrow from "../SVG/DownArrow"
import EditIcon from "../SVG/EditIcon"
import Tick from "../SVG/Tick"

import './CardView.scss';

const AGE_LIMIT = 18;

const CardView = ({ data, setItems, currentAccordian, setCurrentAccordian }) => {

    const [state, setState] = useState(data);

    const { id,
        first,
        last,
        dob,
        gender,
      //  email,
        picture,
        country,
        description } = state


    const [isEdit, setIsEdit] = useState(false);

    const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);

    const isOpen = currentAccordian === id


    useEffect(() => {
        if (isDialogBoxOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'scroll';
    }, [isDialogBoxOpen]);





    const dateDiff = new Date().getFullYear() - new Date(dob).getFullYear();


    const toggleOpen = () => {

        setIsEdit(false)
        setCurrentAccordian(isOpen ? null : id)
    }

    const onSave = () => {

        setIsEdit(false);
        setItems(items => {
            const newItems = [...items];
            newItems[data.index] = state;

            return newItems
        })
    }

    const onCancel = () => {
        setState({ ...data })
        setIsEdit(false)
    }

    const onEdit = () => {
        setIsEdit(true)
    }

    const toggleDialogBox = () => {
        setIsDialogBoxOpen(!isDialogBoxOpen)
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target

        setState((state) => ({ ...state, [name]: value }))
    }

    const onDelete = () => {

        setItems(items => {
            const newItems = [...items];
            const filterNewItems = newItems.filter((item) => item.id !== id);

            return filterNewItems
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSave();
    }

    return <>
        {isDialogBoxOpen && <DialogBox onClick={onDelete} onClose={toggleDialogBox} />}

        <div className='itemContainer' key={id}>
            <form onSubmit={onSubmitHandler}>
                <div className='itemHeader'>
                    <img alt ={first}className='imgContainer' src={picture} />
                    <div className='itemName' >
                        <input required className="inputFieldForm" placeholder="first name" name="first" readOnly={!isEdit} type='text' size='5' value={first} onChange={onChangeHandler} />

                        <input required className="inputFieldForm" placeholder="last name" name="last" readOnly={!isEdit} type='text' size='5' value={last} onChange={onChangeHandler} />
                    </div>
                    <div className={isOpen ? "downArrowSvg" : ""}><DownArrow onClick={toggleOpen} /></div>
                </div>


                {isOpen && <>

                    <div className='itemInfo'>
                        <div><div className='header'>Age</div>
                            {isEdit && dateDiff > AGE_LIMIT ? <input type='date' required name='dob' onChange={onChangeHandler} value={dob} /> : <div>{dateDiff} years</div>}
                        </div>
                        <div><div className='header'>Gender</div>
                            <div>{isEdit ?
                                <select required name='gender' onChange={onChangeHandler} >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Rather not say">Rather not say</option>
                                    <option value="Other">Other</option>

                                </select> : gender}</div></div>
                        <div>
                            <div className='header'>Country</div>
                            <input className="countryField" pattern="^([^0-9]*)$" placeholder="country" required name="country" readOnly={!isEdit} type='text' value={country} onChange={onChangeHandler} />

                        </div>

                    </div>

                    <div className='description'>
                        <div className='header'>Description</div>

                        <textarea value={description} required readOnly={!isEdit} className='descriptionField' name='description' rows="4" cols="43" onChange={onChangeHandler} />

                    </div>

                    <div className='svgContainer'>
                        {isEdit ? <> <button className='submitBtn' type="submit"><Tick /></button> <Cross onClick={onCancel} /></> : <> <EditIcon onClick={onEdit} /> <Bin onClick={toggleDialogBox} /></>}

                    </div>
                </>}


            </form>


        </div>
    </>

}


export {
    CardView
}