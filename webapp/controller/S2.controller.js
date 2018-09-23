sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.aluno00.mm.MinhasCompras.controller.S2", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
			this._oRouter.getRoute("detail").attachPatternMatched(this.onPatternMatched, this);
		},

		onBack: function (oEvent) {
			this._oRouter.navTo("default", {}, true);
		},

		onPatternMatched: function (oEvent) {
			var sId = oEvent.getParameters().arguments.idCompra;

			// var sPath =  "/Compras(guid'" + sId  + "')";

			var oDataModel = this.getView().getModel();

			var that = this;
			oDataModel.metadataLoaded().then(function () {

				var sPath = oDataModel.createKey("/Compras", {
					Id: sId
				});

				that.getView().bindElement({ // READ ou pega do ODataModel
					path: sPath
				});

			});

		},

		onCreate: function () {
			var oDataModel = this.getView().getModel();
			
			var oCompraNova = {
				Name: "Coca Cola",
				Total: "1000"
			};
			
			var oSetting = {
				success: function(oData){
				//	this. // controller
				}.bind(this),
				error: function(){
					
				}.bind(this)
			};
			oDataModel.create("/Compras", oCompraNova, oSetting );
		}

	});

});