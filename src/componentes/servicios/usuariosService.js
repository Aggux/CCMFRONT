import axiosInstance from "@/axios.js";

const URL = "/user";

const usuariosService = {

  async getAllUsuarios() {
    try {
      const response = await axiosInstance.get(URL, { withCredentials: true });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener Users:", error);
      return [];
    }
  },

  async getUsuarioById(id) {
    try {
      const response = await axiosInstance.get(`${URL}/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el User id: ${id} `, error);
      throw error;
    }
  },

  async getUsuarioByCuil(sku) {
    try {
      const response = await axiosInstance.get(`${URL}/User/${sku}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el User con sku: ${sku} `, error);
      throw error;
    }
  },

  async createUsuario(cuil, password, fullName, stockAreaId) {
    try {
      console.log("AntescrearUserPostResponse")
      const response = await axiosInstance.post(`${URL}`, { cuil, password, fullName, stockAreaId }, { withCredentials: true });
      console.log("DespcrearUserPostResponse", response.data.return)
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener Users:", error);
      return [];
    }
  },

  async updateUsuario(id, cuil, password, fullName, stockAreaId) {
    try {
      console.log("AntesUpdateUserPutResponse")
      const { data: usuarioActualizado } = await axiosInstance.put(`${URL}/${id}`, { cuil, password, fullName, stockAreaId }, { withCredentials: true });
      console.log("DespuesUserPuttResponse")
      return usuarioActualizado;
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  },

  async deleteUsuario(id) {
    try {
      console.log("antesDeleteUser", id)
      const { data: usuerioEliminado } = await axiosInstance.delete(`${URL}/${id}`, { withCredentials: true });
      return usuerioEliminado;
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  },

  async updatePassword(id, currentPassword, newPassword) {
    try {

      const response = await axiosInstance.put(`${URL}/update-password/${id}`, { currentPassword, newPassword }, { withCredentials: true })
      return response
    }
    catch (error) {
      throw error.response.data.message
    }
  }
}

export default usuariosService;




