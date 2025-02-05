//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */

    (Controller) => {
        "use strict";

        // function onInit() {

        //     var oJSONModel = new sap.ui.model.json.JSONModel();
        //     var oView = this.getView();
        //     var i18nBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

        //     oJSONModel.loadData("./localService/mockdata/ListData.json");
        //     oView.setModel(oJSONModel);
        // };

        // var Main = Controller.extend("logaligroup.lists.controller.ListTypes", {});
        // Main.prototype.onInit = onInit;
        // return Main;

        return Controller.extend("logaligroup.lists.controller.ListTypes", {
            onInit() {

                var oJSONModel = new sap.ui.model.json.JSONModel();
                oJSONModel.loadData("./localService/mockdata/ListData.json");
                this.getView().setModel(oJSONModel);
            }
        });
    });