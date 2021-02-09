import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

import ItemModal from "./ItemModal";

const RestaurantMenu = ({match}) => {
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return(<div>
        <div onClick={handleOpen}>Restaurant menu</div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <ItemModal />
        </Modal>
    </div>
    )
}

export default RestaurantMenu;