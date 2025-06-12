import {sqlApi} from "@/api/database";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
  const tasks = sqlApi.getAll()

  if (tasks.success) {
    return Response.json(tasks, {status: 200})
  } else {
    return Response.json({error: tasks.error}, {status: 500})
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {title, date} = body;

    const task = sqlApi.create(title, date)

    if (task.success) {
      return Response.json(task, {status: 200})
    } else {
      return Response.json({error: task.error}, {status: 500})
    }
  } catch (error) {
    return Response.json({error: error}, {status: 500})
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {id, title, date} = body;

    const task = sqlApi.update(id, title, date)

    if (task.success) {
      return Response.json(task, {status: 200})
    } else {
      return Response.json({error: task.error}, {status: 500})
    }
  } catch (error) {
    return Response.json({error: error}, {status: 500})
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = await req.json();

    const res = sqlApi.delete(id)

    if (res.success) {
      return Response.json(res, {status: 200})
    } else {
      return Response.json({error: res.error}, {status: 500})
    }
  } catch (error) {
    return Response.json({error: error}, {status: 500})
  }
}