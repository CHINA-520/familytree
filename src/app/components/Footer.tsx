"use client";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-6">
      <p className="text-sm text-gray-600 text-center">
        莫氏族谱 - 内部资料，仅供家族成员参考【部分资料·待修正·欢迎指正】 © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
