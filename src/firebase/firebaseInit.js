import firebaseApp from 'firebase/app'
import firebaseConfig from './firebaseConfig'

const firebase = firebaseApp.initializeApp(firebaseConfig);

export default firebase