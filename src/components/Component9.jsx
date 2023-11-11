const Component9 = ({ item }) => {
  const data = item?.data;
  const { content1 } = item?.data;
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <>
      {data && (
        <div className="container p-8 lg:p-30">
          <h2 className="text-[3rem] text-center"> {data.title1}</h2>
          <div className="container">
            <p
              className="text-[1.2rem] text-neutral-500 text-center"
              dangerouslySetInnerHTML={dangerouslyHtml}
            ></p>
          </div>

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
                      {data?.day1 && data?.hour1 && data?.program1 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program1}
                          </td>
                        </tr>
                      )}

                      {data?.day2 && data?.hour2 && data?.program2 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day2}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour2}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program2}
                          </td>
                        </tr>
                      )}

                      {data?.day3 && data?.hour3 && data?.program3 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day3}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour3}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program3}
                          </td>
                        </tr>
                      )}
                      {data?.day4 && data?.hour4 && data?.program4 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day4}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour4}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program4}
                          </td>
                        </tr>
                      )}
                      {data?.day5 && data?.hour5 && data?.program5 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day5}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour5}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program5}
                          </td>
                        </tr>
                      )}
                      {data?.day6 && data?.hour6 && data?.program6 && (
                        <tr className="border-b bg-[#fff6eb]">
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.day6}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border-e-2 border-white">
                            {data?.hour6}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data?.program6}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Component9;
