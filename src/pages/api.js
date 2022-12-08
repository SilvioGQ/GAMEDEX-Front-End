import axios from "axios";

//const BASE_API = "https://gamedex-api-teste.up.railway.app";
const BASE_API = "http://localhost:3001";


export async function CreateUser(name,email,password,img) {
    try {
        let formData = new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("password",password);
        if(img) formData.append("img",img);
        const response = await axios.post(`${BASE_API}/users`,formData)
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
    const token = localStorage.getItem('token')
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

export async function UpdateUser(file,name,password) {
    const token = localStorage.getItem('token')
    let formData = new FormData();
    if(file)formData.append("img", file);
    if(name) formData.append("name", name);
    if(password) formData.append("password", password);
    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }
    try {
        const response = await axios.put(`${BASE_API}/users/`, formData, requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}


export async function DeleteUser(id) {
    const token = localStorage.getItem('token')
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

export async function GetUsers(limit=10,offset=0,search) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/users?limit=${limit}&offset=${offset}${search ? '&search='+search : ''}`,requestConfig) 
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function SearchUsers(id) {
    const token = localStorage.getItem('token')
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

export async function CreateGame({ name, publisher, genres, img}) {
    const token = localStorage.getItem('token')
    let formData = new FormData();
    formData.append("name", name);
    formData.append("publisher", publisher);
    formData.append("genre", genres);
    formData.append("game_img", img);

    const requestConfig = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        }
    }

    try {
        const response = await axios.post(`${BASE_API}/games`, formData, requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getGames(limit=10, offset=0, search=null) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/games?limit=${limit}&offset=${offset}${search && "&search="+search}`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function AddToCollection(id_game, evidence) {
    const token = localStorage.getItem('token')
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

export async function GetCollection(limit=10, offset=0, id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        if(id){
            const response = await axios.get(`${BASE_API}/collection?limit=${limit}&offset=${offset}&id=${id}`, requestConfig)            
            return response.data;
        }else {
            const response = await axios.get(`${BASE_API}/collection?limit=${limit}&offset=${offset}`, requestConfig)
            return response.data;
        }
    } catch (error) {
        return null;
    }
}

export async function DeleteItem(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };

    try {
        const response = await axios.delete(`${BASE_API}/collection/${id}/delete`, requestConfig)
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

export async function DeleteStar(id) {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.post(`${BASE_API}/stars/delete`, {
            id_collection: id
        },requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function MostStaredItens() {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/more-stared-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function MostPossesedItens() {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/more-possesed-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function MostUsersItens() {
    const token = localStorage.getItem('token')
    const requestConfig = {
        headers: {
            authorization: token,
        },
    };
    try {
        const response = await axios.get(`${BASE_API}/stats/users-most-items`,requestConfig)
        return response.data;
    } catch (error) {
        return null;
    }
}
