import video from "../../assets/videos/Animation-Landing-compressed.mp4";

const Video = () => {
  return (
    <video
      src={video}
      className="video-container"
      muted="true"
      loop="true"
      autoplay="true"
    />
  );
};

export default Video;
