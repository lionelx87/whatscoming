export const Alert = ({ message }: { message: string }) => {
  return (
    <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
      {message}
    </div>
  );
};
