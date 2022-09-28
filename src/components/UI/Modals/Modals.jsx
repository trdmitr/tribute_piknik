import React from 'react';
import cl from './MyModal.module.css';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className ={cl.myModalContent}>
                {children}
            </div>
        </div>
        

    );
};

export default Modal;