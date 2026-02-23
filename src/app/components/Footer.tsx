const Footer = () => {
  const familyFullName = getFamilyFullName();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-4">
      <p className="text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} {familyFullName}家族 - 内部使用，仅限家族成员
      </p>
    </footer>
  );
};
