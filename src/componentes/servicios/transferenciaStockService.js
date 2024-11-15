import axiosInstance from "@/axios.js";

const URL = "/transferencia-stock";

const transferenciaStockService = {
  async getAllTransferenciaStock() {
    try {
      const response = await axiosInstance.get(URL, { withCredentials: true });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getTransferenciasStockByOrdenId(ordenTransferenciaId) {
    try {
      const response = await axiosInstance.get(`${URL}/orden/${ordenTransferenciaId}`, {
        withCredentials: true,
      });
      return response.data.message;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getTransferenciasStockBySku(sku) {
    try {
      const response = await axiosInstance.get(`${URL}/sku/${sku}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getTransferenciaStockById(dni) {
    try {
      const response = await axiosInstance.get(`${URL}/id/${dni}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getTransferenciasStockByStockAreaIdOrigen(stockAreaIdOrigen) {
    try {
      const response = await axiosInstance.get(`${URL}/origen/${stockAreaIdOrigen}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async getTransferenciasStockByStockAreaIdDestino(stockAreaIdDestino) {
    try {
      const response = await axiosInstance.get(`${URL}/destino/${stockAreaIdDestino}`, {
        withCredentials: true,
      });
      return response.data.return;
    } catch (error) {
      console.error("Error al obtener TransferenciaStock:", error);
      return [];
    }
  },

  async updateTransferenciaStock(id,
    sku,
    cantidad,
    stockAreaIdOrigen,
    stockAreaIdDestino,
    motivo,
    ordenTransferenciaId) {
    try {
      const { data: transferenciaStockActualizado } = await axiosInstance.put(
        `${URL}/${id}`,
        { id,
            sku,
            cantidad,
            stockAreaIdOrigen,
            stockAreaIdDestino,
            motivo,
            ordenTransferenciaId },
        { withCredentials: true }
      );
      return transferenciaStockActualizado;
    } catch (error) {
      console.error("Error al actualizar el usuariola transferencia:", error);
      throw error;
    }
  },

  async deleteTransferenciaStock(id) {
    try {
      const { data: transferenciaStockEliminado } = await axiosInstance.delete(
        `${URL}/${id}`,
        { withCredentials: true }
      );
      return transferenciaStockEliminado;
    } catch (error) {
      console.error("Error al eliminar la transferencia:", error);
      throw error;
    }
  },
};

export default transferenciaStockService;
