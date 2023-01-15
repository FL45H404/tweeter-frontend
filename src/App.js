import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmailVerify from './component/Authentication/EmailVerify/emailVerify';
import ForgotPwd from './component/Authentication/ForgotPassword/forgotPwd';
import Login from './component/Authentication/Login/login';
import AuthOtp from './component/Authentication/OTP/otp';
import ResetPwd from './component/Authentication/ResetPassword/resetPwd';
import SignUp from './component/Authentication/SignUp/signUp';
import Error from './component/Assets/Error404/Error';
import SignUpTwo from './component/Authentication/SignUpTwo/SignUpTwo';
import Sidebar from './component/Sidebar/SideBar';
import HomePage from './component/Home Page/homePage';
import CreateTweet from './component/Home Page/createTweet';
import EmojiPicker from 'emoji-picker-react';
import Bookmarks from './component/Bookmarks/bookmarks';
import ProfilePage from './component/Profile/profilePage';
import EditProfile from './component/Profile/EditProfile';
import LogOut from './component/logOut/logOut';
import Google from "./component/Google"
import TagTweets from './component/Sidebar/TagTweets';
import OneTweet from './component/Reply/OneTweet';
import GoogleSignin from './component/Authentication/GoogleSign/GoogleSignIn';
import Counter from './component/counter';
import Messages1 from './component/Messages/Messages1';

function App() {
  return <>
  {/* <Counter /> */}
    <BrowserRouter>
      <Routes>
      <Route path="/messages" element={<Messages1 />} />
        <Route path="/profile/:apiname" element={<ProfilePage />} />
         <Route path="/toTweet/:TweetId" element={<OneTweet />} />
        <Route path="/tagtweet" exact element={<TagTweets />} />
        <Route path="/google" element={<Google />} />
        <Route path="/logout" exact element={<LogOut />} />
        <Route path="/editprofile" exact element={<EditProfile />} />
        <Route path="/bookmark" exact element={<Bookmarks />} />
        <Route path="/createtweet" exact element={<CreateTweet />} />
        <Route path="/sidebar" exact element={<Sidebar />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/" exact element={<Login />} />
        <Route exact path="/fgtpwd" element={<ForgotPwd />} />
        <Route exact path="/otp" element={<AuthOtp />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/verifyemail" element={<EmailVerify />} />
        <Route exact path="/reset" element={<ResetPwd />} />
        <Route exact path="/signuptwo" element={<SignUpTwo />} />
        <Route exact path="/googlesign" element={<GoogleSignin />} />
        <Route exact path="/emojipicker" element={<EmojiPicker />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
