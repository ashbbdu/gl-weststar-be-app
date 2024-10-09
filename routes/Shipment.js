
const express = require("express")
const { addShipment, allShipments, deleteShipment, updateShipment } = require("../controllers/Shipment");



const router = express.Router()
router.post("/addShipment" , addShipment);
router.put("/updateShipment/:shipmentId" , updateShipment);
router.delete("/deleteShipment/:shipmentId" , deleteShipment);
router.get("/allShipments" , allShipments);


module.exports = router;