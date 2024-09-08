import { useState, useEffect } from "react";
import Note from "./Note";
import axios from "axios";

function NoteAdd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);  
  const [currentNoteId, setCurrentNoteId] = useState(null);  

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:8080/api/notes");
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveClick = async () => {
    if (title.trim() === "" || content.trim() === "") return;

    if (isEditing) {
      const response = await axios.put(`http://localhost:8080/api/notes/${currentNoteId}`, {
        title,
        content,
      });
      const updatedNotes = notes.map((note) =>
        note.id === currentNoteId ? { ...note, title, content } : note
      );
      setNotes(updatedNotes);
      setIsEditing(false);
      setCurrentNoteId(null);
    } else {
      const response = await axios.post("http://localhost:8080/api/notes", {
        title,
        content,
      });
      const newNote = { id: response.data.id, title, content }; 
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    }

    setTitle("");
    setContent("");
  };

  const handleNoteDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Silme işlemi başarısız oldu.', error);
    }
  };

  const handleNoteUpdate = (note) => {
    setIsEditing(true);
    setTitle(note.title);
    setContent(note.content);
    setCurrentNoteId(note.id);
  };

  return (
    <div className="p-4 flex w-full">
      <div className="w-1/2 px-3">
        <h2 className="text-xl font-semibold mb-2">{isEditing ? "Notu Güncelle" : "Not ekle"}</h2>
        <div className="mb-4">
          <label htmlFor="baslik" className="block font-medium mb-1">
            Başlık :
          </label>
          <input
            type="text"
            id="baslik"
            name="baslik"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metin" className="block font-medium">
            Metin Ekle
          </label>
          <textarea
            name="metin"
            id="metin"
            cols="30"
            rows="10"
            value={content}
            onChange={handleContentChange}
            className="border rounded-md p-2 w-3/4 text-black"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          {isEditing ? "Güncelle" : "Kaydet"}
        </button>
      </div>
      <div className="w-1/2 pr-3 rounded-md">
        <h2 className="text-xl font-semibold m-4">Notlarınız</h2>
        <div className="w-full">
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <Note
                  title={note.title}
                  content={note.content}
                  onDelete={() => handleNoteDelete(note.id)}
                  onUpdate={() => handleNoteUpdate(note)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoteAdd;
