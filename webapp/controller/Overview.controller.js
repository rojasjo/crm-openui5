sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("crm.controller.Overview", {

        onNavigatePressed() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail");
        }
    });
});
