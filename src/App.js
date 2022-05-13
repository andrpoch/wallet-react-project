// import React, { useEffect } from "react";
// import PublicRoute from "components/PublicRoute/PublicRoute";
// import Registration from "pages/Registration/Registration";
// import PrivateRoute from "components/PrivateRoute/PrivateRoute";
// import Login from "pages/Login/Login";
// import Dashboard from "pages/Dashboard";
// import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

// import { refresh } from "redux/session/auth-operation";
// import { useDispatch } from "react-redux";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refresh());
//   }, [dispatch]);

//   return (
//     <div>
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <PublicRoute restricted>
//               <Login />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/signUp"
//           element={
//             <PublicRoute restricted>
//               <Registration />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// }

// export default App;
import { useDispatch, useSelector } from "react-redux";

//////////////////////////
import  globalSelectors  from 'redux/global/global-selectors';
import ButtonAddTransactions from "components/ButtonAddTransactions";
import ModalAddTransaction from "components/ModalAddTransaction";
//////////////////////////

function App() {

  ///////////////////////////////
  const showModal = useSelector(globalSelectors.getIsModalAddTransaction)
  ///////////////////////////////


  return (
    <div>
        <ButtonAddTransactions />
   {showModal && <ModalAddTransaction />}
    </div>
  );
}

export default App;