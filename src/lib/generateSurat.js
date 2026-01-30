import jsPDF from "jspdf";


export function generateSuratPDF(submission) {
  const doc = new jsPDF();

  const today = new Date().toLocaleDateString("id-ID");

  doc.setFont("Times", "Normal");
  doc.setFontSize(12);

  doc.text("SURAT PERMOHONAN PERIZINAN USAHA", 105, 20, { align: "center" });
  doc.text("-----------------------------------------------------", 105, 26, { align: "center" });

  let y = 40;

  doc.text(`Tanggal : ${today}`, 20, y); y += 15;

  doc.text("Kepada Yth,", 20, y); y += 8;
  doc.text("Bapak/Ibu Pejabat Perizinan", 20, y); y += 8;
  doc.text("di Tempat", 20, y); y += 15;

  doc.text(
    "Dengan hormat,\n\n" +
    "Bersama ini kami mengajukan permohonan perizinan usaha dengan data sebagai berikut:",
    20,
    y,
    { maxWidth: 170 }
  );

  y += 30;

  doc.text(`Nama Pemilik   : ${submission.pemilik.namaLengkap}`, 20, y); y += 8;
  doc.text(`No KTP         : ${submission.pemilik.noKTP}`, 20, y); y += 8;
  doc.text(`Alamat         : ${submission.pemilik.alamat}`, 20, y); y += 12;

  doc.text(`Nama Usaha     : ${submission.usaha.namaUsaha}`, 20, y); y += 8;
  doc.text(`Jenis Usaha    : ${submission.usaha.jenisUsaha}`, 20, y); y += 15;

  doc.text(
    "Permohonan ini telah melalui proses verifikasi oleh Admin Sistem dan dinyatakan VALID.\n\n" +
    "Demikian surat ini dibuat untuk dipergunakan sebagaimana mestinya.",
    20,
    y,
    { maxWidth: 170 }
  );

  y += 40;

  doc.text("Hormat Kami,", 140, y); y += 20;
  doc.text(submission.pemilik.namaLengkap, 140, y);

  doc.save(`Surat_Izin_${submission.usaha.namaUsaha}.pdf`);
}
