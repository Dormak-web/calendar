import {NextRequest} from "next/server";
import {sqlApi} from "@/api/database";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const {ids} = body

    const result = sqlApi.order(ids)

    if (result.success) {
      return Response.json(result, {status: 200})
    } else {
      return Response.json({error: result.error}, {status: 500})
    }
  } catch (error: any) {
    return Response.json({error: error}, {status: 500})
  }
}