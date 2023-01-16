import { collection, getDocs, onSnapshot } from "firebase/firestore";
import firestoreDb from "../config/firebase.service";

const userCollection = collection(firestoreDb, 'users')

const getTopUser = async (setTopUsers) => {
    const NUMBER_USER = 5
    try {
        const users = await getDocs(userCollection)
        const topUsers = users.docs.map(user => {
            if(user.data().email === 'admin@admin.com') {
                return user.totalScore = 0
            }
            return user.data()
        }).sort((a, b) => b.totalScore - a.totalScore).splice(0, NUMBER_USER)
        console.log(topUsers);
        setTopUsers(topUsers);
    } catch (error) {
        throw new Error(error)
    }
}

const listenTopUser = async (setTopUsers) => {
    onSnapshot(userCollection, (snapshot) => {
        snapshot.docChanges().forEach(
          async (change) => {
            if(change.type === "modified"){
                getTopUser(setTopUsers)
            }
          },
          (error) => {
            throw new Error(error)
          }
        )
    })
}

export {
    getTopUser,
    listenTopUser,
}