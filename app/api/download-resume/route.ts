import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "assets", "resume.pdf");

  try {
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Devang_Makwana_Resume.pdf"',
      },
    });
  } catch (e) {
    console.error("Error reading resume file:", e);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
