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
                that.upd_chart("line")
            },
            onChange:function(oevt)
            {
                let key = oevt.getSource().getSelectedKey()

                that.upd_chart(key)
            },
            upd_chart:function(data)
            {
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
                 that.byId("idVizFrame1").setModel(oModel)
                 that.byId("idVizFrame1").setVizType(data)
                 that.byId("idVizFrame").setVizType(data)
                 that.byId("idVizFrame1").setVizProperties({
                    plotArea: {
                        dataLabel: {
                            visible: true
                        }
                    }
                });
                that.byId("idVizFrame").setVizProperties({
                    plotArea: {
                        dataLabel: {
                            visible: true
                        }
                    }
                });
            }
        });
    });
