import firebase from 'firebase'
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyAZktnrCR5iZheQ2_jwdEOB9ckKrPMvQ6A",
    authDomain: "cv-login-40804.firebaseapp.com",
    projectId: "cv-login-40804",
    storageBucket: "cv-login-40804.appspot.com",
    messagingSenderId: "928497785617",
    appId: "1:928497785617:web:f69298fce533355c3b8ab0"

}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string){

    const email = `${username}@google.com`
    
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
   
}

export async function registerUser(username: string, password: string){
    const email = `${username}@google.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error){
        toast(error.message)
        return false
    }
}

export function logoutUser() {
    return firebase.auth().signOut()
}