import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function CustomReactPlayer({
  video,
  videoPlaying = true,
  loop = true,
  muted = true,
  controls = false,
  config = undefined,
  style = undefined,
}: {
  video: string | undefined;
  videoPlaying?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  config?: any;
  style?: any;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const playerConfig = config
    ? config
    : {
        youtube: {
          embedOptions: {},
          playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0,
            fs: 0,
            color: "white",
            modestbranding: 1,
          },
        },
        vimeo: {
          // https://github.com/CookPete/react-player
        },
      };

  return isClient && video ? (
    <ReactPlayer
      url={video}
      width={"100%"}
      height={"100%"}
      playing={videoPlaying}
      loop={loop}
      muted={muted}
      controls={controls}
      config={playerConfig}
      style={style}
    />
  ) : (
    <></>
  );
}
