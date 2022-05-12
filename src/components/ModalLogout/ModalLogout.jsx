import s from "./ModalLogout.module.scss"; 
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { toggleModalLogout } from "redux/global/global-slice";
import { loggedOut } from 'redux/session/session-slice';

export default function ModalLogout() {
   const dispatch = useDispatch();
   const logOut = () => {
      dispatch(loggedOut());
   }

   const isCloseModal = () => {
      dispatch(toggleModalLogout());
   }
   return (
      <Modal closeModal={isCloseModal}>
         <div className={s.logout}>
            <h1 className={s.logout__title}> Are you sure you want to exit applications?</h1>
            <div className={s.wrapper}>
               <button className={s.wrapper__btn} type='button' onClick={logOut}>Yes</button>
               <button className={s.wrapper__btn} type='button' onClick={isCloseModal}>No</button>
         </div>
         </div>
      </Modal>
   )

};
