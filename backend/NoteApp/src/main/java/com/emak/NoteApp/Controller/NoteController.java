package com.emak.NoteApp.Controller;

import com.emak.NoteApp.Model.Note;
import com.emak.NoteApp.Service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class NoteController {

    @Autowired
    NoteService noteService;

    @GetMapping("/notes")
    public List<Note> getNotes(){
        return noteService.getAllNote();
    }

    @GetMapping("/notes/{id}")
    public Note getNote(@PathVariable long id){
        return noteService.getNoteById(id);
    }

    @PostMapping("/notes")
    public Note addNote(@RequestBody Note note){
        return noteService.addNote(note);
    }

    @PutMapping("/notes/{id}")
    public Note updateNote(@PathVariable long id, @RequestBody Note note){
        return noteService.updateNote(id,note);

    }
    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable long id){
        noteService.deleteNote(id);
    }
}
