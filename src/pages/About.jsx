import { React } from "react";

function About() {
  return (
    <div
      className="min-h-screen top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto space-x-10 shadow flex flex-row bg-light-pink "
      id="navigation"
    >
      <h1 className="md:ml-10 text-5xl text-gray-800  tracking-wide font-semibold hover:text-purple-800 px-3  py-20 justify-center ">
        About
      </h1>
      <p className="text-2xl lg:inline-flex lg:w-auto w-full text-gray-800  px-3 py-10 items-center justify-center shadow">
        ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore sunt
        earum corporis obcaecati eveniet doloremque reprehenderit incidunt illum
        libero quis pariatur, dicta commodi itaque necessitatibus ea voluptate
        placeat asperiores optio consectetur similique vero dolor iure? Corrupti
        voluptatum enim deserunt reiciendis aliquam consequatur, architecto
        expedita modi illum obcaecati,Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Neque dolores nesciunt doloribus, ipsum eligendi
        consequuntur. rem ipsa.
      </p>

      <div className=" text-center  flex p-2 rounded-md shadow md:flex md:items-center md:justify-between md:p-4 ">
        <div className="flex w-3/4 justify-center  space-x-32">
          <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
            <li className="mx-5 mb-5">
              <a
                href=" https://github.com/MaryyamSalah"
                type="button"
                className="mr-2  md:mr-5 text-3xl font-bold hover:text-purple-800"
              >
                <img
                  className="rounded-full w-40"
                  src="data:image/png;base64,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"
                />
                Maryam
              </a>
            </li>
            <li className="mx-5 mb-5">
              <a
                href="https://github.com/Mhamad6000"
                className="mr-2  md:mr-5  data-icon= text-3xl font-bold hover:text-purple-800"
              >
                <img
                  className="rounded-full w-40"
                  src="https://img.freepik.com/premium-vector/men-icon-trendy-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-male-portraits-group-team-adorable-guys-isolated-white-background_275421-286.jpg?w=740"
                />
                Mhamad
              </a>
            </li>
            <li className="mx-5 mb-5">
              <a
                href="https://github.com/ZeynabHamad"
                className="mr-2 text-3xl font-bold hover:text-purple-800"
              >
                <img
                  className="rounded-full w-40"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAbkVgyQbwYNrSwq0FqWDWCJcOQVOf23DvHbOR-G105CfKl0I0Uo6PhBRTHRlianbvHE&usqp=CAU"
                />
                Zeynab
              </a>
            </li>
            <li className="mx-5 mb-5">
              <a
                href="https://github.com/wafaa-alhayek"
                className="mr-2  md:mr-5 text-3xl font-bold hover:text-purple-800"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-vector-stock-91462985.jpg"
                  className="rounded-full w-40"
                />
                Wafa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;