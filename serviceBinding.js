function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZMY_PO_00_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}