import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold">푸터 로고</div>

        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="#" className="hover:underline">
              이용약관
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              고객센터
            </a>
          </li>
        </ul>

        <div className="text-xs text-gray-400 mt-4 md:mt-0">
          © 2024 회사명. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
