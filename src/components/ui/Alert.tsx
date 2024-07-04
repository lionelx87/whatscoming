export const Alert = ({ message }: { message: string | undefined }) => {
  return (
    <div className="font-regular relative mx-auto mb-4 flex max-h-14 w-full max-w-xl items-center justify-center rounded-lg bg-red-500 p-4 text-center text-base leading-5 text-white opacity-100 lg:h-fit">
      {message}
    </div>
  );
};
