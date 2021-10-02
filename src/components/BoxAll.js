import React, { useState, useEffect } from "react";
import { Box, Paper, InputBase, Button, Avatar } from "@mui/material";
import "../styles/boxall.scss";
import SearchIcon from "@mui/icons-material/Search";
import LoopIcon from "@mui/icons-material/Loop";
import axios from "axios";
const BoxContainerForm = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    searchRepos();
  }
  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`
    }).then(res => {
      setLoading(false);
      setRepos(res.data);
      console.log(res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div key={repo.id}>
        <Avatar src={repo.owner.avatar_url} />
      </div>
    );
  }

  // useEffect(() => {
  //   // fetch(`https://api.github.com/users/${username}/repos`)
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //   //     setRepos(data);
  //   //     console.log(data);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err, "Error");
  //   //   });
  // }, []);

  return (
    <Box className="box-all">
      <Box className="box-content">
        <Paper
          component="form"
          sx={{
            padding: "0.3%",
            width: "500px",
            margin: "auto",
            display: "flex ",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <InputBase
            placeholder="Search.."
            sx={{ paddingLeft: "5px", width: "85%", paddingRight: 3 }}
            onChange={e => {
              setUsername(e.target.value);
            }}
            // onClick={e => e.preventDefault()}
            // onKeyPress={e => {
            //   if (e.which == 13) {
            //     e.preventDefault();
            //     //do something
            //   }
            // }}
            value={username}
          />
          <Button onClick={handleClick} sx={{ width: "15%" }} color="secondary" variant="contained">
            {loading ? <LoopIcon /> : <SearchIcon />}
          </Button>
        </Paper>
        <Box className="box-repo">{repos.map(renderRepo)}</Box>
      </Box>
    </Box>
  );
};

export default BoxContainerForm;
