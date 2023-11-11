import SocialMedia from "./SocialMedia";
import { useSelector } from "react-redux";

const NavbarTop = () => {
  const { site } = useSelector((state) => state.site);
  const siteData = site;
  return (
    <>
      {siteData && (
        <div className="bg-[#00BBAE] h-[60px]">
          <div className="flex justify-between items-center mx-4">
            <div className="flex gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-telephone-fill inline-block me-1"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    id="mainIconPathAttribute"
                    fill="#ffffff"
                  />
                </svg>
                {siteData.phone01 && (
                  <span className="text-white">{siteData.phone01}</span>
                )}
              </div>
              <div className="hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-envelope-fill inline-block me-1"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                    id="mainIconPathAttribute"
                    fill="#ffffff"
                  />
                </svg>
                {siteData.email && (
                  <span className="text-white">{siteData.email}</span>
                )}
              </div>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavbarTop;
