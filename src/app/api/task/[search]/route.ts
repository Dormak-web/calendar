import {NextRequest} from "next/server";
import {sqlApi} from "@/api/database";

export async function GET(req: NextRequest, {params}: { params: Promise<{ search: string }> }
) {
  try {
    const {search} = await params;

    const res = sqlApi.search(search);
    return Response.json(res, {status: 200})
  } catch (error) {
    return Response.json({error: error}, {status: 500})
  }
}