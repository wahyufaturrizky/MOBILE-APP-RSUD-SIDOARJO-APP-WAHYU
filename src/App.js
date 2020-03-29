import { Root } from "native-base";
import React from "react";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

// Menu Dashboard
import Dashboard from "./screens/dashboard/";
import CheckInScanQRCode from "./screens/dashboard/check-in-scan-qrcode";
import CheckInScanQRCodeMaintenance from "./screens/dashboard/check-in-scan-qrcode-maintenance";
import CheckOutScanQRCodeMaintenance from "./screens/dashboard/check-out-scan-qrcode-maintenance";
import CheckOutScanQRCodePerbaikan from "./screens/dashboard/check-out-scan-qrcode-perbaikan";

import DetailAsetHistory from "./screens/dashboard/detail-aset-history";
import DetailAsetHistoryPartTwo from "./screens/dashboard/detail-aset-history-two";
import DetailAsetHistoryPartThree from "./screens/dashboard/detail-aset-history-three";
import DetailAsetHistoryPartFour from "./screens/dashboard/detail-aset-history-four";
import DetailAsetHistoryPartFive from "./screens/dashboard/detail-aset-history-five";
import DetailAsetHistoryPartSix from "./screens/dashboard/detail-aset-history-six";
import DetailAsetHistoryPartSeven from "./screens/dashboard/detail-aset-history-seven";
import DetailAsetHistoryPartEight from "./screens/dashboard/detail-aset-history-eight";

import DetailAsetHistoryMaintenance from "./screens/dashboard/detail-aset-history-maintenance";
import DetailTiketMaintenance from "./screens/dashboard/detail-tiket-maintenance";
import DetailTiketPerbaikan from "./screens/dashboard/detail-tiket-perbaikan";
import HasilPekerjaan from "./screens/dashboard/hasil-pekerjaan";
import HasilPekerjaanMaintenance from "./screens/dashboard/hasil-pekerjaan-maintenance";
import ProsesIdentifikasiPartOne from "./screens/dashboard/proses-identifikasi-part-one";
import ProsesIdentifikasiPartOneMaintenance from "./screens/dashboard/proses-identifikasi-part-one-maintenance";
import ProsesIdentifikasiPartThree from "./screens/dashboard/proses-identifikasi-part-three";
import ProsesIdentifikasiPartThreeMaintenance from "./screens/dashboard/proses-identifikasi-part-three-maintenance";
import ProsesIdentifikasiPartTwo from "./screens/dashboard/proses-identifikasi-part-two";
import ProsesIdentifikasiPartTwoMaintenance from "./screens/dashboard/proses-identifikasi-part-two-maintenance";
import ReviewHasilPekerjaan from "./screens/dashboard/review-hasil-pekerjaan";
import TiketKeluhanMaintenance from "./screens/dashboard/tiket-keluhan-maintenance";
import TiketKeluhanPerbaikan from "./screens/dashboard/tiket-keluhan-perbaikan";
import TiketKeluhanPerbaikanTwo from "./screens/dashboard/tiket-keluhan-perbaikan-two";

// Tiket Maintenance
import TiketMaintenance from "./screens/dashboard/tiket-maintenance";
import ViewPermintaanMaintenance from "./screens/dashboard/view-permintaan-maintenance";
import ViewPermintaanMaintenancePartTwo from "./screens/dashboard/view-permintaan-maintenance-two";
import ViewPermintaanMaintenancePartThree from "./screens/dashboard/view-permintaan-maintenance-three";
import ViewPermintaanMaintenancePartFour from "./screens/dashboard/view-permintaan-maintenance-four";
import ViewPermintaanMaintenancePartFive from "./screens/dashboard/view-permintaan-maintenance-five";

// Tiket Perbaikan
import TiketPerbaikan from "./screens/dashboard/tiket-perbaikan";

