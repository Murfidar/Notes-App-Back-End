import { Router } from 'express';
import Controller from '../controller';

const router = Router();

router
  .get('/notes', Controller.getAllNotes)
  .post('/notes', Controller.addNotes)
  .get('/notes/:id', Controller.getNoteById)
  .put('/notes/:id', Controller.updateNotesById)
  .delete('/notes/:id', Controller.deleteNoteById);

export default router;
