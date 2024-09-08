package com.emak.NoteApp.Service;

import com.emak.NoteApp.Model.Note;
import com.emak.NoteApp.Repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    @Autowired
    NoteRepository noteRepository;


    public List<Note> getAllNote(){
        return noteRepository.findAll();
    }

    public Note getNoteById(Long id){
        return noteRepository.findById(id).orElse(null);
    }

    public Note addNote(Note note){
        noteRepository.save(note);
        return note;
    }

    public Note updateNote(Long id, Note newNoteData) {
        Note existingNote = noteRepository.findById(id).orElse(null);

        if (existingNote != null) {
            existingNote.setTitle(newNoteData.getTitle());
            existingNote.setContent(newNoteData.getContent());

            return noteRepository.save(existingNote);
        } else {
            return null;
        }
    }


    public void deleteNote(Long id){
        noteRepository.deleteById(id);
    }
}
