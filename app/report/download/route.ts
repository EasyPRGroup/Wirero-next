import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import domainsData from "../../../data/domains-by-tag.json";

export async function GET() {
  try {
    const data = domainsData as Array<{ tag: string; name: string; url: string }>;

    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item, index) => ({
        "#": index + 1,
        "Media Category": item.tag,
        "Site Name": item.name,
        "Site URL": item.url,
      }))
    );

    const headers = ["#", "Media Category", "Site Name", "Site URL"];
    headers.forEach((header, colIndex) => {
      const cellAddress = XLSX.utils.encode_cell({ r: 0, c: colIndex });
      const cell = worksheet[cellAddress];
      if (cell) {
        cell.s = {
          font: { bold: true, color: { rgb: "FFFFFFFF" } },
          fill: { fgColor: { rgb: "FF0461c3" } },
        };
      }
    });

    worksheet["!cols"] = [
      { wch: 5 },
      { wch: 35 },
      { wch: 35 },
      { wch: 45 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sample Report");

    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer", cellStyles: true });

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="wirero-sample-report.xlsx"',
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error generating sample report:", error);
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}
