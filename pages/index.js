import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/cssreset";
import Menu from "../src/components/Menu";
import { Styledtimeline } from "../src/components/Timeline";

function HomePage() {
  config.playlists;

  return (
    <div>
        <CSSReset />
        <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} >
            Conteúdo
        </TimeLine>
        </div>
    </div>
  );
}
export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 51%;
  }
  .info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 82px 32px 16px 32px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className="info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playlistName = Object.keys(props.playlists);
  //statement
  //Retorno por expressão
  return (
    <Styledtimeline>

      {playlistName.map(function (playlistName) {
        const videos = props.playlists[playlistName];

        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}

    </Styledtimeline>
  );

  //o map você converte de uma coisa para outra.
  // converter playlists em componentes
}
