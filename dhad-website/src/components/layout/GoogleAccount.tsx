import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleAccount=()=>{

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        const decodedToken = jwtDecode(credentialResponse.credential!);
        console.log(decodedToken);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleAccount;