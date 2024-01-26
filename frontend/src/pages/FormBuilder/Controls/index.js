import { Icon, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { Droppable, Draggable } from "react-beautiful-dnd";


import TextFieldsIcon from '@mui/icons-material/TextFields';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradingIcon from '@mui/icons-material/Grading';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const controls = [
  {
    value: "text_field",
    label: "Text Field",
    config: "text",
    icon: <TextFieldsIcon/>
  },
  {
    value: "number_field",
    label: "Number Field",
    config: "number",
    icon: <LooksOneIcon/>
  },
  {
    value: "switch_field",
    label: "Switch Field",
    config: {
      label: "Switch Field dev",
      
    },
    icon: <ToggleOffIcon/>
  },
  {
    value: "text_area_field",
    label: "Text Area Field",
    config: "text",
    icon: <ChatBubbleOutlineIcon/>
  },
  {
    value: "date_field",
    label: "Date Field",
    config: "date",
    icon: <CalendarMonthIcon/>
  },
  {
    value: "checkbox_field",
    label: "Checkbox Field",
    config: "checkbox",
    icon: <CheckBoxIcon/>
  },
  {
    value: "select_field",
    label: "Select Field",
    icon: <GradingIcon/>
  }
];

function Controls() {
  return (
    <Droppable
      droppableId="controls_droppable"
      type="controls"
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <List
          sx={{ backgroundColor: '' }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {controls.map((control, index) => (
            <Draggable
              key={`control_draggable_${control.value}`}
              draggableId={control.value}
              index={index}
            >
              {(provided, snapshot) => (
                <Paper
                 elevation={3}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ListItem
                    key={control.value}
                    style={{ backgroundColor: "" }}
                  >
                    <ListItemIcon>
                      <Icon  style={{ color: "white" }}>
                        {control.icon}
                      </Icon>
                    </ListItemIcon>
                    <ListItemText style={{ color: "white" }}>
                      {control.label}
                    </ListItemText>
                  </ListItem>
                </Paper>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
}

export default Controls;
