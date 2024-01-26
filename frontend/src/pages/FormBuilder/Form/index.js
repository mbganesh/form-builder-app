import { Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FormData({ formData }) {
  const initialValues = formData.reduce((total, current) => {
    return { ...total, [current.id]: "" };
  }, {});

  console.log(initialValues , formData, 'initialValues')

  const getControl = (type, id, config) => {
    console.log("🚀 ~ getControl ~ ̥:", config);
    switch (type) {
      case "text_field":
        return (
          <Paper sx={{ display: "flex", flexDirection: "column", m: "10px" }}>
            <TextField
              label="Text Field"
              variant="outlined"
              helperText="Text Field Helper Text"
            />
          </Paper>
        );

      case "number_field":
        return (
          <Field
            size="small"
            variant="outlined"
            fullWidth={true}
            component={TextField}
            name={id}
            label={id}
          />
        );

      case "switch_field":
        return (
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        );
      default:
        return <div>{type}</div>;
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ submitForm, isSubmitting }) => (
        <Droppable droppableId="form_droppable" type="controls">
          {(provided, snapshot) => (
            <div>
              <List
                style={{
                  backgroundColor: "#f9fafb",
                  borderStyle: "dotted",
                  minHeight: "200px",
                  // width: "400px",
                  overflow: "auto",
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {formData.map((data, index) => {
                  console.log("daaf11", data);
                  return (
                    <Draggable
                      key={`form_draggable_${index}`}
                      draggableId={`form_draggable_${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Paper
                            elevation={3}
                            sx={{ width: "100%", p:2, display: "flex" }}
                          >
                            <Box sx={{ flex: 1 }}>
                              {getControl(data.type, data.id, data)}
                            </Box>

                            <Box
                              sx={{
                                margin: "auto",
                                width: "5%",
                                height: "auto",
                              }}
                            >
                              <IconButton aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" />
                              </IconButton>
                            </Box>
                          </Paper>
                        </ListItem>
                      )}
                    </Draggable>
                  );
                })}
                <ListItem>
                  <Button
                    onClick={submitForm}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </ListItem>
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      )}
    </Formik>
  );
}

/**
 * 
 * 
 * <Card
                            style={{
                              padding: "10px",
                              width: "100%",
                            }}
                            {...provided.dragHandleProps}
                          >
                            {getControl(data.type, data.id , data)}
                          </Card>
 */
