import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "72b8ce54-50c4-49b5-8d83-711364fc3863"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)

    },
    follow(id) {
       return instance.post(`follow/${id}`,{})
    },
    getProfile(userId){
        console.warn('Deprecated method. Use same method from ProfileAPI!');
        return ProfileAPI.getProfile(userId);
    }
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
      return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status){
      return instance.put(`/profile/status`, {status: status})
    }
}

export const AuthAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
