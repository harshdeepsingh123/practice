import React, { useState, useEffect } from "react";

import axios from "axios";
import BaseCard from "./BasicCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Home = () => {
  const [posts, setposts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userid, setuserid] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
      userid,
      userid,
    });
    console.log(res.data, "posted");
    settitle("");
    setbody("");
    setuserid("");
  };
  return (
    <div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Body"
              type="text"
              value={body}
              onChange={(e) => setbody(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="UserID"
              value={userid}
              onChange={(e) => setuserid(e.target.value)}
              type="number"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={(e) => {
                handlesubmit(e);
                handleClose();
              }}
            >
              Add Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div style={{ textAlign: "center" }}>
        <div>
          <h1> Posts </h1>
        </div>
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Post
          </Button>
        </div>
      </div>
      <br></br>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            style={{ textAlign: "center" }}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {posts.map((val, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <BaseCard title={val.title} body={val.body} id={val.id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
