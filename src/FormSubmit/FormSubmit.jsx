import { useEffect, useState } from 'react';
import './FormSubmit.scss';



const FormSubmit = ({ setUserName }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setUserName(searchValue)
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    }, [searchValue])

    return <div className='viewContainer'>
        <form className='formContainer'>
            <div className="formFieldContainer">
                <span>🔍</span>
                <input className='inputField' value={searchValue} type='text' placeholder="Search user" onChange={onChangeHandler} />

            </div>

        </form>

    </div>

}


export { FormSubmit }