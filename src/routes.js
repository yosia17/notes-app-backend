import {
  addNoteHandlder,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} from './handler.js';

const Routes = [
  {
    method: 'POST',
    path: '/notes/',
    handler: addNoteHandlder,
  },
  {
    method: 'GET',
    path: '/notes/',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

export default Routes;
