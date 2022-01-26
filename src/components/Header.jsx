import React from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Header() {
  return (
    <header>
      <h1>
        <NoteAddIcon />
        takingNotes
      </h1>
    </header>
  );
}

export default Header;
