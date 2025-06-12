import path from 'path';
import Database from "better-sqlite3";

export const db = new Database(path.join(process.cwd(), 'tasks.db'));

export const sqlApi = {
  getAll: () => {
    try {
      const tasks: unknown[] = db.prepare('SELECT * FROM tasks ORDER BY date DESC').all();

      return {
        success: true,
        data: tasks
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  create: (title: string, date: string) => {
    try {
      const result = db.prepare('INSERT INTO tasks (title, date) VALUES (?, ?)').run(title, date);
      return {
        success: true,
        data: {
          id: result.lastInsertRowid,
          title,
          date,
        }
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  update: (id: string, title: string, date: string) => {
    try {
      const result = db.prepare('UPDATE tasks SET title = ?, date = ? WHERE id = ?')
        .run(title, date, id);

      if (result.changes === 0) {
        return {success: false, error: 'Task not found'};
      }

      return {
        success: true,
        data: {id, title, date}
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  delete: (id: string) => {
    try {
      const result = db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
      if (result.changes === 0) {
        return { success: false, error: 'Task not found' };
      }
      return { success: true, message: 'Task deleted successfully' };
    } catch (error: any) {
      return { success: false, error: error?.message };
    }
  },
}