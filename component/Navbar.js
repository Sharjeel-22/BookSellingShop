import Link from "next/link";

function navBar() {
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <ul className="list-inline text-center mt-2">
          <li className="list-inline-item">
            <Link href={"/"}>
              {" "}
              <a className="text-decoration-none  p-1 text-info"> Home </a>
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link href="/addBook">
              {" "}
              <a className="text-decoration-none  p-1 text-info"> Add Book </a>
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link href={"/books"}>
              {" "}
              <a className="text-decoration-none  p-1 text-info">
                {" "}
                Book Lists{" "}
              </a>
            </Link>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}
export default navBar;
