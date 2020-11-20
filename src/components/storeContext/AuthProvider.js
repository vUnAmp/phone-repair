import React, { useState, useEffect } from 'react';

import firebase from '../../firebase/admin';
const authStore = {
  //   user: null,
  authenticated: false,
  loadingAuthState: true,
};
export const AuthContext = React.createContext(authStore);

// const AuthProvider = ({ children }) => {
//   //   const [user, setUser] = useState(null);
//   const [loadingAuthState, setLoadingAuthState] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     console.log('checking authenticated');
//     firebase.auth().onAuthStateChanged((user) => {
//       setLoadingAuthState(false);
//       setAuthenticated(true);
//     });
//   });

//   return (
//     <AuthContext.Provider
//       value={{
//         authenticated,
//         loadingAuthState,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
