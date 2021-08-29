import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { name: "Ahmed Sani", src: "/ahmed-profile.jpeg" },
  { name: "Hosbert Eze", src: "/hosbert.jpeg" },
  { name: "Stella Thomas", src: "/stella-profile.jpeg" },
  { name: "Kindness William", src: "/kindness-profile.jpeg" },
  { name: "Joe Upper", src: "/joe-profile.jpeg" },
  { name: "Domeremember Enya", src: "/domerememner-profile.jpeg" },
  { name: "Peter Victor", src: "/victor-profile.jpeg" },
  { name: "Onesimus Okonkwo", src: "/onesimus-profile.jpeg" },
  { name: "Onesimus Okonkwo", src: "/onesimus-profile.jpeg" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} name={contact.name} src={contact.src} />
      ))}
    </div>
  );
}

export default Widgets;
