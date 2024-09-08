function Note({ title, content, onDelete, onUpdate }) {
  return (
    <div className="border border-gray-300 p-2 m-2 rounded-md w-full bg-orange-700 ">
      <h1 className="font-extrabold p-3 overflow-wrap break-word bg-orange-900 rounded-xl whitespace-pre-line">
        {title}
      </h1>
      <div className="p-3 w-full  break-words  bg-orange-800 rounded-xl m-2 ">
        <p className="whitespace-pre-line">{content}</p>
      </div>
      <button
        className="bg-red-700 hover:bg-red-900 text-white font-bold p-2 rounded-full"
        onClick={onDelete}
      >
        Delete 🗑️
      </button>
      <button
        className="bg-green-700 hover:bg-green-900 text-white font-bold p-2 rounded-full ml-2"
        onClick={onUpdate}
      >
        Update ✏️
      </button>
    </div>
  );
}

export default Note;
