import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Godfrey Lebo",
    src: "/src-pic.jpeg",
    profile: "/profile-pic.jpeg",
  },
  {
    name: "Frankline Ukpata",
    src: "/frankline-src.jpeg",
    profile: "/franlkine-profile.jpeg",
  },
  {
    name: "David Okoruwa",
    src: "/david-src.jpeg",
    profile: "/david-profile.jpeg",
  },
  {
    name: "Ifunanya Judith",
    src: "/judith-profile.jpeg",
    profile: "/judith-src.jpeg",
  },
  {
    name: "Michael Enyam",
    src: "/michael-profile.jpeg",
    profile: "/michael-src.jpeg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
