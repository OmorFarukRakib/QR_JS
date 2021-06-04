var resultContainer = document.getElementById("qr-reader-results");

function onScanSuccess(qrMessage) {
  // handle the scanned code as you like, for example:
  console.log(`QR matched = ${qrMessage}`);
  resultContainer.innerHTML = `${qrMessage}`;
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`QR error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader",
  { fps: 10, aspectRatio: 1.0 },
  /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);

$("#reader").find("a").first().css("display", "none");

$("#reader__scan_region").css({});
$("#reader__scan_region").find("video").first().css({
  height: "500px",
});
