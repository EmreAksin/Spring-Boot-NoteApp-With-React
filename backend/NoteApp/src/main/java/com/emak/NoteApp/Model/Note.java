package com.emak.NoteApp.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private Date date;

    @PrePersist
    protected void onCreate() {
        this.date = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.date = new Date();
    }
}
