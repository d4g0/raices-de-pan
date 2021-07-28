export function T({ props, children }) {
  return (
    <div
      className='
        bg-gradient-to-tr 
        from-purple-600 
        to-rose-700 
        text-white 
        rounded-lg 
        shadow-md 
        w-full 
        p-10 
        font-bold 
        text-xl
        '
    >
      {children}
    </div>
  );
}
