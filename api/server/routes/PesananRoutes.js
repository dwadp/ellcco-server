import { Router } from 'express';
import PesananController from '../controllers/PesananController';
import { AuthorizationMiddleware, PenggunaMiddleware } from '../middlewares';
import { PesanValidator, TerimaValidator } from '../validators/pesanan';

const router = Router();

router.post('/pesan', [
  AuthorizationMiddleware.isAuthenticated,
  PenggunaMiddleware.isPelanggan,
  PesanValidator.validate()
], PesananController.pesan);
router.post('/terima', [
  AuthorizationMiddleware.isAuthenticated,
  PenggunaMiddleware.isTukang,
  TerimaValidator.validate()
], PesananController.terima);

router.get('/histori/:pengguna/:id_pengguna', [
  AuthorizationMiddleware.isAuthenticated
] , PesananController.histori);

router.get('/detail/:id_pesanan/:id_pelanggan/:id_tukang?', [
  AuthorizationMiddleware.isAuthenticated
] , PesananController.detail);

// router.get('/get-by-kode/:kode_pesanan', [
//   AuthorizationMiddleware.isAuthenticated
// ], PesananController.getByKode);

export default router;