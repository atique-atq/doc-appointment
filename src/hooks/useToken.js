import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    console.log('Came in useToken hook. email valud is: ', email);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('appointmentToken', data.accessToken);
                        setToken(data.accessToken);
                        console.log('token is :', token);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;