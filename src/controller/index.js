import { nanoid } from 'nanoid';
import notes from '../data/notes';

export default class Controller {
  static async getAllNotes(req, res) {}

  static async getNoteById(req, res) {}

  static async addNotes(req, res) {
    const { title, tags, body } = req.body;
    const id = nanoid(16);
    const date = new Date().toISOString();

    notes.push({
      id,
      title,
      createdAt: date,
      updatedAt: date,
      tags,
      body,
    });

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
      res.status(201).json({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
    } else {
      res.status(500).json({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
        data: {
          noteId: id,
        },
      });
    }
  }

  static async updateNotes(req, res) {}

  static async deleteNoteById(req, res) {}
}
