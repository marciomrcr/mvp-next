const data = {
  labels: [],
  datasets: [
    {
      data: [20, 200],
      backgroundColor: [" rgba(67, 56, 202)", "rgba(229, 231, 235)"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

interface RightBar {
  title: string;
  total: number;
}
const RightBar = (props: RightBar) => {
  return (
    <div className="bg-white  w-4/12 rounded-xl border border-gray-100">
      <div className="border-b p-3 border-gray-100">
        <p className="font-semibold  ">{props.title} </p>
      </div>
      {/* <div className="flex flex-col items-center p-3">
        <p className="font-semibold text-lg text-gray-800"> 21 h 47 m 51s</p>
        <p className="text-gray-600 text-sm">
          until next rewards batch is distributed
        </p>
      </div> */}

      <div className="p-4  flex items-center justify-center">
        <div
          className="flex justify-center items-center     h-24 w-24   rounded-full"
          style={{ borderWidth: "16px" }}
        >
          <div className="flex justify-center items-center  border-gray-200 h-30 w-30 rounded-full ">
            <div className=" flex flex-col justify-center items-center shadow-2xl h-32 w-32 rounded-full  ">
              <p className="text-blue-800 font-semibold">{props.total}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-3">
        <p className="text-gray-600 text-sm text-center">
          {" "}
          These are readds availbaleto be claimed right now.
        </p>
      </div>
    </div>
  );
};

export default RightBar;
