const Text = ({ item }) => {
  const data = item?.data;
  const { content1 } = item?.data;
  const parser = new DOMParser();
  const cleanHtml1 = parser.parseFromString(content1, "text/html").body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml1 };
  return (
    <>
      {data.title1 && dangerouslyHtml && (
        <div className="px-18 py-20 md:p-24 lg:p-30 bg-gradient-to-r from-[#FEF7EC] to-[#F1FCF8] font-fredoka">
          <div className="container mx-auto">
            <div className="flex justify-center ">
              <div className="mb-10">
                <h4 className="text-center text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-10 whitespace-nowrap ">
                  {data.title1}
                </h4>
                <p
                  className="font-light text-[14px] lg:text-[18px]"
                  dangerouslySetInnerHTML={dangerouslyHtml}
                ></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Text;
