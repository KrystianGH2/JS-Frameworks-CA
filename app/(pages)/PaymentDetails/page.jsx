import CheckOutDetails from "@/app/(components)/CheckOutDetails";
import FormLayout from "@/app/(components)/FormLayout";
import Link from "next/link";

export default function PaymentDetails() {

  return (
    <div className="w-full flex justify-start flex-col items-center text-black  pt-10 gap-10 p-5">
      <div className="text-sm breadcrumbs w-full max-w-7xl text-black pl-2 lg:pl-0">
        <ul>
          <li>
            <Link className=" text-gray-500" href="/Product">
              Products
            </Link>
          </li>
          <li>
            <Link className=" text-gray-500" href="/CheckOutPage">
              Check Out
            </Link>
          </li>
          <li>
            <a className="font-medium underline">Payment Details</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-7xl">
        <h1 className="text-4xl">Payment Details</h1>
        <FormLayout  />
      </div>

      <div>
        <CheckOutDetails />
      </div>
    </div>
  );
}
