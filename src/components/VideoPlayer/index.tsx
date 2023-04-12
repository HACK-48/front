type Props = {
  src: string;
  title: string;
  width?: number;
  height?: number;
};

const VideoPlayer = ({ src, title, width = 560, height = 433 }: Props) => {
  return (
    <iframe
      width={`${width}`}
      height={`${height}`}
      src={src}
      title={title}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