import ViewPermintaanPerbaikan from "./screens/dashboard/view-permintaan-perbaikan";
import ViewPermintaanPerbaikanPartTwo from "./screens/dashboard/view-permintaan-perbaikan-part-two";
import ViewPermintaanPerbaikanPartThree from "./screens/dashboard/view-permintaan-perbaikan-three";
import ViewPermintaanPerbaikanPartFour from "./screens/dashboard/view-permintaan-perbaikan-part-four";
import ViewPermintaanPerbaikanPartFive from "./screens/dashboard/view-permintaan-perbaikan-part-five";
import ViewPermintaanPerbaikanPartSix from "./screens/dashboard/view-permintaan-perbaikan-part-six";
import ViewPermintaanPerbaikanPartSeven from "./screens/dashboard/view-permintaan-perbaikan-part-seven";
import ViewPermintaanPerbaikanPartEight from "./screens/dashboard/view-permintaan-perbaikan-part-eight";

// Menu Auth
import LoginUser from "./screens/loginUser/";
import ForgotPassword from "./screens/loginUser/forgot-password";

// Menu Profile
import MyProfile from "./screens/myProfile/";
import EditProfil from "./screens/myProfile/edit-profil";
import DetailProfil from "./screens/myProfile/detail-profil";

// Riwayat
import MenuNotifPerbaikan from "./screens/notif/";

// Sparepart
import SparePartListView from "./screens/sparepart/";
import SparePartListViewPartTwo from "./screens/dashboard/spare-part-list-view-part-two";

import DetailSparePart from "./screens/sparepart/sparepart-detail";
import DetailSparePartTwo from "./screens/dashboard/sparepart-detail-two";

// Tiket
// Tiket Perbaikan
import MenuTiketPerbaikan from "./screens/tiket/";
import DetailTiketPerbaikanPartTwo from "./screens/tiket/detail-tiket-perbaikan-two";
import ViewPermintaanPerbaikanPartNine from "./screens/tiket/view-permintaan-perbaikan-part-nine";
import ViewPermintaanPerbaikanPartTen from "./screens/tiket/view-permintaan-perbaikan-part-ten";
import ViewPermintaanPerbaikanPartEleven from "./screens/tiket/view-permintaan-perbaikan-part-eleven";
import ViewPermintaanPerbaikanPartTwelve from "./screens/tiket/view-permintaan-perbaikan-part-twelve";
import DetailAsetHistoryPartNine from "./screens/tiket/detail-aset-history-nine";
import DetailAsetHistoryPartTen from "./screens/tiket/detail-aset-history-ten";
import DetailAsetHistoryPartEleven from "./screens/tiket/detail-aset-history-eleven";
import DetailAsetHistoryPartTwelve from "./screens/tiket/detail-aset-history-twelve";
import CheckInScanQRCodeTwo from "./screens/tiket/check-in-scan-qrcode-two";
import ProsesIdentifikasiPartFour from "./screens/tiket/proses-identifikasi-part-four";
import HasilPekerjaanPartTwo from "./screens/tiket/hasil-pekerjaan-two";
import TiketKeluhanPerbaikanThree from "./screens/tiket/tiket-keluhan-perbaikan-three";
import CheckOutScanQRCodePerbaikanPartTwo from "./screens/tiket/check-out-scan-qrcode-perbaikan-two";

// Tiket
// Tiket Maintenance
import MenuTiketMaintenance from "./screens/tiket/menu-tiket-maintenance";
import DetailTiketMaintenancePartTwo from "./screens/tiket/detail-tiket-maintenance-two";
import ViewPermintaanMaintenancePartSix from "./screens/tiket/view-permintaan-maintenance-six";
import ViewPermintaanMaintenancePartSeven from "./screens/tiket/view-permintaan-maintenance-seven";
import DetailAsetHistoryPartThirteen from "./screens/tiket/detail-aset-history-thirteen";
import CheckInScanQRCodeMaintenancePartTwo from "./screens/tiket/check-in-scan-qrcode-maintenance-two";
import ProsesIdentifikasiPartFourMaintenance from "./screens/tiket/proses-identifikasi-part-four-maintenance";

// Menu Authentication
const AuthStack = createStackNavigator(
	{
		LoginUser: { screen: LoginUser },
		ForgotPassword: { screen: ForgotPassword }
	},
	{
		headerMode: "none",
		initialRouteParams: "LoginUser"
	}
);

