import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginEmailScreen from "./screens/LoginEmailScreen";
import JoinMembershipScreen from "./screens/JoinMembershipScreen";
import AddProductScreen from "./screens/AddProductScreen";
import ProfileModification from "./screens/ProfileModification";
import AddPostScreen from "./screens/AddPostScreen";
import CommentScreen from "./screens/CommentScreen";


const App = () => {
  return (
    <Router>
      <main>
        <Route path="/login" component={LoginEmailScreen} exact />
        <Route path="/join/email" component={JoinMembershipScreen} exact />
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/product" component={AddProductScreen} exact />
        <Route path="/user" component={ProfileModification} exact />
        <Route path="/post" component={AddPostScreen} exact />
        <Route path="/post/comment" component={CommentScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
