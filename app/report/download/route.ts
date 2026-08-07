import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiBaseUrl || !apiKey) {
      console.error("Missing API configuration:", { apiBaseUrl: !!apiBaseUrl, apiKey: !!apiKey });
      return NextResponse.json(
        { error: "API configuration is missing" },
        { status: 500 }
      );
    }

    const baseUrl = apiBaseUrl.replace(/\/client\/?$/, "").replace(/\/$/, "");
    const response = await fetch(`${baseUrl}/client/sites`, {
      headers: {
        "x-api-key": apiKey,
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch sites:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to fetch sites from API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const sites = data.sites || [];

    if (sites.length === 0) {
      return NextResponse.json(
        { error: "No sites found" },
        { status: 404 }
      );
    }

    const worksheet = XLSX.utils.json_to_sheet(
      sites.map((item: { name: string; url: string; tag: string }, index: number) => ({
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
