import Image from "next/image";


export const MyProfilePic = () => {
  return (
      <section className="w-full mx-auto">
        <Image src="/images/profile.png" width={200} height={200} alt="Hakob" priority={true}  className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"/>
      </section>
  );
};
