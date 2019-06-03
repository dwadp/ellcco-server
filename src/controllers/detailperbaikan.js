import DetailPerbaikanService from "../services/detailperbaikan";

class DetailPerbaikanController {
  static async store(req, res) {
    try {
      const detail = await DetailPerbaikanService.store(req.body);

      return res.json(detail);
    } catch (error) {
      throw error;
    }
  }

  static async list(req, res) {
    try {
      const response = await DetailPerbaikanController.list(req.params.id_pemesanan);

      return res.json(response);
    } catch (error) {
      throw error;
    }
  }
}

export default DetailPerbaikanController;