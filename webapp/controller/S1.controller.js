sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.aluno00.mm.MinhasCompras.controller.S1", {

		onItemPress: function(oEvent){
			var oParameters = oEvent.getParameters();
			var oListItem  = oParameters.listItem;
			// var sId = oListItem.getIntro(); // OPCAO 1
			
			// OPCAO 2
			var oContext = oListItem.getBindingContext();
			var oCompra = oContext.getObject();
			var sId = oCompra.Id;
			
			// alert(sId);
			this.getOwnerComponent().getRouter().navTo("detail", {
				idCompra: sId
			});
		}
		
		
	});
});