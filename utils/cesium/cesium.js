const Cesium = window.Cesium
let viewer = null

function initCesiumMap(dom) {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMzFkMjVkMi01ZDJhLTQ2ZTItOWU1Ni1jNGMwNGVmYTBjNjciLCJpZCI6NjA5MTAsImlhdCI6MTYyNTU1NDczOH0.5jtUpPEWcSm9pbb3ifgI_m5rnAek3JeU5KtdpJm-oJY'
    viewer = new Cesium.Viewer(dom, {
        animation: false,
        baseLayerPicker: true,
        vrButton: false,
        geocoder: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: true,
        infoBox: false,
        fullscreenButton: true,
        selectionIndicator: true,
        homeButton: false,
        scene3DOnly: true,
        // terrainProvider: Cesium.createWorldTerrain({
        //     requestVertexNormals: true,
        //     requestWaterMask: true
        // })
    })

    viewer.cesiumWidget.creditContainer.style.display = "none"
}
export {Cesium, viewer, initCesiumMap}