// Menu Dashboard
const DashboardStack = createStackNavigator(
	{
    // Dashboard Utama
    Dashboard: { screen: Dashboard },
    
    // Tiket Perbaikan
    ReviewHasilPekerjaan: { screen: ReviewHasilPekerjaan },
    TiketPerbaikan: { screen: TiketPerbaikan },
    DetailTiketPerbaikan: { screen: DetailTiketPerbaikan },
    ViewPermintaanPerbaikan: { screen: ViewPermintaanPerbaikan },
    ViewPermintaanPerbaikanPartTwo: { screen: ViewPermintaanPerbaikanPartTwo },
    ViewPermintaanPerbaikanPartThree: { screen: ViewPermintaanPerbaikanPartThree },
    ViewPermintaanPerbaikanPartFour: { screen: ViewPermintaanPerbaikanPartFour },
    ViewPermintaanPerbaikanPartFive: { screen: ViewPermintaanPerbaikanPartFive },
    ViewPermintaanPerbaikanPartSix: { screen: ViewPermintaanPerbaikanPartSix },
    ViewPermintaanPerbaikanPartSeven: { screen: ViewPermintaanPerbaikanPartSeven },
    ViewPermintaanPerbaikanPartEight: { screen: ViewPermintaanPerbaikanPartEight },
    
    DetailAsetHistory: { screen: DetailAsetHistory },
    DetailAsetHistoryPartTwo: { screen: DetailAsetHistoryPartTwo },
    DetailAsetHistoryPartThree: { screen: DetailAsetHistoryPartThree },
    DetailAsetHistoryPartFour: { screen: DetailAsetHistoryPartFour },
    DetailAsetHistoryPartFive: { screen: DetailAsetHistoryPartFive },
    DetailAsetHistoryPartSix: { screen: DetailAsetHistoryPartSix },
    DetailAsetHistoryPartSeven: { screen: DetailAsetHistoryPartSeven },
    DetailAsetHistoryPartEight: { screen: DetailAsetHistoryPartEight },
    
    ProsesIdentifikasiPartOne: { screen: ProsesIdentifikasiPartOne },
    ProsesIdentifikasiPartTwo: { screen: ProsesIdentifikasiPartTwo },
    ProsesIdentifikasiPartThree: { screen: ProsesIdentifikasiPartThree },
    SparePartListViewPartTwo: { screen: SparePartListViewPartTwo },
    DetailSparePartTwo: { screen: DetailSparePartTwo },

    HasilPekerjaan: { screen: HasilPekerjaan },
    CheckInScanQRCode: { screen: CheckInScanQRCode },

    CheckOutScanQRCodePerbaikan: { screen: CheckOutScanQRCodePerbaikan },
    TiketKeluhanPerbaikan: { screen: TiketKeluhanPerbaikan },
    TiketKeluhanPerbaikanTwo: { screen: TiketKeluhanPerbaikanTwo },

    // Tiket Maintenance
    TiketMaintenance: { screen: TiketMaintenance },
    DetailTiketMaintenance: { screen: DetailTiketMaintenance },
    ViewPermintaanMaintenance: { screen: ViewPermintaanMaintenance },
    ViewPermintaanMaintenancePartTwo: { screen: ViewPermintaanMaintenancePartTwo },
    ViewPermintaanMaintenancePartThree: { screen: ViewPermintaanMaintenancePartThree },
    ViewPermintaanMaintenancePartFour: { screen: ViewPermintaanMaintenancePartFour },
    ViewPermintaanMaintenancePartFive: { screen: ViewPermintaanMaintenancePartFive },
    DetailAsetHistoryMaintenance: { screen: DetailAsetHistoryMaintenance },
    ProsesIdentifikasiPartOneMaintenance: { screen: ProsesIdentifikasiPartOneMaintenance },
    ProsesIdentifikasiPartTwoMaintenance: { screen: ProsesIdentifikasiPartTwoMaintenance },
    ProsesIdentifikasiPartThreeMaintenance: { screen: ProsesIdentifikasiPartThreeMaintenance },
    HasilPekerjaanMaintenance: { screen: HasilPekerjaanMaintenance },
    CheckInScanQRCodeMaintenance: { screen: CheckInScanQRCodeMaintenance },
    CheckOutScanQRCodeMaintenance: { screen: CheckOutScanQRCodeMaintenance },
    TiketKeluhanMaintenance: { screen: TiketKeluhanMaintenance },
	},
	{
		headerMode: "none",
		initialRouteParams: "Dashboard"
	}
);

