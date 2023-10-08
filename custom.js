// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#btn-one").addEventListener("click", function () {
//     html2canvas(document.querySelector("#content")).then((canvas) => {
//       let base64image = canvas.toDataURL("image/png/cdn");
//       let contentWidth = canvas.width * 0.75;
//       let contentHeight = canvas.height * 0.75;
//       let pdf = new jsPDF("p", "mm", [contentWidth, contentHeight]);
//       pdf.addImage(base64image, "PNG", 0, 0, contentWidth, contentHeight);
//       pdf.save("webtylepress-two.pdf");
//     });
//   });
// });

  //  document.addEventListener("DOMContentLoaded", function () {
  //    document.querySelector("#btn-one").addEventListener("click", function (){
  //      const contentElements = document.querySelectorAll("#content");
  //      const pdf = new jsPDF("p", "mm", "a4"); // Create a new A4 size PDF

  //      contentElements.forEach((element, index) => {
  //        html2canvas(element).then((canvas) => {
  //          const imgData = canvas.toDataURL("image/jpeg");
  //          const contentWidth = 210; // A4 page width in mm
  //          const contentHeight = (210 * canvas.height) / canvas.width; // Calculate height to maintain aspect ratio

  //          if (index > 0) {
  //            pdf.addPage(); // Add a new page when content doesn't fit on the current page
            
  //          }
          

  //          pdf.addImage(imgData, "JPEG", 0, 0, contentWidth, contentHeight);

  //          // If it's the last element, save the PDF
  //          if (index === contentElements.length - 1) {
  //            pdf.save(`webtylepress-multi-page.pdf`);
  //          }
  //        });
  //      });
  //    });
  //  });




