import express from "express"
import { newUser ,login, getMyProfile, logout, searchUser, sendFriendRequest, acceptFriendRequest, getMyNotifications, getMyFriends } from "../controllers/user.js";
import {singleAvatar}  from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { registerValidator, validateHandler,loginValidator, sendRequestValidator, acceptRequestValidator } from "../lib/validators.js";

const app=express.Router();


app.post("/new",singleAvatar,registerValidator(),validateHandler,newUser);

app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.post("/login",loginValidator(),validateHandler,login);
app.use(isAuthenticated);
app.get("/me",getMyProfile);
app.get("/logout",logout)
app.get("/search",searchUser);
app.put("/sendrequest",sendRequestValidator(),validateHandler,sendFriendRequest);
app.put("/acceptrequest",acceptRequestValidator(),validateHandler,acceptFriendRequest);
app.get("/notifications",getMyNotifications);
app.get("/friends",getMyFriends);




export default app;