// Menu Spare Part
const SparePartStack = createStackNavigator(
	{
		// Spaerpart
    SparePartListView: { screen: SparePartListView },
    DetailSparePart: { screen: DetailSparePart },
	},
	{
		headerMode: "none",
		initialRouteParams: "SparePartListView"
	}
);

// Menu Tiket
const TiketStack = createStackNavigator(
	{
    // Tiket Perbaikan
    MenuTiketPerbaikan: { screen: MenuTiketPerbaikan },
    DetailTiketPerbaikanPartTwo: { screen: DetailTiketPerbaikanPartTwo },
    ViewPermintaanPerbaikanPartNine: { screen: ViewPermintaanPerbaikanPartNine },
    DetailAsetHistoryPartNine: { screen: DetailAsetHistoryPartNine },
    DetailAsetHistoryPartTen: { screen: DetailAsetHistoryPartTen },
    DetailAsetHistoryPartEleven: { screen: DetailAsetHistoryPartEleven },
    DetailAsetHistoryPartTwelve: { screen: DetailAsetHistoryPartTwelve },
    CheckInScanQRCodeTwo: { screen: CheckInScanQRCodeTwo },
    ProsesIdentifikasiPartFour: { screen: ProsesIdentifikasiPartFour },
    ViewPermintaanPerbaikanPartTen: { screen: ViewPermintaanPerbaikanPartTen },
    HasilPekerjaanPartTwo: { screen: HasilPekerjaanPartTwo },
    TiketKeluhanPerbaikanThree: { screen: TiketKeluhanPerbaikanThree },
    ViewPermintaanPerbaikanPartTwelve: { screen: ViewPermintaanPerbaikanPartTwelve },
    ViewPermintaanPerbaikanPartEleven: { screen: ViewPermintaanPerbaikanPartEleven },
    CheckOutScanQRCodePerbaikanPartTwo: { screen: CheckOutScanQRCodePerbaikanPartTwo },

    // Tiket Maintenance
    MenuTiketMaintenance: { screen: MenuTiketMaintenance },
    DetailTiketMaintenancePartTwo: { screen: DetailTiketMaintenancePartTwo },
    ViewPermintaanMaintenancePartSix: { screen: ViewPermintaanMaintenancePartSix },
    ViewPermintaanMaintenancePartSeven: { screen: ViewPermintaanMaintenancePartSeven },
    DetailAsetHistoryPartThirteen: { screen: DetailAsetHistoryPartThirteen },
    CheckInScanQRCodeMaintenancePartTwo: { screen: CheckInScanQRCodeMaintenancePartTwo },
    ProsesIdentifikasiPartFourMaintenance: { screen: ProsesIdentifikasiPartFourMaintenance },
	},
	{
		headerMode: "none",
		initialRouteParams: "MenuTiketPerbaikan"
	}
);

// Menu Riwayat
const RiwayatStack = createStackNavigator(
	{
    // Riwayat
    MenuNotifPerbaikan: { screen: MenuNotifPerbaikan },
	},
	{
		headerMode: "none",
		initialRouteParams: "MenuNotifPerbaikan"
	}
);

// Menu Profile
const ProfileStack = createStackNavigator(
	{
    // Profile
    MyProfile: { screen: MyProfile },
    EditProfil: { screen: EditProfil },
    DetailProfil: { screen: DetailProfil },
	},
	{
		headerMode: "none",
		initialRouteParams: "MyProfile"
	}
);

const AppNavigator = createSwitchNavigator(
  {
    AuthStack,
    DashboardStack,
    SparePartStack,
    TiketStack,
    RiwayatStack,
    ProfileStack
  },
  {
    initialRouteName: "AuthStack",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
