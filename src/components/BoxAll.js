import React, { useState } from "react";
import { Box, Paper, InputBase, Button } from "@mui/material";
import "../styles/boxall.scss";
import SearchIcon from "@mui/icons-material/Search";
import LoopIcon from "@mui/icons-material/Loop";
import axios from "axios";
import ProfilGit from "./profilgit";
const BoxContainerForm = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [profil, setProfil] = useState([]);

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
      // console.log(repos[1]);
    });

    axios({
      method: "get",
      url: `https://api.github.com/users/${username}`
    }).then(res => {
      setLoading(false);
      setProfil(res.data);
      console.log(res.data);
    });
  }

  return (
    <Box className="box-all">
      <Box className="box-content">
        <Paper
          component="form"
          sx={{
            padding: "0.3%",
            width: "97%",
            margin: "auto",
            display: "flex ",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <InputBase
            required
            startAdornment={
              loading ? (
                <LoopIcon className="search-icon" sx={{ margin: "0 10px" }} />
              ) : (
                <SearchIcon className="search-icon" sx={{ margin: "0 10px" }} />
              )
            }
            placeholder="Search.."
            sx={{ paddingLeft: "2px", width: "85%", paddingRight: 3 }}
            onChange={async e => {
              setUsername(e.target.value);
            }}
            // onClick={e => e.preventDefault()}
            onKeyPress={e => {
              if (e.which === 13) {
                e.preventDefault();
              }
            }}
            value={username}
          />
          <Button
            onClick={handleClick}
            sx={{ width: "fit-content", padding: "5px 15px", fontFamily: "Poppins" }}
            color="secondary"
            variant="contained"
          >
            Search
          </Button>
        </Paper>
        {/* <Box className="box-repo">{repos.map(renderRepo)}</Box> */}
        <Box className="box-repo">
          <ProfilGit repo={repos} profil={profil} />
        </Box>
      </Box>
    </Box>
  );
};

export default BoxContainerForm;
