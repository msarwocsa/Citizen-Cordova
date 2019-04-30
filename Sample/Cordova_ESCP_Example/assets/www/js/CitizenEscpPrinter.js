cordova.define("cordova/plugin/citizenEscpPrinter", function(require, exports, module) {
	var exec = require('cordova/exec');

	var CitizenEscpPrinter = function() {};

	<!-- Bluetooth get paired device list-->
	CitizenEscpPrinter.prototype.getPairedBT = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "getPairedBT", []);
	}
	<!-- Connect to printer -->
	CitizenEscpPrinter.prototype.connect = function(successCallback, errorCallback, address, charSet) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "connect", [address, charSet]);
	}
	<!-- Get status of printer -->
	CitizenEscpPrinter.prototype.getStatus = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "getStatus", []);
	}
	<!-- Print text refer to OLE POS Command -->
	CitizenEscpPrinter.prototype.printNormal = function(successCallback, errorCallback, data) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printNormal", [data]);
	}
	<!-- Print text -->
	CitizenEscpPrinter.prototype.printText = function(successCallback, errorCallback, data,alignment,attribute,textSize) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printText", [data,alignment,attribute,textSize]);
	}
	<!-- Print 1D-Barcode -->
	CitizenEscpPrinter.prototype.printBarCode = function(successCallback, errorCallback, data,symbology,height,width,alignment,hri) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printBarCode", [data,symbology,height,width,alignment,hri]);
	}
	<!-- Print QR Code -->
	CitizenEscpPrinter.prototype.printQRCode = function(successCallback, errorCallback, data,dataSize,cellSize,iECL,alignment) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printQRCode", [data,dataSize,cellSize,iECL,alignment]);
	}
	<!-- Print PDF417 -->
	CitizenEscpPrinter.prototype.printPDF417 = function(successCallback, errorCallback, pdfData,dataSize,numberOfColumn,cellWidth,alignment) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printPDF417", [pdfData,dataSize,numberOfColumn,cellWidth,alignment]);
	}
	<!-- Print Image -->
	CitizenEscpPrinter.prototype.printImage = function(successCallback, errorCallback, imagePath,alignment,size) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "printImage", [imagePath,alignment,size]);
	}
	<!-- Print line feed -->
	CitizenEscpPrinter.prototype.lineFeed = function(successCallback, errorCallback, iLine) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "lineFeed", [iLine]);
	}
	<!-- Start Swipe MSR -->
	CitizenEscpPrinter.prototype.swipeMSR = function(successCallback, errorCallback, selTrack) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "swipeMSR", [selTrack]);
	}
	<!-- Cancel Swipe MSR -->
	CitizenEscpPrinter.prototype.cancelMSR = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "cancelMSR", []);
	}
	<!-- Disconnect to printer -->
	CitizenEscpPrinter.prototype.disconnect = function(successCallback, errorCallback) {
		return cordova.exec(successCallback, errorCallback, "CitizenEscpPrinter", "disconnect", []);
	}
	<!-- Bluetooth search -->
	CitizenEscpPrinter.prototype.searchBT = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "searchBT", []);
	}
	<!-- Bluetooth get counter -->
	CitizenEscpPrinter.prototype.getCountBT = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "getCountBT", []);
	}
	<!-- Bluetooth get searched device list -->
	CitizenEscpPrinter.prototype.getListBTAddress = function(successCallback, errorCallback) {
		return exec(successCallback, errorCallback, "CitizenEscpPrinter", "getListBTAddress", []);
	}

	var citizenEscpPrinter = new CitizenEscpPrinter();
	module.exports = citizenEscpPrinter;
});
