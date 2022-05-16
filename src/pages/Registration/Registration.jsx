import AuthForm from "../../components/AuthForm/AuthForm";
import imgRegister from "../../assets/images/imgRegister.png";
import s from "./registration.module.scss";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
import "react-toastify/dist/ReactToastify.min.css";

const Registration = () => {
  return (
    <div className={s.registerBg}>
      <div className={sContainer.container}>
        <div className={s.mainPage}>
          <div className={s.left}>
            <div className={s.left__position}>
            <img src={imgRegister} alt="finance app" className={s.img} />
              <h1 className={s.title}>Finance App</h1>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.right__formbox}>
              <AuthForm type="signUp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
