// Main JavaScript file
console.log("Hello from main.js");

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title.trim() && !content.trim()) {
    alert("Please enter valid content before generating the PDF.");
    return;
  }

  const margin = 10;
  let y = 20;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - margin * 2;

  doc.setFontSize(18);

  // ✅ Wrap title
  const titleLines = doc.splitTextToSize(title, maxWidth);
  doc.text(titleLines, margin, y);

  const titleLineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
  y += titleLines.length * titleLineHeight + 5;

  doc.setFontSize(12);

  // ✅ Wrap content
  const lines = doc.splitTextToSize(content, maxWidth);

  const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;

  lines.forEach((line) => {
    // ✅ Page break
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.text(line, margin, y);
    y += lineHeight;
  });

  doc.save("invoice.pdf");
}
