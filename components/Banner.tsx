interface Props {
  color: [
    "yellow" | "yellow2" | "green" | "pink" | "purple" | "blue",
    "yellow" | "yellow2" | "green" | "pink" | "purple" | "blue"
  ];
}

const Banner: React.FC<Props> = ({ color }) => {
  return (
    <>
      <div
        className={`relative z-40 h-[60px] translate-x-[-5%] rotate-1 bg-cover w-[110%] ${
          color[0] === "purple"
            ? "bg-[url('/images/banners/banner-purple.png')]"
            : color[0] === "pink"
            ? "bg-[url('/images/banners/banner-pink.png')]"
            : color[0] === "green"
            ? "bg-[url('/images/banners/banner-green.png')]"
            : color[0] === "blue"
            ? "bg-[url('/images/banners/banner-blue.png')]"
            : color[0] === "yellow"
            ? "bg-[url('/images/banners/banner-yellow.png')]"
            : color[0] === "yellow2"
            ? "bg-[url('/images/banners/banner-yellow2.png')]"
            : ""
        }`}
      />
      <div
        className={`relative z-40 w-[110%] h-[60px] translate-x-[-5%] rotate-[-1deg] bg-cover ${
          color[1] === "purple"
            ? "bg-[url('/images/banners/banner-purple.png')]"
            : color[1] === "pink"
            ? "bg-[url('/images/banners/banner-pink.png')]"
            : color[1] === "green"
            ? "bg-[url('/images/banners/banner-green.png')]"
            : color[1] === "blue"
            ? "bg-[url('/images/banners/banner-blue.png')]"
            : color[1] === "yellow"
            ? "bg-[url('/images/banners/banner-yellow.png')]"
            : color[1] === "yellow2"
            ? "bg-[url('/images/banners/banner-yellow2.png')]"
            : ""
        }`}
      />
    </>
  );
};

export default Banner;
