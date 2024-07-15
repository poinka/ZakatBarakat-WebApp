import Link from "next/link";

const StartEducation = () => {
  return (
      <div className="bg-white rounded-xl p-8 shadow-lg w-10/12 md:w-1/2 lg:w-1/3" style={{maxWidth: "1000px", margin: "auto", position: "relative", top: "25%", marginTop: "10%"}}>
        <h1 className="text-green-900 font-bold text-xl md:text-2xl lg:text-3xl mb-4">Islamic Financial Academy</h1>
        <Link href="/courses">
        <button className="mt-4 bg-green-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-900 text-sm md:text-base lg:text-lg">
          start education
        </button>
        </Link>
      </div>
  );
};

export default StartEducation;
