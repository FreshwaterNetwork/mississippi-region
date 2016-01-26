
define([
    "dojo/_base/declare",
    "plugins/layer_selector/main",
    "dojo/text!./layers.json"],
    function (declare,
              LayerSelectorPlugin,
              layerSourcesJson) {
        return declare(LayerSelectorPlugin, {
            toolbarName: "Hydrologic Alterations",
            fullName: "Configure and control layers to be overlayed on the base map.",

            getLayersJson: function() {
                return layerSourcesJson;
            }
        });
    }
);
