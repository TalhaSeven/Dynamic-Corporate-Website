const Component7 = ({ item }) => {
  return (
    <>
      {item?.data.title1 && (
        <div className="flex flex-wrap justify-center items-center gap-10  font-fredoka font-semibold">
          <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-3xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
            <div className="bg-[#2ec7bd] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
              <i className="fa-solid fa-people-group mt-3 text-3xl text-gray-200"></i>
            </div>
            {item?.data.title1 && item?.data.title2 && (
              <div className="mx-auto text-center  ">
                <p className="text-sm font-semibold ">{item.data.title1}</p>
                <p className="font-thin">{item.data.title2}</p>
              </div>
            )}
          </div>
          <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
            <div className="bg-[#ff9b24] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
              <i className="fa-regular fa-calendar-days mt-3 text-3xl text-gray-200"></i>
            </div>
            {item?.data.title3 && item?.data.title4 && (
              <div className="mx-auto text-center ">
                <p className="text-sm font-semibold ">{item.data.title3}</p>
                <p className="font-thin">{item.data.title4}</p>
              </div>
            )}
          </div>
          <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
            <div className="bg-[#2ec7bd] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
              <i className="fa-solid fa-hourglass-half mt-3 text-3xl text-gray-200"></i>
            </div>
            {item?.data.title5 && item?.data.title6 && (
              <div className="mx-auto text-center  ">
                <p className="text-sm font-semibold ">{item.data.title5}</p>
                <p className="font-thin">{item.data.title6}</p>
              </div>
            )}
          </div>
          <div className="bg-[#fff6eb] w-52 mt-10 mb-10 rounded-xl shadow-xl cursor-pointer shadow-orange-400 hover:shadow-orange-500 ">
            <div className="bg-[#ff577b] w-24 mt-6 rounded-3xl mx-auto mb-10 h-16 text-center">
              <i className="fa-solid  fa-chalkboard-user mt-3 text-3xl text-gray-200"></i>
            </div>
            {item?.data.title7 && item?.data.title8 && (
              <div className="mx-auto text-center  ">
                <p className="text-sm font-semibold ">{item.data.title7}</p>
                <p className="font-thin">{item.data.title8}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Component7;