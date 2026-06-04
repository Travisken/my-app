import { useNavigate } from "react-router-dom";

export default function Card({ icon: Icon, title, description, url, color }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4 rounded-3xl p-6 bg-white max-w-sm w-full">
        <div className="flex justify-between w-full">
          <div className={`h-12 w-12 rounded-md flex items-center justify-center ${color}`}>
            <Icon />
          </div>
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-50">
            /
          </div>
        </div>
        <h1 className="font-medium  text-2xl ">{title}</h1>
        <p className="text-black/60 text-base">{description}</p>
        <button
          onClick={() => navigate(url)}
          className="rounded-full px-6 py-3 text-black bg-gray-50 mt-auto font-medium "
        >
          Learn More
        </button>
      </div>
    </>
  );
}
