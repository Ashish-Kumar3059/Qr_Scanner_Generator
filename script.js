let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let msg = document.getElementById("msg");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            qrText.value;

        imgBox.style.display = "block";
        msg.style.display = "block";
        msg.innerText = "QR generated successfully ✅";
    } else {
        msg.style.display = "block";
        msg.style.color = "red";
        msg.innerText = "Please enter text or URL ❌";
        imgBox.style.display = "none";
    }
}