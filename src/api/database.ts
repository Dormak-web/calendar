import path from 'path';
import Database from "better-sqlite3";

export const db = new Database(path.join(process.cwd(), 'tasks.db'));

export const sqlApi = {
  getAll: () => {
    try {
      const tasks: unknown[] = db.prepare('SELECT * FROM tasks ORDER BY [order] ASC').all();

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
      const stmt = db.prepare('INSERT INTO tasks (title, date) VALUES (?, ?) RETURNING *')
      const result = stmt.get(title, date);
      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  update: (id: string, title: string, date: string) => {
    try {
      const stmt = db.prepare('UPDATE tasks SET title = ?, date = ? WHERE id = ? RETURNING *')
      const result = stmt.get(title, date, id);

      if (!result) {
        return {success: false, error: 'Task not found'};
      }

      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  delete: (id: string) => {
    try {
      const result = db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
      if (result.changes === 0) {
        return {success: false, error: 'Task not found'};
      }
      return {success: true, message: 'Task deleted successfully'};
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  search: (title: string) => {
    try {
      const stmt = db.prepare('SELECT * FROM tasks WHERE LOWER(title) LIKE LOWER(?)')
      const results = stmt.all([`%${title}%`]);

      return {success: true, data: results};
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  },
  order: (ids: number[]) => {
    try {
      const caseWhen = ids.map((id: number, index) => `WHEN ? THEN ${index}`).join('\n  ')

      const result = db.prepare(`
        UPDATE tasks 
        SET "order" = CASE id
            ${caseWhen}
        END
        WHERE id IN (${ids});
      `).run(...ids)

      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      return {success: false, error: error?.message};
    }
  }
}