import { useEffect, useState } from 'react';
const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const signInWithGoogle = () => {
        console.log('signing in Soon')
    }

    return { user, signInWithGoogle };
}

export default useFirebase;