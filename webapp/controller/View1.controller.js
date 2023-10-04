sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var that
        return Controller.extend("graphapp.controller.View1", {
            onInit: function () {
                that =this
                var oData = {
                    items: [
                      {"Week": "Category 1", "Revenue": 30},
                      {"Week": "Category 2", "Revenue": 40},
                      {"Week": "Category 3", "Revenue": 20},
                      {"Week": "Category 4", "Revenue": 10}
                    ]
                  };
            
                  var oModel = new sap.ui.model.json.JSONModel(oData);
                 that.byId("idVizFrame").setModel(oModel)
                 
            }
        });
    });
