import express from "express";
import passport from "../middleware/passportMid.js";
import controller from "./controller.js";
const {Router}=express
export const loginRouter=Router();

loginRouter.get("/",controller.getLogin)

loginRouter.post("/", passport.authenticate('auth', { failureRedirect: 'login/error_login' }),controller.postLogin)

loginRouter.get("/error_login",controller.getErrorLogin)

loginRouter.get("/logout", controller.getLogout)