import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import taikhoanReducer from '../features/container/admin/taikhoan/taikhoanSlice'
import quocgiaReducer from "../features/container/admin/Quocgia/quocgiaSlice"
import loaitourReducer from "../features/container/admin/Loaitour/loaitourSlice"
import diadiemReducer from "../features/container/admin/DiaDiem/diadiemSlice"
import tourReducer from "../features/container/admin/Tour/tourSlice"
import anhReducer from "../features/container/admin/Anh/anhSlice"
import dichvuReducer from "../features/container/admin/Dichvu/dichvuSlice"
import roleReducer from "../features/container/admin/Role/roleSlice";
import ngaydiReducer from "../features/container/admin/Ngaydi/ngaydiSlice"
import userroleReducer from "../features/container/admin/header/userroleSlice"
import inforReducer from "../features/container/dangnhap/dangnhapSlice"

const rootReducer = {
  user: userReducer,
  taikhoan: taikhoanReducer,
  quocgias: quocgiaReducer,
  loaitours: loaitourReducer,
  diadiems: diadiemReducer,
  tours: tourReducer,
  anhs: anhReducer,
  dichvus: dichvuReducer,
  roles: roleReducer,
  ngaydis: ngaydiReducer,
  userroles: userroleReducer,
  infor: inforReducer,
}

export default configureStore({
  reducer: rootReducer
});
