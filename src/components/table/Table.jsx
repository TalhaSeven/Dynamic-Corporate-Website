import React from "react";

const Table = () => {
  return (
    <>
      <div className="container p-8 lg:p-30">
        <h2 className="text-[3rem] text-center">Full Day with Learning</h2>
        <div className="container">
          <p className="text-[1.2rem] text-neutral-500 text-center">
            {" "}
            With the help of teachers and the environment as the third teacher,
            students have opportunities to confidently take risks.
          </p>
        </div>

        {/* TABLE */}
        <div className="flex flex-col py-6">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
              <div className="overflow-hidden rounded-2xl">
                <table className="min-w-full text-left text-lg font-light ">
                  <thead className="border-b bg-[#FF9B24] font-medium">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 border-e-2 border-white"
                      >
                        Day
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 border-e-2 border-white"
                      >
                        Hour
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-[#fff6eb]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Otto
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b bg-[#ffecd6]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b bg-[#fff6eb]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b bg-[#ffecd6]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b bg-[#fff6eb]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b bg-[#ffecd6]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b bg-[#fff6eb]">
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Monday
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                        Larry the Bird{" "}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
