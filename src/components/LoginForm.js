import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8TUjBz-M26dJ0cD15yJQGspHbnUiuu-Y",
  authDomain: "final-project-everglades.firebaseapp.com",
  projectId: "final-project-everglades",
  storageBucket: "final-project-everglades.appspot.com",
  messagingSenderId: "538342141788",
  appId: "1:538342141788:web:def2914bf4e3d986c85b99"
};

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    // const [user, setUser] = useState({
    //   email,
    //   password,
    // })

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)



    const handleLogin = async () => {
    // const auth = await connectAuth();
    const user = await signInWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/'))
    .catch(
      (err) => alert(err.message)
    );
    // if (user) {
    //   console.log(user.user);
    //   setIsLoggedIn(true);
    // }
  };


  return (

    
  
  <Container className='formContain' style={{width: '35%',borderRadius: '5px', boxShadow: '5px 5px 5px lightGray' }}   >
  
    <Form  style={{margin: '14rem 0 14rem 0' }}   onSubmit={handleLogin} >  
      <Form.Group className="mb-3" controlId="formBasicEmail">  
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
         Must be valid email from Florida Department of Environmental Protection
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className='mb-3' style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="primary" type="submit" style={{margin: '0 0 8rem 0'}}>
        Submit
      </Button>
      </Form.Group>
    </Form>
    </Container>
  );

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // (
  //   <Container className="formContain"  style={{width: '35%',borderRadius: '5px', boxShadow: '5px 5px 5px lightGray' }}  >
  //   <Form  style={{margin: '2rem 0 2rem 0' }}>
  //     <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Label>Email address</Form.Label>
  //       <Form.Control type="email" placeholder="Enter email" />
  //       <Form.Text className="text-muted">
  //        Must be valid email from Florida Department of Environmental Protection
  //       </Form.Text>
  //     </Form.Group>

  //     <Form.Group className="mb-3" controlId="formBasicPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control type="password" placeholder="Password" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
  //     </Form.Group>
  //     <Button variant="primary" type="submit" style={{margin: '0 0 1rem 0'}}>
  //       Submit
  //     </Button >
  //   </Form>
  //   </Container>
  // );
}

export default LoginForm;












// function LoginForm({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const connectAuth = async () => {
//     // connect to firebase project
//     const app = initializeApp(firebaseConfig);
//     // connect to Auth
//     return getAuth(app);
//   };

 

//   const handleGoogleLogin = async () => {
//     const auth = await connectAuth();
//     const provider = new GoogleAuthProvider();
//     const user = await signInWithPopup(auth, provider)
//         .catch(err => alert(err.message ))
//     if(user) {
//         console.log(user.user)
//         setIsLoggedIn(true)
//     }        
//   };

//   const handleSignUp = async () => {
//     const auth = await connectAuth();
//     // send email and password to firebase auth
//     const user = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     ).catch((err) => alert(err.message));
//     // if all ok..
//     if (user) {
//       console.log(user);
//       setIsLoggedIn(true);
//     }
//     // if error

//     // popup error
//   };

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <label htmlFor="email">
//         Email:
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           name="email"
//           type="email"
//         />
//       </label>
//       <br />
//       <label htmlFor="password">
//         Password:
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           name="password"
//           type="password"
//         />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>&nbsp;
//       <button onClick={handleSignUp}>Sign Up</button>
//       <br />
//       <button onClick={handleGoogleLogin}>Login with Google</button>
//     </form>
//   );
// }

// export default LoginForm;