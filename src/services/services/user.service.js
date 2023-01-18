import { collection, getDocs, onSnapshot } from "firebase/firestore";
import firestoreDb from "../config/firebase.service";

const userCollection = collection(firestoreDb, 'users')

const getTopUser = async (setTopUsers, number) => {
    const NUMBER_USER = number
    try {
        const users = await getDocs(userCollection)
        const topUsers = users.docs.map(user => {
            if(user.data().email === 'admin@admin.com') {
                return user.totalScore = 0
            }
            return user.data()
        }).sort((a, b) => b.totalScore - a.totalScore).splice(0, NUMBER_USER)
        if(NUMBER_USER === 3){
            const arr = [topUsers[1], topUsers[0], topUsers[2]]
            return setTopUsers(arr);
        }else{
            setTopUsers(topUsers);
        }
    } catch (error) {
        throw new Error(error)
    }
}

export {
    getTopUser,
}