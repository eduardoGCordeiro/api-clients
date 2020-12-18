const PDFKit = require('pdfkit');
const fs = require('fs');

const pdf = new PDFKit();

const generateReport = async (titulo, mensagem) => {
    pdf.text(titulo);
    pdf.text(mensagem);
    pdf.pipe(fs.createWriteStream('detalhes_pedido.pdf'));
    pdf.end();

    return pdf;
}

module.exports = generateReport;