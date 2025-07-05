// app/api/download/route.ts
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "himanshu_dhillon_resume.pdf"
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="himanshu_dhillon_resume.pdf"',
    },
  });
}
