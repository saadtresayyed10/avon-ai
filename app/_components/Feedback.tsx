import { currentUser } from "@clerk/nextjs/server";

const Feedback = async () => {
  const user = await currentUser();
  return (
    <div className="flex justify-center items-center w-full">
      <form className="flex justify-center items-start flex-col lg:gap-y-6 lg:p-8">
        <input type="text" placeholder={user?.fullName as string} disabled />
        <input
          type="text"
          placeholder={user?.emailAddresses[0].emailAddress as string}
          disabled
        />
        <textarea
          cols={25}
          rows={6}
          className="border"
          placeholder="You message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
