import axiosInstance from "@/axios.js";

const URL = "/orden-transferencia";

const ordenTransferenciaService = {
  async getAllOrdenTransferencia() {
    try {
      console.log("servicio OrdenTransferencia");
      const response = await axiosInstance.get(URL, { withCredentials: true });
      console.log(response, "response");
      return response.data.message;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getOrdenTransferenciaById(ordenTransferenciaId) {
    try {
      const response = await axiosInstance.get(
        `${URL}/id/${ordenTransferenciaId}`,
        {
          withCredentials: true,
        }
      );
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getOrdenTransferenciaByUsuarioId(usuarioId) {
    try {
      const response = await axiosInstance.get(`${URL}/usuario/${usuarioId}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getOrdenTransferenciaByFechaTransferencia(fecha) {
    try {
      const response = await axiosInstance.get(`${URL}/fecha/${fecha}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async createOrdenTransferencia(ordenTransferencia, listaItems) {
    try {
      console.log("orden", ordenTransferencia, "items",listaItems)
      const { stockAreaIdOrigen, stockAreaIdDestino, motivo } = ordenTransferencia;
  
      const response = await axiosInstance.post(
        `${URL}`, 
        { stockAreaIdOrigen, stockAreaIdDestino, motivo, listaItems },
        { withCredentials: true }
      );
  
      return response.data.return;
    } catch (error) {
      console.error("Error al crear Orden de Transferencia:", error);
      throw new Error("No se pudo crear la Orden de Transferencia");
    }
  },
  

  async updateOrdenTransferencia(
    id,
    usuarioId,
    sku,
    cantidad,
    stockAreaIdOrigen,
    stockAreaIdDestino,
    motivo
  ) {
    try {
      const { data: ordenTransferenciaActualizado } = await axiosInstance.put(
        `${URL}/${id}`,
        {
          id,
          usuarioId,
          sku,
          cantidad,
          stockAreaIdOrigen,
          stockAreaIdDestino,
          motivo,
        },
        { withCredentials: true }
      );

      return ordenTransferenciaActualizado;
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  },

  async deleteOrdenTransferencia(id) {
    try {
      const { data: ordenTransferenciaEliminado } = await axiosInstance.delete(
        `${URL}/${id}`,
        { withCredentials: true }
      );
      return ordenTransferenciaEliminado;
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  },
};

export default ordenTransferenciaService;
