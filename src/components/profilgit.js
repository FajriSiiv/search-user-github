import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import "../styles/profilgit.scss";

const ProfilGit = ({ repo, profil }) => {
  const dateProf = profil.created_at;
  const tgl_pro = new Date(dateProf);
  var moment = require("moment");
  const hasilDate = moment(tgl_pro).format("LL");
  // var bulans = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <Box key={profil.id} className="root-profil">
      <Box className="box-profil">
        <Avatar
          src={profil.avatar_url}
          sx={{
            width: 200,
            height: 200,
            margin: "auto"
          }}
        />
        <Box className="profil-name">
          <h4> Name Github : {profil.login} </h4>
          <h4> Name : {profil.name} </h4>
          <h4>
            {" "}
            Bio : <br /> {profil.bio == null ? "-" : profil.bio}
          </h4>
          <h4> Email : {profil.email == null ? "-" : profil.email} </h4>
          <h4>
            Link : <br />
            <Link target="_blank" underline="always" href={profil.html_url}>
              {profil.html_url}
            </Link>
          </h4>
          <h4> Create : {hasilDate} </h4>

          {/* <h4>
            {" "}
            Repositori Url :{" "}
            <Link target="_blank" underline="always" href={profil.repos_url}>
              {profil.repos_url}
            </Link>{" "}
          </h4> */}
          <h4> Location : {profil.location == null ? "-" : profil.location} </h4>
        </Box>
      </Box>
      <Box className="repo-profil">
        <Box className="detail-foll">
          <div>
            <h3> Follower </h3>
            <h3>{profil.followers}</h3>
          </div>
          <div>
            <h3> Repositories </h3>
            <h3>{profil.public_repos}</h3>
          </div>
          <div>
            <h3> Following </h3>
            <h3>{profil.following}</h3>
          </div>
        </Box>
        <Box className="repo-details">
          {repo.map((e, i) => (
            <Link href={e.html_url} key={e.id} className="link-repo" target="_blank">
              <Box className="details-name">
                <h4>{e.name}</h4>
                <h4> {e.language} </h4>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilGit;
