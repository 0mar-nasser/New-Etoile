import { NextResponse } from "next/server";
import { getAdminCatalog, createAdminProduct } from "@/app/actions/admin-catalog";

export async function GET() {
  const result = await getAdminCatalog();
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
  return NextResponse.json({ data: result.data });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await createAdminProduct(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ data: result.data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
