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

export async function createTask(task: any) {
  try {
    const data = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(task)
    });
    return await data.json()
  } catch (error) {
    console.log('Error', error)
  }
}

export async function updateTask(task: any) {
  try {
    const data = await fetch("/api/task", {
      method: "PUT",
      body: JSON.stringify(task)
    });
    return await data.json()
  } catch (error) {
    console.log('Error', error)
  }
}

export async function deleteTask(id: string) {
  try {
    const data = await fetch("/api/task", {
      method: "DELETE",
      body: JSON.stringify(id)
    });
    return await data.json()
  } catch (error) {
    console.log('Error', error)
  }
}