
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';


export const JournalPage = () => {
  
  return (
    <JournalLayout>
      {/* <Typography>Nostrud ullamco occaecat proident amet irure velit nostrud aute magna. Ut amet aute Lorem pariatur commodo sunt pariatur quis commodo sunt do culpa nostrud eiusmod. Elit elit aliquip cupidatat esse. Sunt et pariatur enim et et excepteur enim incididunt id. Ea laboris consequat esse ut quis commodo nostrud ea dolore tempor proident id.</Typography> */}
      <NothingSelectedView />
      
      {/* <NoteView /> */}
   


    </JournalLayout>
  )
}
