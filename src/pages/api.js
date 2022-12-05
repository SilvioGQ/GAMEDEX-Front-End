import axios from "axios";
//const BASE_API = "https://gamedex-api-teste.up.railway.app";
const BASE_API = "http://localhost:3001";

const token = localStorage.getItem('token')
export async function CreateUser(name,email, password) {
    try {
        const response = await axios.post(`${BASE_API}/users`, {
            name:name,
            email: email,
            password: password
        })
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function LoginUser(email, password) {
    try {
        const response = await axios.post(`${BASE_API}/users/auth`, {
            email: email,
            password: password
        })
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function GetUserById(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users/${id}`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function UpdateUser(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.put(`${BASE_API}/users/`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function DeleteUser(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.delete(`${BASE_API}/users/`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function GetUsers() {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users/`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function SearchUsers(id) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users/search`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function CreateGame(email, password) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.post(`${BASE_API}/games`, {
            email: email,
            password: password
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getGames(limit=10, offset=0) {
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/games?limit=${limit}&offset=${offset}`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function AddToCollection(id_game, evidence) {
    let formData = new FormData();
    formData.append("evidence_img", evidence);
    formData.append("id_game", id_game);

    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }

    try {
        const response = await axios.post(`${BASE_API}/collection`, formData, requestConfig)
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function GetCollection(limit=10, offset=0) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/collection?limit=${limit}&offset=${offset}`, requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function AddStar(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.post(`${BASE_API}/stars`, {
            id_collection: id
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function DelteStar(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.delete(`${BASE_API}/stars`, {
            id_collection: id
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}