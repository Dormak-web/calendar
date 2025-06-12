import {migrate} from "@/api/migrations";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
  try {
    migrate()
    return Response.json("Migrate successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      {error: error},
      {
        status: 400,
      }
    );
  }
}