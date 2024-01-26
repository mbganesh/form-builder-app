import { useState } from "react";

import Controls from "./Controls";
import Form from "./Form";
import { DragDropContext } from "react-beautiful-dnd";
import { Box, Grid, Paper } from "@mui/material";
import BuilderHeader from "components/formBuilder/BuilderHeader";

function FormBuilder() {
  const [formData, setFormData] = useState([]);

  const onDragEnd = (data) => {
    console.log('onDragEnd', data);
    const { draggableId, source, destination } = data;
    if (source && destination) {
      if (source.droppableId === "controls_droppable") {
        const newFormControl = {
          id: `${formData.length}`,
          type: draggableId,
          config: {},
        };
        const newFormData = [...formData];
        newFormData.splice(destination.index, 0, newFormControl);
        setFormData(newFormData);
      }
      if (source.droppableId === "form_droppable") {
        if (source.index !== destination.index) {
          const newFormData = [...formData];
          const movedFormControl = newFormData.splice(source.index, 1)[0];
          newFormData.splice(destination.index, 0, movedFormControl);
          setFormData(newFormData);
        }
      }
    }
  };

  return (
    <>
    <BuilderHeader/>
    <DragDropContext onDragEnd={onDragEnd}>
      <Paper elevation={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent:'space-between',
            // gap:3,
          }}
        >
          <Box >
            <Controls />
          </Box>

          <Box sx={{flex:1 ,  m:2}}>
            <Form formData={formData} />
          </Box>
          
        </Box>
      </Paper>
    </DragDropContext>
    </>
  );
}

export default FormBuilder;
