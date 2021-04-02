import axios from 'axios'
const ADMINS_REST_API_URL = "https://cba.rao.life/api/v1/admin/getAllAdmins"
class AdminService{

    getAdmins(){
        return axios.get(ADMINS_REST_API_URL);
    }

}

export default new AdminService();
