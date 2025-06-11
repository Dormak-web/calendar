export async function fetchTask() {
  try {
    const data = await fetch("/api/task");
    return await data.json();
  } catch (error) {
    return {
      success: true,
      data: []
    }
  }
}