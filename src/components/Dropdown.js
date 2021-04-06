import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // console.log(ref);

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return;
    //         }
    //         setOpen(false);
    //     };

    //     document.body.addEventListener('click', onBodyClick);

    // return () => {
    //     console.log('dead')
    //     console.log(onBodyClick)
    //     document.body.removeEventListener('click', onBodyClick);
    //     console.log('death')
    //     console.log(onBodyClick);
    // }

    // document.body.addEventListener('click', (event) => {
    //     //ref.current is <div> tag
    //     //event.target is when we click on swhere on the body
    //     if (ref.current.contains(event.target)) {
    //         return;
    //     }
    //     setOpen(false);
    // })
    // }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)
                }
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() =>
                    setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                    
                </div>
            </div>
            <div style={{color: `${selected.value}`}}>Demo color</div>
        </div>
    );
};

export default Dropdown; 